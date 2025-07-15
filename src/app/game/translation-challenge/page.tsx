'use client';

import React, { useState, useEffect } from 'react';

// Define the structure for a word pair
interface WordPair {
  id: string;
  question: string; // The word to be translated (Chinese or Japanese)
  answer: string; // The correct translation
  romaji?: string; // Optional romaji for Japanese words
}

// Expanded list of word pairs (approx 100)
const wordList: WordPair[] = [
  // Japanese questions
  { id: '1', question: 'こんにちは', answer: '你好', romaji: 'konnichiwa' },
  { id: '2', question: 'さようなら', answer: '再见', romaji: 'sayoonara' },
  { id: '3', question: '水', answer: 'みず', romaji: 'mizu' },
  { id: '4', question: 'ごめんなさい', answer: '对不起', romaji: 'gomen nasai' },
  { id: '5', question: 'はい', answer: '是', romaji: 'hai' },
  { id: '6', question: 'いいえ', answer: '不是', romaji: 'iie' },
  { id: '7', question: '日本', answer: 'にほん', romaji: 'nihon' },
  { id: '8', question: '日语', answer: 'にほんご', romaji: 'nihongo' },
  { id: '9', question: '时间', answer: 'じかん', romaji: 'jikan' },
  { id: '10', question: '电车', answer: 'でんしゃ', romaji: 'densha' },
  { id: '11', question: '电话', answer: 'でんわ', romaji: 'denwa' },
  { id: '12', question: '天气', answer: 'てんき', romaji: 'tenki' },
  { id: '13', question: '名字', answer: 'なまえ', romaji: 'namae' },
  { id: '14', question: '大学', answer: 'だいがく', romaji: 'daigaku' },
  { id: '15', question: '医院', answer: 'びょういん', romaji: 'byooin' },
  { id: '16', question: '朋友', answer: 'ともだち', romaji: 'tomodachi' },
  { id: '17', question: '早上', answer: 'あさ', romaji: 'asa' },
  { id: '18', question: '中午', answer: 'ひる', romaji: 'hiru' },
  { id: '19', question: '晚上', answer: 'ばん', romaji: 'ban' },
  { id: '20', question: '今天', answer: 'きょう', romaji: 'kyoo' },
  { id: '21', question: '明天', answer: 'あした', romaji: 'ashita' },
  { id: '22', question: '昨天', answer: 'きのう', romaji: 'kinoo' },
  { id: '23', question: '星期几', answer: 'なんようび', romaji: 'nanyoubi' },
  { id: '24', question: '一', answer: 'いち', romaji: 'ichi' },
  { id: '25', answer: '二', question: 'に', romaji: 'ni' },
  { id: '26', question: '三', answer: 'さん', romaji: 'san' },
  { id: '27', question: '四', answer: 'よん／し', romaji: 'yon/shi' },
  { id: '28', question: '五', answer: 'ご', romaji: 'go' },
  { id: '29', question: '六', answer: 'ろく', romaji: 'roku' },
  { id: '30', question: '七', answer: 'なな／しち', romaji: 'nana/shichi' },
  { id: '31', question: '八', answer: 'はち', romaji: 'hachi' },
  { id: '32', question: '九', answer: 'きゅう／く', romaji: 'kyuu/ku' },
  { id: '33', question: '十', answer: 'じゅう', romaji: 'juu' },
  { id: '34', question: '百', answer: 'ひゃく', romaji: 'hyaku' },
  { id: '35', question: '千', answer: 'せん', romaji: 'sen' },
  { id: '36', question: '万', answer: 'まん', romaji: 'man' },
  { id: '37', question: '年', answer: 'ねん', romaji: 'nen' },
  { id: '38', question: '月', answer: 'つき／がつ', romaji: 'tsuki/gatsu' },
  { id: '39', question: '日', answer: 'ひ／にち', romaji: 'hi/nichi' },
  { id: '40', question: '时', answer: 'とき／じ', romaji: 'toki/ji' },
  { id: '41', question: '上', answer: 'うえ', romaji: 'ue' },
  { id: '42', question: '下', answer: 'した', romaji: 'shita' },
  { id: '43', question: '左', answer: 'ひだり', romaji: 'hidari' },
  { id: '44', question: '右', answer: 'みぎ', romaji: 'migi' },
  { id: '45', question: '中', answer: 'なか', romaji: 'naka' },
  { id: '46', question: '外', answer: 'そと', romaji: 'soto' },
  { id: '47', question: '前', answer: 'まえ', romaji: 'mae' },
  { id: '48', question: '后', answer: 'うしろ', romaji: 'ushiro' },
  { id: '49', question: '东', answer: 'ひがし', romaji: 'higashi' },
  { id: '50', question: '西', answer: 'にし', romaji: 'nishi' },
  // Chinese questions
  { id: '51', question: '谢谢', answer: 'ありがとう', romaji: 'arigatoo' },
  { id: '52', question: '苹果', answer: 'りんご', romaji: 'ringo' },
  { id: '53', question: '爱', answer: 'あい', romaji: 'ai' },
  { id: '54', question: '吃', answer: 'たべる', romaji: 'taberu' },
  { id: '55', question: '书', answer: 'ほん', romaji: 'hon' },
  { id: '56', question: '学校', answer: 'がっこう', romaji: 'gakkoo' },
  { id: '57', question: '学生', answer: 'がくせい', romaji: 'gakusei' },
  { id: '58', question: '老师', answer: 'せんせい', romaji: 'sensei' },
  { id: '59', question: '钱', answer: 'おかね', romaji: 'okane' },
  { id: '60', question: '南', answer: 'みなみ', romaji: 'minami' },
  { id: '61', question: '北', answer: 'きた', romaji: 'kita' },
  { id: '62', question: '家', answer: 'いえ／うち', romaji: 'ie/uchi' },
  { id: '63', question: '会社', answer: 'かいしゃ', romaji: 'kaisha' },
  { id: '64', question: '银行', answer: 'ぎんこう', romaji: 'ginkoo' },
  { id: '65', question: '便利店', answer: 'コンビニ', romaji: 'kombini' },
  { id: '66', question: '邮局', answer: 'ゆうびんきょく', romaji: 'yuubinkyoku' },
  { id: '67', question: '美术馆', answer: 'びじゅつかん', romaji: 'bijutsukan' },
  { id: '68', question: '公园', answer: 'こうえん', romaji: 'kooen' },
  { id: '69', question: '超市', answer: 'スーパー', romaji: 'suupaa' },
  { id: '70', question: '大', answer: 'おおきい', romaji: 'ookii' },
  { id: '71', question: '小', answer: 'ちいさい', romaji: 'chiisai' },
  { id: '72', question: '高', answer: 'たかい', romaji: 'takai' },
  { id: '73', question: '低', answer: 'ひくい', romaji: 'hikui' },
  { id: '74', question: '长', answer: 'ながい', romaji: 'nagai' },
  { id: '75', question: '短', answer: 'みじかい', romaji: 'mijikai' },
  { id: '76', question: '新', answer: 'あたらしい', romaji: 'atarashii' },
  { id: '77', question: '旧', answer: 'ふるい', romaji: 'furui' },
  { id: '78', question: '好', answer: 'いい／よい', romaji: 'ii/yoi' },
  { id: '79', question: '坏', answer: 'わるい', romaji: 'warui' },
  { id: '80', question: '热(天气)', answer: 'あつい', romaji: 'atsui' },
  { id: '81', question: '冷(天气)', answer: 'さむい', romaji: 'samui' },
  { id: '82', question: '热(物体)', answer: 'あつい', romaji: 'atsui' },
  { id: '83', question: '冷(物体)', answer: 'つめたい', romaji: 'tsumetai' },
  { id: '84', question: '忙', answer: 'いそがしい', romaji: 'isogashii' },
  { id: '85', question: '有趣', answer: 'おもしろい', romaji: 'omoshiroi' },
  { id: '86', question: '无聊', answer: 'つまらない', romaji: 'tsumaranai' },
  { id: '87', question: '难', answer: 'むずかしい', romaji: 'muzukashii' },
  { id: '88', question: '简单', answer: 'やさしい', romaji: 'yasashii' },
  { id: '89', question: '贵', answer: 'たかい', romaji: 'takai' },
  { id: '90', answer: '便宜', romaji: 'yasui', question: 'やすい' },
  { id: '91', question: '喜欢', answer: 'すき', romaji: 'suki' },
  { id: '92', question: '讨厌', answer: 'きらい', romaji: 'kirai' },
  { id: '93', question: '去', answer: 'いく', romaji: 'iku' },
  { id: '94', question: '来', answer: 'くる', romaji: 'kuru' },
  { id: '95', question: '回', answer: 'かえる', romaji: 'kaeru' },
  { id: '96', question: '说', answer: 'はなす', romaji: 'hanasu' },
  { id: '97', question: '听', answer: 'きく', romaji: 'kiku' },
  { id: '98', question: '读', answer: 'よむ', romaji: 'yomu' },
  { id: '99', question: '写', answer: 'かく', romaji: 'kaku' },
];

export default function TranslationChallengePage() {
  const [currentWord, setCurrentWord] = useState<WordPair | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chineseQuestionHistory, setChineseQuestionHistory] = useState<string[]>([]);
  const [japaneseQuestionHistory, setJapaneseQuestionHistory] = useState<string[]>([]); // History for Japanese questions

  // Function to select a random word
  const selectRandomWord = () => {
    // Separate Japanese questions (IDs 1-50) and Chinese questions (IDs 51-99)
    const japaneseQuestions = wordList.slice(0, 50); // Questions 1-50: Japanese to Chinese
    const chineseQuestions = wordList.slice(50); // Questions 51-99: Chinese to Japanese

    let wordToSelect = null;

    const pickJapanese = Math.random() < 0.7; // 70% chance to pick Japanese

    const availableJapanese = japaneseQuestions.filter(word => !japaneseQuestionHistory.includes(word.id));
    const availableChinese = chineseQuestions.filter(word => !chineseQuestionHistory.includes(word.id));

    if (pickJapanese && availableJapanese.length > 0) {
      // Try to pick from available Japanese questions
      const randomIndex = Math.floor(Math.random() * availableJapanese.length);
      wordToSelect = availableJapanese[randomIndex];
    } else if (!pickJapanese && availableChinese.length > 0) {
      // Try to pick from available Chinese questions
      const randomIndex = Math.floor(Math.random() * availableChinese.length);
      wordToSelect = availableChinese[randomIndex];
    } else if (availableJapanese.length > 0) {
      // Fallback: Chinese list is empty or failed probability, pick Japanese if available
      const randomIndex = Math.floor(Math.random() * availableJapanese.length);
      wordToSelect = availableJapanese[randomIndex];
    } else if (availableChinese.length > 0) {
      // Fallback: Japanese list is empty, pick Chinese if available
      const randomIndex = Math.floor(Math.random() * availableChinese.length);
      wordToSelect = availableChinese[randomIndex];
    } else {
      // Both lists exhausted, clear histories and pick from full list
      console.warn('All words asked in both directions, clearing both histories.');
      setChineseQuestionHistory([]);
      setJapaneseQuestionHistory([]);
      const randomIndex = Math.floor(Math.random() * wordList.length);
      wordToSelect = wordList[randomIndex];
    }

    // Update history based on the selected word type
    if (wordToSelect) {
      if (wordToSelect.id >= '51') {
          setChineseQuestionHistory(prevHistory => [wordToSelect.id, ...prevHistory]);
      } else {
          setJapaneseQuestionHistory(prevHistory => [wordToSelect.id, ...prevHistory]);
      }
    }

    setCurrentWord(wordToSelect);
    setUserAnswer('');
    setFeedback(null);
    setIsLoading(false);
  };

  // Initialize game on mount
  useEffect(() => {
    selectRandomWord();
  }, []);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
    // Clear feedback as user types
    if (feedback) {
        setFeedback(null);
    }
  };

  // Handle submitting answer (e.g., pressing Enter)
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && userAnswer.trim() !== '') {
          checkAnswer();
      }
  };


  // Check the user's answer
  const checkAnswer = () => {
    if (!currentWord) return;

    // Simple case-insensitive check for now
    if (userAnswer.trim().toLowerCase() === currentWord.answer.toLowerCase()) {
      setFeedback('correct');
      // Automatically load a new word after a delay on correct answer
      setTimeout(() => {
        selectRandomWord();
      }, 1500); // 1.5 seconds delay before next word
    } else {
      setFeedback('incorrect');
      // Automatically load a new word after a delay on incorrect answer
       setTimeout(() => {
        selectRandomWord();
      }, 1500); // 1.5 seconds delay before next word
        // Optionally clear input after incorrect attempt, or let user correct
        // setUserAnswer('');
    }
  };

  if (isLoading || !currentWord) {
    return <div className="container mx-auto px-4 py-8 pt-28 text-center">加载中...</div>;
  }

  return (
    <React.Fragment>
    <div className="container mx-auto px-4 py-8 pt-28 min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-8">翻译挑战</h1>

      {/* Question Area */}
      <div className="mb-8">
        {currentWord.romaji && <p className="text-xl text-gray-600 mb-1">{currentWord.romaji}</p>}
        <p className="text-2xl font-semibold">{currentWord.question}</p>
      </div>

      {/* Thin Horizontal Line */}
      <div className="w-64 h-1 bg-gray-400 mx-auto mb-8"></div> {/* w-64: width, h-1: height, bg-gray-400: color, mx-auto: center, mb-8: margin-bottom */}

      {/* Input Area */}
      <div className="mb-4">
        <input
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="text-center text-xl p-2 border-b-2 border-gray-700 focus:outline-none focus:border-blue-600 w-64 mx-auto"
          placeholder="输入翻译"
          disabled={feedback === 'correct'}
        />
      </div>

      {/* Feedback Area */}
      {feedback && (
        <div className={`text-xl font-bold ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
          {feedback === 'correct' ? '正确！' : `错误. 正确答案: ${currentWord.answer}`}。
        </div>
      )}

      {/* Add a button to check answer if Enter key is not preferred */}
       {/* <button onClick={checkAnswer} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">检查答案</button> */}

    </div>

    {/* Game Objectives and Rules Section */}
    <section className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">游戏目标与规则</h2>
      <div className="text-gray-700 leading-relaxed">
        <p className="text-lg font-bold mb-2">游戏目标:</p>
        <ul className="list-disc list-inside mb-4">
          <li>学习并记忆中日文词汇及其读音（罗马音）。</li>
          <li>提高快速反应和翻译能力。</li>
        </ul>

        <p className="text-lg font-bold mb-2">游戏规则:</p>
        <ul className="list-disc list-inside">
          <li>屏幕上方显示需要翻译的词汇（中文或日文）及对应的日文罗马音。</li>
          <li>在输入框中输入对应的翻译。</li>
          <li>按下回车键提交答案。</li>
          <li>如果回答正确，会自动加载下一题。</li>
          <li>如果回答错误，会显示正确答案，并在短延迟后加载下一题。</li>
          <li>中文问题不会重复出现，直到所有中文词汇都问过一遍。</li>
          <li>日文问题可以重复出现。</li>
          <li>每回答约 3-5 个问题，会强制出现一个日文翻译成中文的问题（之前未问过的日文词汇）。</li>
        </ul>
      </div>
    </section>
    </React.Fragment>
  );
}