import struct
import numpy as np
import os
from tqdm import tqdm

# 定义ETL9G记录的结构
# 参考: http://etlcdb.db.aist.go.jp/etl9/ETL9SUMMARY.TXT (以及其他ETL文档)
# 每个记录是 8199 字节 (修正: 之前是 8192 字节)
RECORD_SIZE = 8199
IMAGE_WIDTH_RAW = 128
IMAGE_HEIGHT_RAW = 127
IMAGE_SIZE_RAW = IMAGE_WIDTH_RAW * IMAGE_HEIGHT_RAW # 16256 像素
BITS_PER_PIXEL = 4 # 4-bit 灰度图像

# 输出图像尺寸
TARGET_IMAGE_SIZE = 28

def extract_etl9g_record(record_bytes):
    # 解析ETL9G记录
    # 记录结构大致如下（并非所有字段都用到）：
    # 0-1字节: 记录长度 (未使用)
    # 2-5字节: 字符类别编号 (JIS code)
    # 6-9字节: 编写者ID (未使用)
    # 10-13字节: 记录编号 (未使用)
    # 14-8191字节: 图像数据 (4-bit 灰度)

    # 提取JIS编码 (大端序)
    # 实际的 ETL9G JIS 编码在字节 3-4 （2 bytes）
    jis_code = struct.unpack('>H', record_bytes[2:4])[0]

    # 图像数据从字节 64 开始 (修正: 之前是 65)
    # 4-bit 灰度，每两个像素存储在一个字节中
    # 图像数据是 128x127，共 16256 像素 (占用 16256 / 2 = 8128 字节)
    image_data_raw = record_bytes[64:64 + IMAGE_SIZE_RAW // 2]

    # 将 4-bit 图像数据转换为 8-bit 灰度图像
    image = np.zeros((IMAGE_HEIGHT_RAW, IMAGE_WIDTH_RAW), dtype=np.uint8)
    for i, byte_val in enumerate(image_data_raw):
        # 高4位是第一个像素
        pixel1 = (byte_val >> 4) & 0x0F
        # 低4位是第二个像素
        pixel2 = byte_val & 0x0F

        # 将 4-bit 值映射到 0-255 范围 (0为黑，15为白，反转以符合常见图像)
        image_val1 = int((15 - pixel1) / 15.0 * 255.0)
        image_val2 = int((15 - pixel2) / 15.0 * 255.0)

        # 计算在 128x127 图像中的位置
        idx1 = 2 * i
        idx2 = 2 * i + 1

        row1 = idx1 // IMAGE_WIDTH_RAW
        col1 = idx1 % IMAGE_WIDTH_RAW
        row2 = idx2 // IMAGE_WIDTH_RAW
        col2 = idx2 % IMAGE_WIDTH_RAW
        
        if row1 < IMAGE_HEIGHT_RAW and col1 < IMAGE_WIDTH_RAW:
            image[row1, col1] = image_val1
        if row2 < IMAGE_HEIGHT_RAW and col2 < IMAGE_WIDTH_RAW:
            image[row2, col2] = image_val2
    
    return image, jis_code

def resize_image(image, target_size):
    # 使用 PIL 库进行图像缩放
    from PIL import Image
    img = Image.fromarray(image, mode='L') # 指定为灰度模式
    img = img.resize((target_size, target_size), Image.LANCZOS)
    return np.array(img)

def preprocess_etl9(input_dir, output_dir):
    all_images = []
    all_labels = []

    # ETL9G 文件名通常从 ETL9G_01 到 ETL9G_50
    # 这里我们只处理平假名，对应于 JIS 编码范围
    # 平假名的JIS编码范围在 0x2421 (あ) 到 0x247E (っ)
    # 共 71 个字符。我们需要确保 HIRAGANA_CHARS 列表与这个顺序匹配
    HIRAGANA_CHARS = [ # 共71个平假名
      'あ', 'い', 'う', 'え', 'お',
      'か', 'き', 'く', 'け', 'こ',
      'さ', 'し', 'す', 'せ', 'そ',
      'た', 'ち', 'つ', 'て', 'と',
      'な', 'に', 'ぬ', 'ね', 'の',
      'は', 'ひ', 'ふ', 'へ', 'ほ',
      'ま', 'み', 'む', 'め', 'も',
      'や', 'ゆ', 'よ',
      'ら', 'り', 'る', 'れ', 'ろ',
      'わ', 'を', 'ん',
      'が', 'ぎ', 'ぐ', 'げ', 'ご',
      'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
      'だ', 'ぢ', 'づ', 'で', 'ど',
      'ば', 'び', 'ぶ', 'べ', 'ぼ',
      'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
      'ゃ', 'ゅ', 'ょ', 'っ'
    ]

    # 构建JIS编码到 HIRAGANA_CHARS 索引的映射
    # 假设 ETL9G 中的平假名JIS编码是连续的，从 0x2421 开始对应 HIRAGANA_CHARS[0]
    jis_to_index = {0x2421 + i: i for i in range(len(HIRAGANA_CHARS))}

    # 遍历所有 ETL9G 文件
    # ETL9G 文件名通常从 ETL9G_01 到 ETL9G_50
    etl9g_files = [f for f in os.listdir(input_dir) if f.startswith('ETL9G_')]
    etl9g_files.sort() # 确保按顺序处理文件

    if not etl9g_files:
        print(f"Error: No ETL9G files found in {input_dir}. Please ensure files are placed correctly.")
        return

    print(f"Found {len(etl9g_files)} ETL9G files to process.")

    # 使用 tqdm 显示进度条
    for filename in tqdm(etl9g_files, desc="Processing ETL9G files"):
        filepath = os.path.join(input_dir, filename)
        with open(filepath, 'rb') as f:
            # 跳过文件头 (如果有的话，但G-type文件没有明确的文件头，直接是记录流)
            while True:
                record_bytes = f.read(RECORD_SIZE)
                if not record_bytes:
                    break # 文件结束

                if len(record_bytes) != RECORD_SIZE:
                    #print(f"Warning: Incomplete record found in {filename}, skipping.")
                    continue

                image_raw, jis_code = extract_etl9g_record(record_bytes)
                
                # 只处理平假名
                if jis_code in jis_to_index:
                    # 将图像归一化到 0-1
                    resized_image = resize_image(image_raw, TARGET_IMAGE_SIZE) / 255.0 
                    all_images.append(resized_image)
                    all_labels.append(jis_to_index[jis_code])
                #else:
                    # 如果需要调试，可以打印出跳过的非平假名字符的JIS编码
                    # print(f"Skipping non-hiragana character with JIS code: {hex(jis_code)}")

    X = np.array(all_images, dtype=np.float32) # 已在上面归一化
    y = np.array(all_labels, dtype=np.int32)

    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)

    # 保存为原始二进制文件
    with open(os.path.join(output_dir, 'images.bin'), 'wb') as f:
        f.write(X.tobytes())
    with open(os.path.join(output_dir, 'labels.bin'), 'wb') as f:
        f.write(y.tobytes())

    print(f"\nPreprocessing complete. Saved {len(all_images)} images to {output_dir}")
    print(f"Image shape: {X.shape}, Label shape: {y.shape}")

if __name__ == "__main__":
    # 请根据你的实际路径修改
    input_directory = 'D:/日语笔记/data/etl9g_raw/ETL9G' # ETL9G 原始文件存放目录
    output_directory = 'D:/日语笔记/public/data/etl' # 预处理后的文件存放目录

    # 确保安装 Pillow (PIL Fork) 库用于图像处理
    # pip install Pillow
    
    # 运行预处理
    preprocess_etl9(input_directory, output_directory) 