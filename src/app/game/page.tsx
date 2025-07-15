'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Game() {
  const router = useRouter();

  const games = [
    { title: '日语单词大富翁', description: '适合 N5-N3，积累基础词汇，强化记忆。', path: '/game/vocabulary-match', coverImage: '/game-covers/game-covers1.png' },
    // Add more games here
    { title: '假名卡牌游戏', description: '翻找匹配的假名对，锻炼记忆力。', path: '/game/memory-challenge', coverImage: '/game-covers/game-covers2.png' }, // Link to the Kana Card Game
    { title: '翻译挑战', description: '随机中日词汇翻译，提高翻译能力。', path: '/game/translation-challenge', coverImage: '/game-covers/game-covers3.png' }, // Link to the new Translation Challenge Game
  ];

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 pt-28">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">游戏中心</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.path}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer overflow-hidden"
              onClick={() => router.push(game.path)}
            >
              <img src={game.coverImage} alt={`${game.title} 封面`} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
                <p className="text-gray-600">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 