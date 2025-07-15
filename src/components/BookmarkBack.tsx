'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const BookmarkBack: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleBack}
        className="bg-white text-gray-800 p-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center border border-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        返回
      </button>
    </div>
  );
};

export default BookmarkBack; 