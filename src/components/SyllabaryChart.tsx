'use client'
import React from 'react';

interface SyllabaryItem {
  hiragana?: string; // 平假名
  katakana?: string; // 片假名
  romaji: string; // 罗马音
  audio: string; // Path to the audio file
}

interface SyllabaryChartProps {
  syllabary: SyllabaryItem[];
}

const SyllabaryChart: React.FC<SyllabaryChartProps> = ({ syllabary }) => {
  const playAudio = (audioPath: string) => {
    const audio = new Audio(audioPath);
    audio.play().catch(error => console.error('Audio playback failed:', error));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1> */}
      <div className="grid grid-cols-5 gap-3 sm:gap-4 text-center">
        {/* Optional: Headers can be added here if data structure supports rows/columns explicitly */}
        {/* Currently mapping flat data, styling buttons directly */}

        {syllabary.map((item, index) => (
          // Render an empty div for placeholder if romaji is empty
          item.romaji === '' ? (
            <div key={index}></div>
          ) : (
            <button
              key={index}
              className="p-3 sm:p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center bg-white"
              onClick={() => playAudio(item.audio)}
            >
              <span className="text-xl sm:text-2xl font-semibold text-gray-800">{item.hiragana}</span>
              <span className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">{item.katakana}</span>
              <span className="text-sm text-gray-500">{item.romaji}</span>
            </button>
          )
        ))}
      </div>
    </div>
  );
};

export default SyllabaryChart; 