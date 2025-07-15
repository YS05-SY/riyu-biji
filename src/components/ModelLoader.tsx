import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

interface ModelLoaderProps {
  onModelLoaded: (model: tf.LayersModel) => void;
}

export default function ModelLoader({ onModelLoaded }: ModelLoaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 首先尝试从 IndexedDB 加载
      const model = await tf.loadLayersModel('indexeddb://japanese-kana');
      console.log('Model loaded from IndexedDB');
      onModelLoaded(model);
    } catch (error) {
      console.log('Model not found in IndexedDB, trying to load from files...');
      
      try {
        // 从文件加载
        const [modelResponse, weightsResponse] = await Promise.all([
          fetch('/models/japanese-kana-model.json'),
          fetch('/models/japanese-kana-weights.json')
        ]);

        if (!modelResponse.ok || !weightsResponse.ok) {
          throw new Error('Model files not found');
        }

        const modelJSON = await modelResponse.json();
        const weightsJSON = await weightsResponse.json();

        // 加载模型结构
        const model = await tf.loadLayersModel(tf.io.fromMemory(modelJSON));
        
        // 加载权重
        const weights = JSON.parse(weightsJSON);
        model.setWeights(weights.map((w: number[]) => tf.tensor(w)));
        
        console.log('Model loaded from files');
        onModelLoaded(model);
      } catch (error) {
        console.error('Failed to load model:', error);
        setError('模型加载失败，请确保模型文件已正确部署');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        <span className="ml-2">正在加载模型...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        {error}
      </div>
    );
  }

  return null;
} 