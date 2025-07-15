import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js

interface HandwritingBoardProps {
  tfModel: tf.LayersModel; // Add tfModel to props
}

export interface HandwritingBoardRef {
  getImageData: () => ImageData | null;
  clear: () => void;
  getPrediction: () => Promise<string>;
}

const HandwritingBoard = forwardRef<HandwritingBoardRef, HandwritingBoardProps>(({ tfModel }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  // const [predictionTimeout, setPredictionTimeout] = useState<NodeJS.Timeout | null>(null); // Remove this state

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const getImageData = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  };

  // Expose functions via ref
  useImperativeHandle(ref, () => ({
    getImageData: getImageData,
    clear: clearCanvas,
    getPrediction: async () => {
      const canvas = canvasRef.current;
      if (!canvas) return '';
      const predictedChar = await predictImage(canvas, tfModel);
      clearCanvas(); // Clear canvas after prediction
      return predictedChar;
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // 重新设置画笔样式
      ctx.strokeStyle = '#4B5563';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 鼠标事件处理
    const handleMouseDown = (e: MouseEvent) => {
      isDrawing.current = true;
      const rect = canvas.getBoundingClientRect();
      lastX.current = e.clientX - rect.left;
      lastY.current = e.clientY - rect.top;
      // 开始新的路径
      ctx.beginPath();
      ctx.moveTo(lastX.current, lastY.current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing.current) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.lineTo(x, y);
      ctx.stroke();

      lastX.current = x;
      lastY.current = y;
    };

    const handleMouseUp = () => {
      if (!isDrawing.current) return;
      isDrawing.current = false;
      // Remove prediction and clear logic here. It will be handled by parent.
    };

    // 触摸事件处理
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      lastX.current = touch.clientX - rect.left;
      lastY.current = touch.clientY - rect.top;
      isDrawing.current = true;
      // 开始新的路径
      ctx.beginPath();
      ctx.moveTo(lastX.current, lastY.current);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!isDrawing.current) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      ctx.lineTo(x, y);
      ctx.stroke();

      lastX.current = x;
      lastY.current = y;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      if (!isDrawing.current) return;
      isDrawing.current = false;
      // Remove prediction and clear logic here. It will be handled by parent.
    };

    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseUp); // Also stop drawing if mouse leaves canvas

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });
    canvas.addEventListener('touchcancel', handleTouchEnd, { passive: false }); // Handle touch cancel

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseUp);

      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []); // tfModel is not a dependency here because it's passed as a prop and not used in useEffect's event handlers

    // 辅助函数：将 ETL 的标签映射到假名
    const KANA_LABELS = [
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
    ];

  // 辅助函数：将 ImageData 转换为模型输入格式并进行预测
  const predictImage = async (sourceCanvas: HTMLCanvasElement, model: tf.LayersModel) => {
      // 创建一个 28x28 像素的离屏 Canvas 用于图像处理
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = 28;
      tempCanvas.height = 28;
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return '';

    // 获取原始 Canvas 的 ImageData 用于边界框计算
    const sourceCtx = sourceCanvas.getContext('2d');
    if (!sourceCtx) return '';
    const imageData = sourceCtx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);

    // 将背景色填充为白色
    tempCtx.fillStyle = 'white';
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      
      // 计算边界框
    const { left, top, width, height } = getBoundingBox(imageData, imageData.width, imageData.height);
      
      // 计算缩放比例，保持宽高比
      const scale = Math.min(20 / width, 20 / height);
      const scaledWidth = width * scale;
      const scaledHeight = height * scale;
      
      // 计算居中位置
      const x = (28 - scaledWidth) / 2;
      const y = (28 - scaledHeight) / 2;
      
    // 绘制原始 Canvas 的相关区域到临时画布
      tempCtx.drawImage(
      sourceCanvas, // 使用原始 Canvas 作为源
        left, top, width, height,
        x, y, scaledWidth, scaledHeight
      );

      // 获取处理后的图像数据
      const processedImageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const data = processedImageData.data;

      // 将 RGBA 图像数据转换为模型所需的灰度、归一化数据
      const inputData = [];
      for (let i = 0; i < data.length; i += 4) {
        // 取红色通道作为灰度值，并归一化到 0-1
      // 重新进行颜色反相，使黑墨迹为 1，白背景为 0，与训练数据（白色笔迹在黑色背景上）一致
      inputData.push((255 - data[i]) / 255.0); // Invert colors (black on white -> white on black)
      }

    // 创建 TensorFlow.js Tensor
    const imageTensor = tf.tensor4d(inputData, [1, 28, 28, 1]);

      // 进行预测
    const predictions = model.predict(imageTensor) as tf.Tensor;
      const predictedClass = predictions.argMax(1).dataSync()[0];

    // 释放 Tensor 内存
    imageTensor.dispose();
      predictions.dispose();

      return KANA_LABELS[predictedClass] || '';
  };

  // Helper function to calculate bounding box
    function getBoundingBox(imageData: ImageData, width: number, height: number) {
    let minX = width, minY = height, maxX = 0, maxY = 0;
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
        const alpha = data[(y * width + x) * 4 + 3]; // Alpha channel
        if (alpha > 0) { // If pixel is not transparent (i.e., drawn upon)
            minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
          }
        }
      }

    // Add some padding to the bounding box if needed
    const padding = 2; // Example padding
    minX = Math.max(0, minX - padding);
    minY = Math.max(0, minY - padding);
    maxX = Math.min(width - 1, maxX + padding);
    maxY = Math.min(height - 1, maxY + padding);

      return {
        left: minX,
        top: minY,
        width: maxX - minX + 1,
      height: maxY - minY + 1,
    };
  }

  return (
      <canvas
        ref={canvasRef}
      className="w-full h-full bg-white rounded-xl"
    ></canvas>
  );
});

export default HandwritingBoard; 