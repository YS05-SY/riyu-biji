import React from 'react';
import { vocabularyCategories } from '@/data/vocabulary';

interface VocabularySelectorProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const VocabularySelector: React.FC<VocabularySelectorProps> = ({
  selectedCategories,
  onCategoryChange,
}) => {
  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">选择词汇类型</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vocabularyCategories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryToggle(category.id)}
            className={`p-3 rounded-lg text-center transition-colors ${
              selectedCategories.includes(category.id)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VocabularySelector; 