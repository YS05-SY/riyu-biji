'use client';

import React, { useState, useEffect } from 'react';
import { vocabularyData, VocabularyCard, vocabularyCategories } from '@/data/vocabulary';

// 添加数据连接验证
console.log('=== Data Connection Verification ===');
console.log('vocabularyData length:', vocabularyData.length);
console.log('vocabularyCategories:', vocabularyCategories);
console.log('First vocabulary item:', vocabularyData[0]);
console.log('================================');

// Import Chart.js components
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const cardsPerPage = 50;

// 添加数据验证
console.log('Initial vocabulary data length:', vocabularyData.length);
console.log('Vocabulary data sample:', vocabularyData.slice(0, 5));
console.log('Vocabulary categories:', vocabularyCategories);

const VocabularyCardsPage = () => {
  // 验证组件初始化时的数据
  useEffect(() => {
    console.log('=== Component Initialization ===');
    console.log('Initial vocabularyData length:', vocabularyData.length);
    console.log('Initial filteredCards length:', filteredCards.length);
    console.log('Selected categories:', selectedCategories);
    console.log('Selected status:', selectedStatus);
    console.log('================================');
  }, []);

  const [vocabularyDataState, setVocabularyDataState] = useState<VocabularyCard[]>(vocabularyData);
  const [filteredCards, setFilteredCards] = useState<VocabularyCard[]>(vocabularyData);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<VocabularyCard | null>(null);

  // 计算分页相关数据
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  // 添加调试信息
  useEffect(() => {
    console.log('=== Debug Information ===');
    console.log('Total vocabulary count:', vocabularyData.length);
    console.log('Filtered cards count:', filteredCards.length);
    console.log('Current page:', currentPage);
    console.log('Cards per page:', cardsPerPage);
    console.log('Total pages:', totalPages);
    console.log('Current cards:', currentCards.length);
    console.log('Selected categories:', selectedCategories);
    console.log('Selected status:', selectedStatus);
    console.log('First few current cards:', currentCards.slice(0, 3));
    console.log('=====================');
  }, [filteredCards, currentPage, totalPages, currentCards, selectedCategories, selectedStatus]);

  useEffect(() => {
    let cards = vocabularyDataState;
    console.log('=== Filter Debug ===');
    console.log('Initial cards count:', cards.length);
    
    if (selectedCategories.length > 0) {
      cards = cards.filter(card => selectedCategories.includes(card.category));
      console.log('After category filter:', cards.length);
      console.log('Selected categories:', selectedCategories);
    }
    
    if (selectedStatus !== 'all') {
      cards = cards.filter(card => card.status === selectedStatus);
      console.log('After status filter:', cards.length);
      console.log('Selected status:', selectedStatus);
    }
    
    console.log('Final filtered cards count:', cards.length);
    console.log('==================');
    
    setFilteredCards(cards);
    setCurrentPage(1);
  }, [selectedCategories, selectedStatus, vocabularyDataState]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(category === 'basic' ? [] : [category]);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCardClick = (card: VocabularyCard) => {
    console.log('Card clicked:', card.id, card.word);
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleMarkAsMastered = (cardId: string) => {
    console.log('Mark as mastered clicked for card ID:', cardId);
    // 更新 vocabularyData 中的状态
    const updatedVocabularyData = vocabularyDataState.map(card =>
      card.id === cardId ? { ...card, status: '已完成' as const } : card
    );
    setVocabularyDataState(updatedVocabularyData);
    setShowModal(false);
    setSelectedCard(null);
  };

  const handleMarkAsLearning = (cardId: string) => {
    console.log('Mark as learning clicked for card ID:', cardId);
    // 更新 vocabularyData 中的状态
    const updatedVocabularyData = vocabularyDataState.map(card =>
      card.id === cardId ? { ...card, status: '学习中' as const } : card
    );
    setVocabularyDataState(updatedVocabularyData);
    setShowModal(false);
    setSelectedCard(null);
  };

  // 准备图表数据
  const chartData = {
    labels: ['未学习', '学习中', '已完成'],
    datasets: [
      {
        data: [
          filteredCards.filter(card => card.status === '未学习').length,
          filteredCards.filter(card => card.status === '学习中').length,
          filteredCards.filter(card => card.status === '已完成').length,
        ],
        backgroundColor: [
          'rgba(156, 163, 175, 0.8)', // Gray
          'rgba(59, 130, 246, 0.8)', // Blue
          'rgba(16, 185, 129, 0.8)', // Green
        ],
        borderColor: [
          'rgb(156, 163, 175)',
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-gray-50 min-h-screen w-full">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 md:mb-10 text-center">词汇卡片墙</h1>

      {/* 分类和学习状态筛选 */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">筛选词汇</h2>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">选择类型</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {vocabularyCategories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategories.includes(category.id) || (selectedCategories.length === 0 && category.id === 'basic')
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.id === 'basic' ? '全部' : category.name}
              </button>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-4">学习状态</h2>
          <div className="flex flex-wrap gap-2">
            {['all', '未学习', '学习中', '已完成'].map(status => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedStatus === status
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {status === 'all' ? '全部' : status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 w-full">
          {/* Vocabulary cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {currentCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="p-4 rounded-lg shadow cursor-pointer transition-all hover:shadow-lg bg-white w-full h-full flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{card.word}</h3>
                  <span className="px-2 py-1 rounded text-sm bg-gray-100 text-gray-800">
                    {card.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{card.romaji}</p>
                <p className="text-gray-800 text-base flex-grow">{card.meaning}</p>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="mt-8 flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              上一页
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              下一页
            </button>
          </div>
        </div>

        {/* 学习情况饼状图 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-28">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">学习情况概览</h2>
            <div className="w-full h-64 flex items-center justify-center">
              {filteredCards.length > 0 ? (
                <Pie data={chartData} />
              ) : (
                <p className="text-gray-600">暂无数据</p>
              )}
            </div>
            <div className="mt-8 text-gray-700">
              <p>总词汇数: {filteredCards.length}</p>
              <p>未学习: {filteredCards.filter(card => card.status === '未学习').length}</p>
              <p>学习中: {filteredCards.filter(card => card.status === '学习中').length}</p>
              <p>已完成: {filteredCards.filter(card => card.status === '已完成').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 解析弹窗 */}
      {showModal && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedCard.word}</h2>
            <p className="text-gray-600 mb-2">{selectedCard.romaji}</p>
            <p className="text-gray-800 mb-4">{selectedCard.meaning}</p>
            <div className="mb-4">
              <span className="px-2 py-1 rounded text-sm bg-gray-100 text-gray-800">
                {selectedCard.status}
              </span>
            </div>
            {selectedCard.examples && selectedCard.examples.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-1">例句：</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedCard.examples.map((ex, idx) => (
                    <li key={idx}>
                      <span className="text-gray-800">{ex.japanese}</span>
                      <span className="text-gray-500 ml-2">{ex.chinese}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex gap-4 mt-4">
              {selectedCard.status !== '学习中' && (
                <button
                  onClick={() => handleMarkAsLearning(selectedCard.id)}
                  className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  学习中
                </button>
              )}
              {selectedCard.status !== '已完成' && (
                <button
                  onClick={() => handleMarkAsMastered(selectedCard.id)}
                  className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  已完成
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyCardsPage;