'use client';

import React, { useState, useEffect } from 'react';
import GrammarCardWall from '../../../components/GrammarCardWall';

// 定义语法练习题目类型
interface GrammarQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

// 语法练习题
const grammarQuestions: GrammarQuestion[] = [
  {
    id: 1,
    question: '私は学生です。',
    options: ['我是学生', '我是老师', '我是医生', '我是工程师'],
    answer: '我是学生',
    explanation: '「です」是判断助动词，表示"是"的意思。'
  },
  {
    id: 2,
    question: '私は日本語を勉強します。',
    options: ['我学习日语', '我教日语', '我说日语', '我写日语'],
    answer: '我学习日语',
    explanation: '「を」是宾格助词，表示动作的对象。'
  },
  {
    id: 3,
    question: '私は東京に住んでいます。',
    options: ['我住在东京', '我去东京', '我来东京', '我离开东京'],
    answer: '我住在东京',
    explanation: '「に」表示存在的场所，「住んでいます」是"住"的持续体。'
  },
  {
    id: 4,
    question: '私は毎日学校へ行きます。',
    options: ['我每天去学校', '我每天来学校', '我每天在学校', '我每天离开学校'],
    answer: '我每天去学校',
    explanation: '「へ」表示移动的方向，「毎日」是"每天"的意思。'
  },
  {
    id: 5,
    question: '私は本を読んでいます。',
    options: ['我正在读书', '我要读书', '我读过书', '我能读书'],
    answer: '我正在读书',
    explanation: '「ています」表示动作正在进行。'
  }
];

export default function GrammarPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<GrammarQuestion[]>([]);
  const [displayExercise, setDisplayExercise] = useState(false);
  const [displayTools, setDisplayTools] = useState(false);

  // 随机选择5道题目
  const selectRandomQuestions = () => {
    const shuffled = [...grammarQuestions].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 5));
  };

  // 初始化时选择题目
  useEffect(() => {
    selectRandomQuestions();
  }, []);

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer === currentQuestion.answer) {
      setScore(prev => prev + 20);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    selectRandomQuestions();
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowExplanation(false);
    setScore(0);
  };

  if (displayExercise) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 pt-28">
        <div className="container mx-auto px-4 max-w-3xl bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            语法练习
            <div className="w-16 h-1 bg-gray-800 mx-auto mt-2 rounded-full"></div>
          </h1>

          {currentQuestion && (
            <div className="">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg text-gray-600">问题 {currentQuestionIndex + 1}/{selectedQuestions.length}</h2>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  得分：{score}/100
                </div>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-semibold mb-6 text-gray-800">{currentQuestion.question}</p>
              </div>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 transform hover:scale-[1.02] ${
                      selectedAnswer === option
                        ? option === currentQuestion.answer
                          ? 'bg-green-50 border-green-500 text-green-700'
                          : 'bg-red-50 border-red-500 text-red-700'
                        : 'hover:bg-gray-50 border-gray-200 text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100 transform transition-all duration-300">
                  <p className="font-semibold mb-3 text-blue-800">解释：</p>
                  <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}

              <div className="mt-8 flex justify-between items-center">
                {/* Reset button is always shown at the bottom left in vocabulary practice */}
                <button
                  onClick={handleReset}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  重新开始
                </button>

                {/* Next question button is shown only when explanation is visible and not the last question */}
                {showExplanation && currentQuestionIndex < selectedQuestions.length - 1 && (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                  >
                    下一题
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (displayTools) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 pt-28 relative">
        <div className="container mx-auto px-4 max-w-5xl bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            语法工具
            <div className="w-24 h-1 bg-gray-800 mx-auto mt-2 rounded-full"></div>
          </h1>
          <GrammarCardWall />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 pt-28">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          语法学习
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-4 rounded-full"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 语法工具区块 - Updated onClick */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl cursor-pointer flex justify-between items-center" onClick={() => setDisplayTools(true)}>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">语法卡片墙</h2>
              <p className="text-gray-600">动词、助词辨析的语法卡片，更好的辅助学习</p>
            </div>
            {/* 箭头图标 */}
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </div>

          {/* 语法练习区块 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl cursor-pointer flex justify-between items-center" onClick={() => setDisplayExercise(true)}>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">语法练习</h2>
              <p className="text-gray-600">通过练习题巩固语法</p>
            </div>
            {/* 箭头图标 */}
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
} 