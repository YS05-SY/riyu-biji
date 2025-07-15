'use client';

import React from 'react';
import Link from 'next/link';

export default function VocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 pt-28">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          词汇学习
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-4 rounded-full"></div>
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 词汇卡片墙入口 */}
            <Link href="/vocabulary/cards" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">词汇卡片墙</h2>
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  通过可拖拽的卡片墙，轻松管理词汇学习进度。支持批量标记学习状态，直观展示学习进展。
                </p>
              </div>
            </Link>

            {/* 词汇练习入口 */}
            <Link href="/vocabulary/practice" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">词汇练习</h2>
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  通过多种练习方式，巩固词汇记忆。包含选择题、填空题等多种题型。
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 