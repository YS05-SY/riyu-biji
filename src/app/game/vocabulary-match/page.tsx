'use client'
import React, { useState, useRef } from 'react';

// Define the structure for a vocabulary card
interface VocabularyCard {
  word: string; // 日语单词或短语
  meaning: string; // 中文释义
  sentence?: string; // 例句 (可选)
  audio?: string; // 音频文件路径 (可选)
}

// Dummy vocabulary data (replace with actual data loading later)
const dummyVocabulary: VocabularyCard[] = [
  { word: 'りんご', meaning: '苹果' },
  { word: 'くるま', meaning: '汽车' },
  { word: 'がっこう', meaning: '学校' },
  { word: 'たべる', meaning: '吃' },
  { word: 'おもしろい', meaning: '有趣的' },
  // Add more dummy data to reach 100
  { word: 'ほん', meaning: '书' },
  { word: 'みず', meaning: '水' },
  { word: 'ねこ', meaning: '猫' },
  { word: 'いぬ', meaning: '狗' },
  { word: 'やま', meaning: '山' },
  { word: 'かわ', meaning: '河' },
  { word: 'そら', meaning: '天空' },
  { word: 'うみ', meaning: '海' },
  { word: 'はな', meaning: '花' },
  { word: 'き', meaning: '树' },
  { word: 'ごはん', meaning: '米饭' },
  { word: 'さかな', meaning: '鱼' },
  { word: 'にく', meaning: '肉' },
  { word: 'やさい', meaning: '蔬菜' },
  { word: 'くだもの', meaning: '水果' },
  { word: 'ミルク', meaning: '牛奶' },
  { word: 'パン', meaning: '面包' },
  { word: 'たまご', meaning: '鸡蛋' },
  { word: 'チーズ', meaning: '奶酪' },
  { word: 'コーヒー', meaning: '咖啡' },
  { word: 'おちゃ', meaning: '茶' },
  { word: 'とけい', meaning: '钟表' },
  { word: 'かさ', meaning: '伞' },
  { word: 'くつ', meaning: '鞋子' },
  { word: 'ズボン', meaning: '裤子' },
  { word: 'シャツ', meaning: '衬衫' },
  { word: 'スカート', meaning: '裙子' },
  { word: 'ぼうし', meaning: '帽子' },
  { word: 'めがね', meaning: '眼镜' },
  { word: 'てがみ', meaning: '信' },
  { word: 'しんぶん', meaning: '报纸' },
  { word: 'じてんしゃ', meaning: '自行车' },
  { word: 'でんわ', meaning: '电话' },
  { word: 'テレビ', meaning: '电视' },
  { word: 'ラジオ', meaning: '收音机' },
  { word: 'カメラ', meaning: '相机' },
  { word: 'パソコン', meaning: '电脑' },
  { word: 'えき', meaning: '车站' },
  { word: 'ひこうき', meaning: '飞机' },
  { word: 'ふね', meaning: '船' },
  { word: 'みち', meaning: '路' },
  { word: 'まち', meaning: '城市' },
  { word: 'むら', meaning: '村庄' },
  { word: 'いえ', meaning: '家' },
  { word: 'へや', meaning: '房间' },
  { word: 'ドア', meaning: '门' },
  { word: 'まど', meaning: '窗户' },
  { word: 'つくえ', meaning: '桌子' },
  { word: 'いす', meaning: '椅子' },
  { word: 'ベッド', meaning: '床' },
  { word: 'でんき', meaning: '电灯' },
  { word: 'エアコン', meaning: '空调' },
  { word: 'れいぞうこ', meaning: '冰箱' },
  { word: 'せんたくき', meaning: '洗衣机' },
  { word: 'そうじき', meaning: '吸尘器' },
  { word: 'だいどころ', meaning: '厨房' },
  { word: 'おふろ', meaning: '浴室' },
  { word: 'トイレ', meaning: '厕所' },
  { word: 'がくせい', meaning: '学生' },
  { word: 'せんせい', meaning: '老师' },
  { word: 'かいしゃいん', meaning: '公司职员' },
  { word: 'ぎんこういん', meaning: '银行职员' },
  { word: 'いしゃ', meaning: '医生' },
  { word: 'けんきゅうしゃ', meaning: '研究员' },
  { word: 'エンジニア', meaning: '工程师' },
  { word: 'りょうり', meaning: '料理' },
  { word: 'スポーツ', meaning: '运动' },
  { word: 'おんがく', meaning: '音乐' },
  { word: 'えいが', meaning: '电影' },
  { word: 'ほん', meaning: '书' },
  { word: 'ゲーム', meaning: '游戏' },
  { word: 'りょこう', meaning: '旅行' },
  { word: 'かいもの', meaning: '购物' },
  { word: 'さんぽ', meaning: '散步' },
  { word: 'つかれる', meaning: '累' },
  { word: 'ねむい', meaning: '困' },
  { word: 'おなかがすく', meaning: '肚子饿' },
  { word: 'のどがかわく', meaning: '口渴' },
  { word: 'さむい', meaning: '冷' },
  { word: 'あつい', meaning: '热' },
  { word: 'いそがしい', meaning: '忙碌' },
  { word: 'たのしい', meaning: '快乐' },
  { word: 'かなしい', meaning: '悲伤' },
  { word: 'うれしい', meaning: '高兴' },
  { word: 'おもしろい', meaning: '有趣的' },
  { word: 'つまらない', meaning: '无聊的' },
  { word: 'やさしい', meaning: '简单的, 温柔的' },
  { word: 'むずかしい', meaning: '困难的' },
  { word: 'たかい', meaning: '高的, 贵的' },
  { word: 'ひくい', meaning: '低的' },
  { word: 'やすい', meaning: '便宜的' },
  { word: 'おおきい', meaning: '大的' },
  { word: 'ちいさい', meaning: '小的' },
  { word: 'あたらしい', meaning: '新的' },
  { word: 'ふるい', meaning: '旧的' },
  { word: 'いい', meaning: '好的' },
  { word: 'わるい', meaning: '坏的' },
];

// Define the structure for a board square
interface BoardSquare {
    type: 'normal' | 'reward' | 'penalty';
    label: string; // Display text for the square
}

// Dummy board layout (rearranged for a more path-like look)
const dummyBoard: BoardSquare[] = Array.from({ length: 37 }, (_, i) => { // Adjusted board size to 37
    if (i === 0) return { type: 'normal', label: '开始' };
    if (i === 36) return { type: 'normal', label: '终点' }; // Adjusted end index
    if (i > 0 && i < 36) { // Apply reward/penalty only between start and end
        if (i % 5 === 0) return { type: 'reward', label: '奖励格' };
        if (i % 7 === 0) return { type: 'penalty', label: '惩罚格' };
    }
    return { type: 'normal', label: `${i+1}` }; // Use number for normal squares
});

export default function VocabularyMatchGame() {
  // Game State
  const [playerPositions, setPlayerPositions] = useState<number[]>([0]); // One player for now
  const [playerCoins, setPlayerCoins] = useState<number[]>([0]); // Coins for each player
  const [currentDiceRoll, setCurrentDiceRoll] = useState<number | null>(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0); // Index of the current player
  const [gamePhase, setGamePhase] = useState<'start' | 'rolling' | 'moving' | 'event' | 'end'>('start'); // Current phase of the game
  const [currentCard, setCurrentCard] = useState<VocabularyCard | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>(''); // State for user input
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null); // State for feedback message

  // Function to simulate rolling a dice
  const rollDice = () => {
    if (gamePhase !== 'start' && gamePhase !== 'event' && gamePhase !== 'end') return; // Allow rolling from start, event (if no card), or end
    if (currentCard) return; // Don't roll if a card is being displayed

    setGamePhase('rolling');
    setFeedbackMessage(null); // Clear previous feedback
    const roll = Math.floor(Math.random() * 6) + 1; // Roll a 6-sided dice
    setCurrentDiceRoll(roll);
    // In a real game, you would wait a bit before moving
    setTimeout(() => {
      movePlayer(roll);
    }, 1000); // Simulate a short delay
  };

  // Function to move the current player
  const movePlayer = (steps: number) => {
    setGamePhase('moving');
    setPlayerPositions(prevPositions => {
      const newPositions = [...prevPositions];
      let newPosition = newPositions[currentPlayerIndex] + steps;

       // Handle passing or landing on the end square
       if (newPosition >= dummyBoard.length -1) {
           newPosition = dummyBoard.length -1; // Land exactly on the end square
           console.log('Player reached the end!');
           setGamePhase('end'); // Example: Set game phase to end
           // Handle game end logic here later (e.g., declare winner)

       }
      // Ensure position doesn't go below zero
      newPositions[currentPlayerIndex] = Math.max(0, newPosition);

       if (gamePhase !== 'end') { // Only trigger event if not the end square
            setGamePhase('event'); // Move to event phase after moving
            // Trigger event based on the new position
            triggerSquareEvent(newPositions[currentPlayerIndex]);
       }

      return newPositions;
    });
  };

  // Function to trigger event based on the square type
  const triggerSquareEvent = (position: number) => {
      const square = dummyBoard[position];
      console.log(`Landed on: ${square.label} (${square.type})`);

      if (square.type === 'normal') {
          // Draw a vocabulary card
          const randomIndex = Math.floor(Math.random() * dummyVocabulary.length);
          setCurrentCard(dummyVocabulary[randomIndex]);
          setUserAnswer(''); // Clear previous input
          setFeedbackMessage(null); // Clear previous feedback
          // Stay in event phase for user interaction (answering the card)
          console.log('Draw a card:', dummyVocabulary[randomIndex]);

      } else if (square.type === 'reward') {
          // Give player a coin
          setPlayerCoins(prevCoins => {
              const newCoins = [...prevCoins];
              newCoins[currentPlayerIndex] += 1; // Add 1 coin
              console.log(`Player ${currentPlayerIndex + 1} gained a coin. Total coins: ${newCoins[currentPlayerIndex]}`);
              setFeedbackMessage('恭喜！获得一枚金币！');
              return newCoins;
          });
          // After reward, transition to the next player's turn or allow rolling again
          // switch to next player here later
          setGamePhase('start'); // Assume start phase allows rolling for simplicity now

      } else if (square.type === 'penalty') {
          // Implement penalty logic (e.g., move back 3 spaces)
          console.log('Penalty square!');
           setPlayerPositions(prevPositions => {
              const newPositions = [...prevPositions];
              const moveBackSteps = 3;
              const finalPosition = Math.max(0, newPositions[currentPlayerIndex] - moveBackSteps);
              newPositions[currentPlayerIndex] = finalPosition;
              console.log(`Player ${currentPlayerIndex + 1} moved back ${moveBackSteps} spaces after incorrect answer to position ${newPositions[currentPlayerIndex]}`);
              setFeedbackMessage(`后退 ${moveBackSteps} 格！`);
               return newPositions;
          });
           // After penalty, transition to the next player's turn or allow rolling again
           // switch to next player here later
           setGamePhase('start'); // Assume start phase allows rolling for simplicity now

       }
      // Add logic for player turn switching here later
      // For now, just set phase back to start to allow rolling again
      if (gamePhase !== 'end' && square.type !== 'normal') {
           // setGamePhase('start'); // This is now handled in type-specific branches
      }

  };

  // Function to handle player submitting answer for a vocabulary card
  const handleSubmitAnswer = () => {
      if (!currentCard || gamePhase !== 'event' || dummyBoard[playerPositions[currentPlayerIndex]].type !== 'normal') return;

      // Simple case-insensitive comparison for now
      const isCorrect = userAnswer.trim().toLowerCase() === currentCard.meaning.trim().toLowerCase();

      if (isCorrect) {
          console.log('Answer correct!');
          setFeedbackMessage('回答正确！');
          // Player stays on the square, transition to next player's turn
          // switch to next player here later
          setGamePhase('start'); // Assume start phase allows rolling for simplicity now

      } else {
          console.log('Answer incorrect!');
          setFeedbackMessage(`回答错误！正确答案是: ${currentCard.meaning}`);
          // Apply penalty for incorrect answer (move back 3 spaces as per rules, could be simplified)
           setPlayerPositions(prevPositions => {
              const newPositions = [...prevPositions];
              const moveBackSteps = 3;
              newPositions[currentPlayerIndex] = Math.max(0, newPositions[currentPlayerIndex] - moveBackSteps);
              console.log(`Player ${currentPlayerIndex + 1} moved back ${moveBackSteps} spaces after incorrect answer to position ${newPositions[currentPlayerIndex]}`);
               return newPositions;
          });
           // Transition to next player's turn
           // switch to next player here later
           setGamePhase('start'); // Assume start phase allows rolling for simplicity now

       }
      // Clear the current card and user input after handling the answer
      setCurrentCard(null);
      setUserAnswer('');
  };

  // Function to handle skipping the card (penalty applied)
  const handleSkipCard = () => {
       if (!currentCard || gamePhase !== 'event' || dummyBoard[playerPositions[currentPlayerIndex]].type !== 'normal') return;

       console.log('Card skipped.');
       setFeedbackMessage(`跳过卡片。正确答案是: ${currentCard.meaning}`);
        // Apply penalty for skipping (move back 3 spaces)
        setPlayerPositions(prevPositions => {
           const newPositions = [...prevPositions];
           const moveBackSteps = 3;
           newPositions[currentPlayerIndex] = Math.max(0, newPositions[currentPlayerIndex] - moveBackSteps);
           console.log(`Player ${currentPlayerIndex + 1} moved back ${moveBackSteps} spaces after skipping to position ${newPositions[currentPlayerIndex]}`);
            return newPositions;
       });
        // Transition to next player's turn
        // switch to next player here later
        setGamePhase('start'); // Assume start phase allows rolling for simplicity now

       // Clear the current card and user input
       setCurrentCard(null);
       setUserAnswer('');

  };



  return (
    <div className="container mx-auto px-4 py-8 pt-28 min-h-screen">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">日语单词大富翁</h1>

        {/* Main game area: Board and Info/Controls */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Simplified Board Display (Left/Top Section) */}
           <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">棋盘</h2>

               {/* Using Grid to create a more structured board layout */}
               {/* This is a simplified attempt to create a path-like layout with Grid */}
               {/* This is just a visual arrangement, game logic still uses linear index */}
               {/* You would need to map dummyBoard items to specific grid positions */}

               {/* A more complex approach would involve defining grid-area or grid-column/row for each square index */}
               {/* For now, let's try to arrange them in a few segments */}

               {/* Let's revert to a simpler multi-row grid for now as complex paths need more specific positioning */}
               {/* Adjusted Grid for a potential S-shape */}
               <div className="grid grid-cols-8 md:grid-cols-10 gap-1 w-full">
                     {dummyBoard.map((square, index) => {
                         // Calculate grid placement based on index to simulate an S-shape path
                         let col;
                         let row;

                         // Path logic for 8-column grid (adjusted for 37 squares)
                         // Path: Right, Down, Left, Down, Right, Down, Right to End
                         if (index < 8) { // First row: Right (0-7)
                             col = index + 1;
                             row = 1;
                         } else if (index < 11) { // Turn down (8-10)
                             col = 8; // Stay in last column
                             row = (index - 8) + 2; // Rows 2, 3, 4
                         } else if (index < 19) { // Move left (11-18)
                             col = 8 - (index - 11); // Columns 8 to 1
                             row = 4; // Stay in row 4
                         } else if (index < 22) { // Turn down (19-21)
                             col = 1; // Stay in first column
                             row = 4 + (index - 18); // Rows 5, 6, 7
                         } else if (index < 30) { // Move right (22-29)
                             col = 1 + (index - 21); // Columns 2 to 10 (adjusting range)
                             row = 7;
                             // Adjust col if it goes beyond 8
                             if (col > 8) col = 8;
                         } else if (index < 33) { // Turn down (30-32)
                             col = 8; // Stay in last column
                             row = 7 + (index - 29);
                         } else if (index < 36) { // Move left towards end (33-35)
                             col = 8 - (index - 33);
                             row = 10;
                         } else { // Index 36 (End)
                              // Position the end square at the bottom right for 8-column grid
                              col = 8;
                              row = 10;
                         }

                         // Adjust column/row for larger screens (md:grid-cols-10, adjusted for 37 squares)
                         // Path: Right, Down, Left, Down, Right, Down, Right to End
                         if (typeof window !== 'undefined' && window.innerWidth >= 768) { // Check if screen is md or larger
                             if (index < 10) { // First row: Right (0-9)
                                 col = index + 1;
                                 row = 1;
                             } else if (index < 14) { // Turn down (10-13)
                                col = 10;
                                row = (index - 10) + 2;
                             } else if (index < 24) { // Move left (14-23)
                                col = 10 - (index - 14);
                                row = 5;
                             } else if (index < 28) { // Turn down (24-27)
                                 col = 1;
                                 row = 5 + (index - 23);
                             } else if (index < 37) { // Move right (28-36)
                                 col = 1 + (index - 27);
                                 row = 9;
                                  // Adjust col if it goes beyond 10
                                  if (col > 10) col = 10;
                             } else if (index < 37) { // Turn down/Right towards end (37-36)
                                 col = 10 - (index - 37);
                                 row = 10;
                             } else { // Index 36 (End) - this case won't be reached with index < 37
                                 // Position the end square at the bottom right for 10-column grid
                                 col = 10;
                                 row = 9;
                             }

                             // For index 36 specifically, ensure it's placed at the end
                             if (index === dummyBoard.length - 1) { // End square
                                 col = 10;
                                 row = 9;
                             }
                         }


                         return (
                             <div
                                 key={index}
                                 className={`w-full h-10 flex items-center justify-center text-xs border rounded p-1
                                     ${index === playerPositions[currentPlayerIndex] ? 'bg-yellow-300 border-yellow-600' : 'bg-gray-200 border-gray-400'}
                                     ${square.type === 'reward' ? 'bg-green-300 border-green-600 text-green-800 font-semibold' : ''}
                                     ${square.type === 'penalty' ? 'bg-red-300 border-red-600 text-red-800 font-semibold' : ''}
                                     ${index === 0 ? 'bg-blue-300 border-blue-600 text-blue-800 font-semibold' : ''} {/* Start square style */}
                                     ${index === dummyBoard.length - 1 ? 'bg-purple-300 border-purple-600 text-purple-800 font-semibold' : ''} {/* End square style */}
                                 `}
                                  style={{ gridColumn: col, gridRow: row }}
                             >
                                 {square.label} {index === playerPositions[currentPlayerIndex] && '🧍'}
                             </div>
                         );
                     })}
                 </div>
           </div>

          {/* Game Info and Controls (Right/Bottom Section) */}
          <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">游戏进行中</h2>
            <p className="text-gray-700 leading-relaxed">当前玩家: [用户名]</p>
            <p className="text-gray-700 leading-relaxed">当前位置: {playerPositions[currentPlayerIndex] + 1} / {dummyBoard.length}</p>
             <p className="text-gray-700 leading-relaxed mb-4">金币: {playerCoins[currentPlayerIndex]}</p>

            {/* Feedback Message */}
            {feedbackMessage && (
                <div className={`mt-4 p-3 w-full text-white rounded-lg ${feedbackMessage.includes('正确') ? 'bg-green-500' : feedbackMessage.includes('金币') ? 'bg-blue-500' : 'bg-red-500'}`}>
                    {feedbackMessage}
                </div>
            )}

            {/* Roll Dice Button (Visible at Start or after event, when no card is shown and not at the end) */}
            {(gamePhase === 'start' || gamePhase === 'event') && !currentCard && playerPositions[currentPlayerIndex] !== dummyBoard.length -1 ? (
               <button
                onClick={rollDice}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors mt-4 w-full"
              >
                掷骰子
              </button>
            ) : gamePhase === 'rolling' ? (
                <p className="text-xl font-semibold mt-4">掷骰子中...</p>
            ) : gamePhase === 'moving' ? (
                <p className="text-xl font-semibold mt-4">移动中...</p>
            ) : null} {/* Don't show anything if it's the event phase with a card or game end */}


            {currentDiceRoll !== null && gamePhase !== 'rolling' && gamePhase !== 'moving' && (
              <p className="text-xl mt-4">你掷出了: {currentDiceRoll}</p>
            )}

              {/* Display drawn card info, input and submit/skip buttons if in normal square event phase with a card */}
             {gamePhase === 'event' && currentCard && dummyBoard[playerPositions[currentPlayerIndex]].type === 'normal' && ( // Ensure it's a normal square event with a card
                  <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50 text-left w-full">
                      <h3 className="text-xl font-semibold mb-2">词汇卡片</h3>
                      <p className="text-gray-800"><strong>单词:</strong> {currentCard.word}</p>
                      <p className="text-gray-800 mb-4"><strong>请翻译为中文：</strong></p>

                      {/* Answer Input */}
                      <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          placeholder="输入中文释义"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                  handleSubmitAnswer();
                              }
                          }}
                      />

                      {/* Action buttons */}
                      <div className="flex justify-center space-x-4 mt-4">
                          <button
                              onClick={handleSubmitAnswer}
                              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                          >
                              提交答案
                          </button>
                           {/* Added Skip button based on rules */}
                           <button
                              onClick={handleSkipCard}
                              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                          >
                              跳过 (后退 3 格)
                          </button>
                      </div>

                  </div>
              )}

              {/* Game End Message */}
                {gamePhase === 'end' && (
                    <div className="mt-6 p-4 bg-green-500 text-white rounded-lg text-center w-full">
                        <h2 className="text-2xl font-bold">游戏结束！</h2>
                        <p className="text-xl mt-2">恭喜玩家 {currentPlayerIndex + 1} 到达终点！</p>
                        {/* Add more game end details here later (e.g., final coins) */}
                         <button
                            onClick={() => window.location.reload()} // Simple reload to restart
                            className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
                        >
                            重新开始
                        </button>
                    </div>
                )}



          </div>

        </div> {/* End of Main game area */}


        {/* Original Rules Section (can keep or remove as needed) */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">游戏目标与规则</h2>
          <div className="text-gray-700 leading-relaxed">
            <p className="text-lg font-bold mb-2">游戏目标:</p>
            <ul className="list-disc list-inside mb-4">
              <li>积累基础词汇（名词、动词、形容词），强化记忆。（适合 N5-N3 阶段的学习者）</li>
            </ul>

            <p className="text-lg font-bold mb-2">游戏规则:</p>
            <h3 className="text-xl font-bold mb-3">玩法</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>玩家轮流掷骰子，按点数前进对应格子，触发不同任务：</li>
              <ul className="list-circle list-inside ml-4">
                <li><strong>普通格：</strong>抽取一张卡片，正确读出单词并翻译（如「りんご」→"苹果"）。</li>
                <li><strong>奖励格：：</strong>直接获得 1 枚金币，可兑换 "跳过一题" 机会。</li>
                <li><strong>惩罚格：：</strong>答错则后退 3 格，或接受其他玩家出题挑战。</li>
              </ul>
              <li>率先到达终点者获胜，若途中金币最多可解锁 "额外奖励"。</li>
            </ul>
          </div>
        </div>

        {/* Removed Design Ideas Section */}
      </section>
    </div>
  );
}