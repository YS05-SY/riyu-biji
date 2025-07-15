'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { VocabularyCard, vocabularyData } from '../../../data/vocabulary';
import HandwritingBoard, { HandwritingBoardRef } from '@/components/HandwritingBoard';
import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js

export default function KanaQuizPage() {
  const router = useRouter();
  const [currentWord, setCurrentWord] = useState<VocabularyCard | null>(null);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  // 删除与手写板和模型相关的所有代码

  // 随机选择一个词汇
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * vocabularyData.length);
    return vocabularyData[randomIndex];
  };

  // 开始新的默写
  const startNewQuiz = () => {
    setCurrentWord(getRandomWord());
    setUserInput('');
    setFeedback('');
    setIsCorrect(null);
    // if (handwritingBoardRef.current) { // This line is removed
    //   handwritingBoardRef.current.clear(); // This line is removed
    // } // This line is removed
  };

  // 检查答案
  const checkAnswer = async () => {
    if (!currentWord) return;

    let finalInput = userInput;
    // if (isHandwriting && handwritingBoardRef.current) { // This block is removed
    //   // Get prediction from handwriting board // This block is removed
    //   finalInput = await handwritingBoardRef.current.getPrediction(); // This block is removed
    //   setUserInput(finalInput); // Update userInput with the predicted character // This block is removed
    // } // This block is removed

    const correct = finalInput === currentWord.word;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 5);
      setFeedback('正确！+5分');
    } else {
      setFeedback(`错误！正确答案是：${currentWord.word}`);
    }
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // 处理手写输入 (现在不再自动触发，只更新识别结果，不自动清空)
  const handleHandwritingInput = (predictedChar: string) => {
    // This function is no longer called by HandwritingBoard directly for prediction
    // It can be removed or repurposed if needed for real-time display of strokes
    // For now, we will rely on checkAnswer to get the final prediction
    // setUserInput(predictedChar);
    // setFeedback(`识别结果：${predictedChar}`);
  };

  // 处理按键事件
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  // 组件加载时开始第一次默写
  useEffect(() => {
    startNewQuiz();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-4">
            词汇默写
          </h1>
          <p className="text-xl text-gray-600">
            根据中文意思写出对应的日语单词
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 transform transition-all hover:scale-[1.02]">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {currentWord?.meaning}
            </div>
            <div className="text-lg text-gray-600 mb-6">
              请写出对应的日语单词
            </div>
            <div className="flex flex-col items-center gap-4 mb-6">
              {/* 在渲染部分，直接保留 input 输入框和“检查”按钮 */}
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="w-[32rem] text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all"
                placeholder="输入日语单词"
              />
              <div className="flex gap-4">
                <button
                  onClick={checkAnswer}
                  className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  检查
                </button>
              </div>
            </div>
            {feedback && (
              <div className={`text-xl font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'} animate-fade-in`}>
                {feedback}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <div className="text-lg text-gray-600">
              当前得分：<span className="font-bold text-gray-900">{score}</span> 分
            </div>
            <button
              onClick={startNewQuiz}
              className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              下一个
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 