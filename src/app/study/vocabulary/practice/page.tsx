'use client';

import React, { useState, useEffect } from 'react';

// 定义词汇练习题目类型
interface VocabularyQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

// 词汇练习题
const vocabularyQuestions: VocabularyQuestion[] = [
  {
    id: 1,
    question: '「食べる」的意思是？',
    options: ['吃', '喝', '睡', '走'],
    answer: '吃',
    explanation: '「食べる」是"吃"的意思，是一个他动词。'
  },
  {
    id: 2,
    question: '「飲む」的意思是？',
    options: ['吃', '喝', '睡', '走'],
    answer: '喝',
    explanation: '「飲む」是"喝"的意思，是一个他动词。'
  },
  {
    id: 3,
    question: '「寝る」的意思是？',
    options: ['吃', '喝', '睡', '走'],
    answer: '睡',
    explanation: '「寝る」是"睡觉"的意思，是一个自动词。'
  },
  {
    id: 4,
    question: '「歩く」的意思是？',
    options: ['吃', '喝', '睡', '走'],
    answer: '走',
    explanation: '「歩く」是"走路"的意思，是一个自动词。'
  },
  {
    id: 5,
    question: '「見る」的意思是？',
    options: ['看', '听', '说', '写'],
    answer: '看',
    explanation: '「見る」是"看"的意思，是一个他动词。'
  },
  {
    id: 6,
    question: '「聞く」的意思是？',
    options: ['看', '听', '说', '写'],
    answer: '听',
    explanation: '「聞く」是"听"的意思，是一个他动词。'
  },
  {
    id: 7,
    question: '「話す」的意思是？',
    options: ['看', '听', '说', '写'],
    answer: '说',
    explanation: '「話す」是"说"的意思，是一个他动词。'
  },
  {
    id: 8,
    question: '「書く」的意思是？',
    options: ['看', '听', '说', '写'],
    answer: '写',
    explanation: '「書く」是"写"的意思，是一个他动词。'
  },
  {
    id: 9,
    question: '「読む」的意思是？',
    options: ['看', '听', '说', '写'],
    answer: '读',
    explanation: '「読む」是"读"的意思，是一个他动词。'
  },
  {
    id: 10,
    question: '「買う」的意思是？',
    options: ['看', '听', '说', '写'],
    answer: '买',
    explanation: '「買う」是"买"的意思，是一个他动词。'
  },
  {
    id: 11,
    question: '「売る」的意思是？',
    options: ['买', '卖', '送', '收'],
    answer: '卖',
    explanation: '「売る」是"卖"的意思，是一个他动词。'
  },
  {
    id: 12,
    question: '「送る」的意思是？',
    options: ['买', '卖', '送', '收'],
    answer: '送',
    explanation: '「送る」是"送"的意思，是一个他动词。'
  },
  {
    id: 13,
    question: '「受ける」的意思是？',
    options: ['买', '卖', '送', '收'],
    answer: '收',
    explanation: '「受ける」是"收"的意思，是一个他动词。'
  },
  {
    id: 14,
    question: '「開ける」的意思是？',
    options: ['开', '关', '放', '拿'],
    answer: '开',
    explanation: '「開ける」是"开"的意思，是一个他动词。'
  },
  {
    id: 15,
    question: '「閉める」的意思是？',
    options: ['开', '关', '放', '拿'],
    answer: '关',
    explanation: '「閉める」是"关"的意思，是一个他动词。'
  },
  {
    id: 16,
    question: '「置く」的意思是？',
    options: ['开', '关', '放', '拿'],
    answer: '放',
    explanation: '「置く」是"放"的意思，是一个他动词。'
  },
  {
    id: 17,
    question: '「取る」的意思是？',
    options: ['开', '关', '放', '拿'],
    answer: '拿',
    explanation: '「取る」是"拿"的意思，是一个他动词。'
  },
  {
    id: 18,
    question: '「入れる」的意思是？',
    options: ['放', '拿', '进', '出'],
    answer: '进',
    explanation: '「入れる」是"进"的意思，是一个他动词。'
  },
  {
    id: 19,
    question: '「出す」的意思是？',
    options: ['放', '拿', '进', '出'],
    answer: '出',
    explanation: '「出す」是"出"的意思，是一个他动词。'
  },
  {
    id: 20,
    question: '「作る」的意思是？',
    options: ['做', '吃', '喝', '睡'],
    answer: '做',
    explanation: '「作る」是"做"的意思，是一个他动词。'
  },
  {
    id: 21,
    question: '「使う」的意思是？',
    options: ['用', '吃', '喝', '睡'],
    answer: '用',
    explanation: '「使う」是"用"的意思，是一个他动词。'
  },
  {
    id: 22,
    question: '「待つ」的意思是？',
    options: ['等', '吃', '喝', '睡'],
    answer: '等',
    explanation: '「待つ」是"等"的意思，是一个他动词。'
  },
  {
    id: 23,
    question: '「来る」的意思是？',
    options: ['来', '去', '回', '走'],
    answer: '来',
    explanation: '「来る」是"来"的意思，是一个自动词。'
  },
  {
    id: 24,
    question: '「行く」的意思是？',
    options: ['来', '去', '回', '走'],
    answer: '去',
    explanation: '「行く」是"去"的意思，是一个自动词。'
  },
  {
    id: 25,
    question: '「帰る」的意思是？',
    options: ['来', '去', '回', '走'],
    answer: '回',
    explanation: '「帰る」是"回"的意思，是一个自动词。'
  },
  {
    id: 26,
    question: '「起きる」的意思是？',
    options: ['起床', '睡觉', '吃饭', '喝水'],
    answer: '起床',
    explanation: '「起きる」是"起床"的意思，是一个自动词。'
  },
  {
    id: 27,
    question: '「寝る」的意思是？',
    options: ['起床', '睡觉', '吃饭', '喝水'],
    answer: '睡觉',
    explanation: '「寝る」是"睡觉"的意思，是一个自动词。'
  },
  {
    id: 28,
    question: '「食べる」的意思是？',
    options: ['起床', '睡觉', '吃饭', '喝水'],
    answer: '吃饭',
    explanation: '「食べる」是"吃饭"的意思，是一个他动词。'
  },
  {
    id: 29,
    question: '「飲む」的意思是？',
    options: ['起床', '睡觉', '吃饭', '喝水'],
    answer: '喝水',
    explanation: '「飲む」是"喝水"的意思，是一个他动词。'
  },
  {
    id: 30,
    question: '「着る」的意思是？',
    options: ['穿', '脱', '洗', '晾'],
    answer: '穿',
    explanation: '「着る」是"穿"的意思，是一个他动词。'
  },
  {
    id: 31,
    question: '「脱ぐ」的意思是？',
    options: ['穿', '脱', '洗', '晾'],
    answer: '脱',
    explanation: '「脱ぐ」是"脱"的意思，是一个他动词。'
  },
  {
    id: 32,
    question: '「洗う」的意思是？',
    options: ['穿', '脱', '洗', '晾'],
    answer: '洗',
    explanation: '「洗う」是"洗"的意思，是一个他动词。'
  },
  {
    id: 33,
    question: '「干す」的意思是？',
    options: ['穿', '脱', '洗', '晾'],
    answer: '晾',
    explanation: '「干す」是"晾"的意思，是一个他动词。'
  },
  {
    id: 34,
    question: '「切る」的意思是？',
    options: ['切', '割', '削', '剥'],
    answer: '切',
    explanation: '「切る」是"切"的意思，是一个他动词。'
  },
  {
    id: 35,
    question: '「割る」的意思是？',
    options: ['切', '割', '削', '剥'],
    answer: '割',
    explanation: '「割る」是"割"的意思，是一个他动词。'
  },
  {
    id: 36,
    question: '「削る」的意思是？',
    options: ['切', '割', '削', '剥'],
    answer: '削',
    explanation: '「削る」是"削"的意思，是一个他动词。'
  },
  {
    id: 37,
    question: '「剥く」的意思是？',
    options: ['切', '割', '削', '剥'],
    answer: '剥',
    explanation: '「剥く」是"剥"的意思，是一个他动词。'
  },
  {
    id: 38,
    question: '「折る」的意思是？',
    options: ['折', '叠', '卷', '包'],
    answer: '折',
    explanation: '「折る」是"折"的意思，是一个他动词。'
  },
  {
    id: 39,
    question: '「畳む」的意思是？',
    options: ['折', '叠', '卷', '包'],
    answer: '叠',
    explanation: '「畳む」是"叠"的意思，是一个他动词。'
  },
  {
    id: 40,
    question: '「巻く」的意思是？',
    options: ['折', '叠', '卷', '包'],
    answer: '卷',
    explanation: '「巻く」是"卷"的意思，是一个他动词。'
  },
  {
    id: 41,
    question: '「包む」的意思是？',
    options: ['折', '叠', '卷', '包'],
    answer: '包',
    explanation: '「包む」是"包"的意思，是一个他动词。'
  },
  {
    id: 42,
    question: '「開く」的意思是？',
    options: ['开', '关', '放', '拿'],
    answer: '开',
    explanation: '「開く」是"开"的意思，是一个自动词。'
  },
  {
    id: 43,
    question: '「閉じる」的意思是？',
    options: ['开', '关', '放', '拿'],
    answer: '关',
    explanation: '「閉じる」是"关"的意思，是一个自动词。'
  },
  {
    id: 44,
    question: '「入る」的意思是？',
    options: ['放', '拿', '进', '出'],
    answer: '进',
    explanation: '「入る」是"进"的意思，是一个自动词。'
  },
  {
    id: 45,
    question: '「出る」的意思是？',
    options: ['放', '拿', '进', '出'],
    answer: '出',
    explanation: '「出る」是"出"的意思，是一个自动词。'
  },
  {
    id: 46,
    question: '「作る」的意思是？',
    options: ['做', '吃', '喝', '睡'],
    answer: '做',
    explanation: '「作る」是"做"的意思，是一个他动词。'
  },
  {
    id: 47,
    question: '「使う」的意思是？',
    options: ['用', '吃', '喝', '睡'],
    answer: '用',
    explanation: '「使う」是"用"的意思，是一个他动词。'
  },
  {
    id: 48,
    question: '「待つ」的意思是？',
    options: ['等', '吃', '喝', '睡'],
    answer: '等',
    explanation: '「待つ」是"等"的意思，是一个他动词。'
  },
  {
    id: 49,
    question: '「来る」的意思是？',
    options: ['来', '去', '回', '走'],
    answer: '来',
    explanation: '「来る」是"来"的意思，是一个自动词。'
  },
  {
    id: 50,
    question: '「行く」的意思是？',
    options: ['来', '去', '回', '走'],
    answer: '去',
    explanation: '「行く」是"去"的意思，是一个自动词。'
  }
];

export default function VocabularyPracticePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<VocabularyQuestion[]>([]);

  // 随机选择5道题目
  const selectRandomQuestions = () => {
    const shuffled = [...vocabularyQuestions].sort(() => 0.5 - Math.random());
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

  if (selectedQuestions.length === 0) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-8 pt-28 flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-600">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 pt-28">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          词汇练习
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-4 rounded-full"></div>
        </h1>

        <div className="max-w-3xl mx-auto">
          {/* 词汇练习区块 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">词汇练习</h2>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg text-gray-600">问题 {currentQuestionIndex + 1}/{selectedQuestions.length}</p>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  得分：{score}/100
                </div>
              </div>
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
              <button
                onClick={handleReset}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                重新开始
              </button>
              
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
        </div>
      </div>
    </div>
  );
} 