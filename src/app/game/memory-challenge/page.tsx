'use client';
#123
import React, { useState, useEffect, useRef } from 'react';

// Define the structure for a card
interface KanaCard {
  id: string; // Unique ID for the card
  value: string; // The kana character (hiragana or katakana)
  pairValue: string; // The corresponding kana character in the other script
  isFlipped: boolean;
  isMatched: boolean;
}

// Simplified syllabary data (can expand later or import from hiragana page if needed)
const simpleSyllabary = [
  { h: 'あ', k: 'ア' },
  { h: 'い', k: 'イ' },
  { h: 'う', k: 'ウ' },
  { h: 'え', k: 'エ' },
  { h: 'お', k: 'オ' },
  { h: 'か', k: 'カ' },
  { h: 'き', k: 'キ' },
  { h: 'く', k: 'ク' },
  { h: 'け', k: 'ケ' },
  { h: 'く', k: 'ク' },
  { h: 'け', k: 'ケ' },
  { h: 'こ', k: 'コ' },
  { h: 'さ', k: 'サ' },
  { h: 'し', k: 'シ' },
  { h: 'す', k: 'ス' },
  { h: 'せ', k: 'セ' },
  { h: 'そ', k: 'ソ' },
  { h: 'た', k: 'タ' },
  { h: 'ち', k: 'チ' },
  { h: 'つ', k: 'ツ' },
  { h: 'て', k: 'テ' },
  { h: 'と', k: 'ト' },
  { h: 'な', k: 'ナ' },
  { h: 'に', k: 'ニ' },
  { h: 'ぬ', k: 'ヌ' },
  { h: 'ね', k: 'ネ' },
  { h: 'の', k: 'ノ' },
  { h: 'は', k: 'ハ' },
  { h: 'ひ', k: 'ヒ' },
  { h: 'ふ', k: 'フ' },
  { h: 'へ', k: 'ヘ' },
  { h: 'ほ', k: 'ホ' },
  { h: 'ま', k: 'マ' },
  { h: 'み', k: 'ミ' },
  { h: 'む', k: 'ム' },
  { h: 'め', k: 'メ' },
  { h: 'も', k: 'モ' },
  { h: 'や', k: 'ヤ' },
  { h: 'ゆ', k: 'ユ' },
  { h: 'よ', k: 'ヨ' },
  { h: 'ら', k: 'ラ' },
  { h: 'り', k: 'リ' },
  { h: 'る', k: 'ル' },
  { h: 'れ', k: 'レ' },
  { h: 'ろ', k: 'ロ' },
  { h: 'わ', k: 'ワ' },
  { h: 'を', k: 'ヲ' },
  { h: 'ん', k: 'ン' },
];

export default function MemoryChallengePage() {
  const [currentRound, setCurrentRound] = useState(1);
  const [cards, setCards] = useState<KanaCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<KanaCard[]>([]);
  const [gamePhase, setGamePhase] = useState<'showing' | 'playing' | 'gameOver' | 'roundComplete' | 'gameComplete'>('showing');
  const [matchedPairs, setMatchedPairs] = useState(0);

  const cardCounts = [4, 8, 12]; // Number of cards for each round

  // Function to initialize a round
  const initializeRound = (round: number) => {
    const numberOfCards = cardCounts[round - 1];
    const numberOfPairs = numberOfCards / 2;

    // Ensure enough unique pairs are available
    if (numberOfPairs > simpleSyllabary.length) {
      console.error("Not enough unique kana pairs in the syllabary data!");
      // Handle error or use a larger syllabary
      return;
    }

    // Select random unique pairs
    const shuffledSyllabary = simpleSyllabary.sort(() => Math.random() - 0.5);
    const selectedPairs = shuffledSyllabary.slice(0, numberOfPairs);

    // Create cards from selected pairs
    let initialCards: KanaCard[] = [];
    selectedPairs.forEach(pair => {
      initialCards.push({
        id: `${pair.h}-${Date.now()}-${Math.random()}`, // Unique ID
        value: pair.h,
        pairValue: pair.k,
        isFlipped: true, // Start flipped for showing phase
        isMatched: false,
      });
      initialCards.push({
         id: `${pair.k}-${Date.now()}-${Math.random()}`, // Unique ID
        value: pair.k,
        pairValue: pair.h,
        isFlipped: true, // Start flipped for showing phase
        isMatched: false,
      });
    });

    // Shuffle cards
    initialCards = initialCards.sort(() => Math.random() - 0.5);

    setCards(initialCards);
    setSelectedCards([]);
    setMatchedPairs(0);
    setGamePhase('showing');
    setCurrentRound(round);

    // Automatically flip cards down after 3 seconds
    const timer = setTimeout(() => {
      setCards(prevCards => prevCards.map(card => ({ ...card, isFlipped: false })));
      setGamePhase('playing');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  };

  // Initialize round when game phase is showing
  useEffect(() => {
    // Initialize whenever phase is showing and cards are not already generated for the current round
    if (gamePhase === 'showing' && (cards.length === 0 || (cards.length > 0 && cards.length !== cardCounts[currentRound - 1]))) { // Simplified check to initialize if cards don't match expected count or are empty
         initializeRound(currentRound);
    }
  }, [gamePhase, currentRound, cards.length]); // Added cards.length dependency back as it's used in the condition

  // Handle card click
  const handleCardClick = (clickedCard: KanaCard) => {
    if (gamePhase !== 'playing' || clickedCard.isMatched || clickedCard.isFlipped || selectedCards.length === 2) {
      // Ignore clicks if not in playing phase, card is matched/flipped, or two cards are already selected
      return;
    }

    // Flip the clicked card
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );

    // Add card to selected cards
    setSelectedCards(prevSelected => [...prevSelected, clickedCard]);
  };

  // Effect to check for matches when two cards are selected
  useEffect(() => {
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;

      // Add a small delay before checking for a match to allow the second card to flip
      const matchCheckTimer = setTimeout(() => {
        if (card1.pairValue === card2.value && card1.value === card2.pairValue) {
          // Match found!
          setMatchedPairs(prev => prev + 1);
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === card1.id || card.id === card2.id ? { ...card, isMatched: true } : card
            )
          );
          setSelectedCards([]); // Clear selected cards
        } else {
          // No match - Game Over!
          setGamePhase('gameOver');
          setSelectedCards([]); // Clear selected cards on game over
        }
      }, 500); // 500ms delay for match check
      return () => clearTimeout(matchCheckTimer); // Cleanup timer
    }
    // Clear selected cards immediately if game phase changes while 2 are selected and they weren't processed by the timeout yet
    if (selectedCards.length === 2 && gamePhase !== 'playing') {
      setSelectedCards([]);
    }
  }, [selectedCards, cards, gamePhase]); // 只依赖 selectedCards, cards, gamePhase

  // 新增：监听 matchedPairs，判断是否过关
  useEffect(() => {
    if (gamePhase === 'playing') {
      const pairsToMatch = cardCounts[currentRound - 1] / 2;
      if (matchedPairs === pairsToMatch) {
        if (currentRound < cardCounts.length) {
          setGamePhase('roundComplete');
        } else {
          setGamePhase('gameComplete');
        }
      }
    }
  }, [matchedPairs, gamePhase, currentRound]);

  // Effect: 自动进入下一回合，无需按钮
  useEffect(() => {
    if (gamePhase === 'roundComplete') {
      if (currentRound < cardCounts.length) {
        const timer = setTimeout(() => {
          setCurrentRound(prev => prev + 1);
          setGamePhase('showing');
        }, 2000); // 2秒后自动进入下一回合
        return () => clearTimeout(timer);
      }
    }
  }, [gamePhase, currentRound]);

  // Render game based on phase
  const renderGameContent = () => {
      switch (gamePhase) {
          case 'showing':
              const showingGridColsClass = cards.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
                                           cards.length === 8 ? 'grid-cols-2 md:grid-cols-4' :
                                           'grid-cols-3 md:grid-cols-4';
               return (
                   <div className={`grid ${showingGridColsClass} gap-4 mx-auto max-w-lg`}>
                        {cards.map(card => (
                            <div
                                 key={card.id}
                                 className={`relative w-20 h-28 rounded-lg flex items-center justify-center cursor-pointer bg-black text-white transform transition-transform duration-500`}
                                 style={{ transform: 'rotateY(0deg)' }}
                            >
                                 <span className="text-3xl font-bold">{card.value}</span>
                            </div>
                        ))}
                    </div>
              );
          case 'playing':
              // Adjust grid columns based on the number of cards for better layout in different rounds
               const gridColsClass = cards.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
                                   cards.length === 8 ? 'grid-cols-2 md:grid-cols-4' :
                                   'grid-cols-3 md:grid-cols-4'; // Default for 12 cards or more
              return (
                   <div className={`grid ${gridColsClass} gap-4 mx-auto max-w-lg`}>
                        {cards.map(card => (
                            <div
                                 key={card.id}
                                 className={`relative w-20 h-28 rounded-lg flex items-center justify-center cursor-pointer
                                     ${card.isFlipped || card.isMatched ? 'bg-black text-white transform rotateY(0deg)' : 'bg-gray-400 border-2 border-gray-600 transform rotateY(180deg)'}
                                     ${card.isMatched ? 'opacity-50 cursor-default' : ''}
                                     transition-transform duration-500
                                 `}
                                 onClick={() => handleCardClick(card)}
                            >
                                 {(card.isFlipped || card.isMatched) && <span className="text-3xl font-bold">{card.value}</span>}
                            </div>
                        ))}
                    </div>
              );
          case 'gameOver':
               return (
                   <div className="text-center text-red-600 text-2xl font-bold">
                        <p>游戏结束！你点错了。</p>
                        <button
                            onClick={() => window.location.reload()} // Refresh page to restart
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            重新开始
                        </button>
                   </div>
               );
           case 'roundComplete':
               return (
                   <div className="text-xl text-center text-green-600 font-bold">
                        <p>回合 {currentRound} 完成！</p>
                        <p>即将进入下一回合...</p>
                   </div>
               );
          case 'gameComplete':
              return (
                   <div className="text-center text-green-600 text-2xl font-bold">
                        <p>恭喜！你完成了所有回合！</p>
                         <button
                              onClick={() => window.location.reload()} // Refresh page to restart
                              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                          >
                              重新开始
                          </button>
                   </div>
              );
          default:
              return null;
      }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-28 min-h-screen text-center overflow-y-scroll">
      <h1 className="text-4xl font-bold mb-8">假名卡牌游戏</h1>

      {/* Game Status and Controls Area */}
      <div className="min-h-[7rem] flex flex-col items-center justify-center mb-4 px-4"> {/* Increased min-h and added horizontal padding */}
           {gamePhase === 'showing' && <p className="text-xl text-center">记住卡片位置...</p>}
           {gamePhase === 'gameOver' && (
                <div className="text-center text-red-600 text-2xl font-bold">
                     <p>游戏结束！你点错了。</p>
                     <button
                         onClick={() => window.location.reload()} // Refresh page to restart
                         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                     >
                         重新开始
                     </button>
                </div>
           )}
           {gamePhase === 'roundComplete' && (
               <div className="text-xl text-center text-green-600 font-bold">
                    <p>回合 {currentRound} 完成！</p>
                    <p>即将进入下一回合...</p>
               </div>
           )}
          {gamePhase === 'gameComplete' && (
               <div className="text-center text-green-600 text-2xl font-bold">
                    <p>恭喜！你完成了所有回合！</p>
                     <button
                          onClick={() => window.location.reload()} // Refresh page to restart
                          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                          重新开始
                      </button>
                   </div>
              )}
           {gamePhase === 'playing' && (
                <p className="text-xl">回合: {currentRound} / {cardCounts.length} | 已匹配: {matchedPairs} / {cardCounts[currentRound - 1] / 2}</p>
           )}
      </div>

      {/* Game Content (Cards) */}
      {gamePhase !== 'showing' && gamePhase !== 'gameOver' && gamePhase !== 'roundComplete' && gamePhase !== 'gameComplete' && renderGameContent()}
       {gamePhase === 'showing' && renderGameContent()} {/* Render cards in showing phase too */}

      {/* Game Objectives and Rules Section - Placed at bottom with sufficient top margin */}
      {/* The large top margin ensures space for the cards above it */}
      <div className="max-w-2xl mx-auto mt-80 text-left bg-white rounded-lg shadow-md p-6"> {/* Increased max-w and added large mt */}
          {/* Game Objectives Section */}
          <div className="mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-800">游戏目标</h2>
              <p className="text-gray-700 leading-relaxed">
                  通过记忆配对游戏，帮助你快速掌握平假名和片假名的对应关系。每轮游戏会随机抽取不同数量的假名卡片，你需要记住它们的位置并找出对应的平假名和片假名。
              </p>
          </div>

          {/* Game Rules Section */}
          <div>
              <h2 className="text-xl font-bold mb-3 text-gray-800">游戏规则</h2>
              <h3 className="text-lg font-bold mb-2 text-gray-800">玩法</h3>
              <ul className="text-gray-700 space-y-2">
                  <li>• 游戏分为三个回合，每回合的卡片数量依次增加（4张、8张、12张）</li>
                  <li>• 每回合开始时，所有卡片会翻开3秒钟，请记住它们的位置</li>
                  <li>• 3秒后卡片会翻面，你需要找出对应的平假名和片假名</li>
                  <li>• 点击两张卡片，如果它们是对应的平假名和片假名，则配对成功</li>
                  <li>• 如果点击的卡片不匹配，游戏结束</li>
                  <li>• 成功完成所有配对后，进入下一回合</li>
                  <li>• 完成所有三个回合即为游戏胜利</li>
              </ul>
          </div>
      </div>

    </div>
  );
} 
