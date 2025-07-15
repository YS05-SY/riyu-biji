'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StudyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 pt-28">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          学习中心
          <div className="w-24 h-1 bg-black mx-auto mt-4 rounded-full"></div>
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 词汇练习区块 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">词汇</h2>
            <p className="text-gray-600 mb-6">
              学习并掌握常用日语词汇，包括动词、形容词等，帮助你更好地理解词汇的用法。
            </p>
            <Link
              href="/study/vocabulary"
              className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              开始学习
            </Link>
          </div>

          {/* 语法练习区块 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">语法</h2>
            <p className="text-gray-600 mb-6">
              学习并掌握日语语法要点，包括助词用法、动词变形等，帮助你更好地理解语法规则。
            </p>
            <Link
              href="/study/grammar"
              className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              开始学习
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 