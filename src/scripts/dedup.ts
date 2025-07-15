import fs from 'fs';
import path from 'path';

// 读取原始文件
const filePath = path.join(process.cwd(), 'src', 'data', 'vocabulary.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// 提取词汇数组
const match = content.match(/const vocabularyData: VocabularyCard\[\] = \[([\s\S]*?)\];/);
if (!match) {
  console.error('Could not find vocabulary data array');
  process.exit(1);
}

// 解析词汇数据
const vocabularyStr = match[1];
const vocabularyData = eval(`[${vocabularyStr}]`);

// 去重处理
const seen = new Set<string>();
const dedupedData = vocabularyData.filter((item: any) => {
  if (seen.has(item.word)) {
    return false;
  }
  seen.add(item.word);
  return true;
});

// 生成新的文件内容
const newContent = content.replace(
  /const vocabularyData: VocabularyCard\[\] = \[[\s\S]*?\];/,
  `const vocabularyData: VocabularyCard[] = ${JSON.stringify(dedupedData, null, 2)};`
);

// 写入文件
fs.writeFileSync(filePath, newContent, 'utf-8');
console.log(`去重完成！原始词汇数量: ${vocabularyData.length}, 去重后数量: ${dedupedData.length}`); 