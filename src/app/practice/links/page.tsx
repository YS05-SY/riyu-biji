'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function PracticeLinksPage() {
  const router = useRouter();

  // Define the four sections/links
  const practiceSections = [
    { title: '选择题', path: '/practice/fill-in-the-blanks' },
    { title: '填空题', path: '/practice/fill-in' },
    { title: '听力题', path: '/practice/listening' },
    { title: '阅读题', path: '/practice/reading' },
  ];

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 pt-28">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">题库</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceSections.map((section) => (
            <div
              key={section.path}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer p-6 flex items-center justify-center text-center"
              onClick={() => router.push(section.path)}
              style={{ minHeight: '150px' }} // Add a minimum height for better visual blocks
            >
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 