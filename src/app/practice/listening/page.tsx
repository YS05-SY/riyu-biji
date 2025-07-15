'use client';

import React, { useRef, useState, useEffect } from 'react';

// Define a type for questions, now including audio source
interface Question {
  id: number;
  stem: string; // The question text, possibly with blanks indicated
  answer: string | string[]; // The correct answer(s) for the blank, can be a single string or an array of strings
  audioSrc: string; // Path to the audio file for this question
}

// Placeholder for your question data
const listeningQuestions: Question[] = [
  { id: 1, stem: "请听音频后填写下方空白：男人和女人在讨论晚餐吃什么，他们决定吃（　）？", answer: ["蔬菜沙拉", "野菜のサラダ"], audioSrc: "/audio/listening/tl1.mp3" },
  { id: 2, stem: "请听音频后填写下方空白：明天的会议是（　）开始。", answer: ["早上 9 点", "朝 9 時"], audioSrc: "/audio/listening/tl2.mp3" },
  { id: 3, stem: "请听音频后填写下方空白：男人和女人周末打算（　）。", answer: ["周六下午去电影院", "土曜日の午後、映画館へ行く"], audioSrc: "/audio/listening/tl3.mp3" },
  { id: 4, stem: "请听音频后填写下方空白：男人说他（　）去车站。", answer: ["坐公交车", "バスで行く"], audioSrc: "/audio/listening/tl4.mp3" },
  { id: 5, stem: "请听音频后填写下方空白：男人和女人决定送（　）作为生日礼物。", answer: ["新小说", "新しい小説"], audioSrc: "/audio/listening/tl5.mp3" },
  { id: 6, stem: "请听音频后填写下方空白：女人问男人今天天气如何，今天天气怎么样？", answer: ["现在晴天，阳光强烈", "今は晴れて、日差しも強い"], audioSrc: "/audio/listening/tl6.mp3" },
  { id: 7, stem: "请听音频后填写下方空白：男人和女人在谈论旅行，他们要去哪儿旅行？", answer: ["冲绳", "沖縄"], audioSrc: "/audio/listening/tl7.mp3" },
  { id: 8, stem: "请听音频后填写下方空白：女人问男人图书馆几点关门，图书馆几点关门？", answer: ["晚上 8 点", "夜 8 時"], audioSrc: "/audio/listening/tl8.mp3" },
  { id: 9, stem: "请听音频后填写下方空白：男人和女人商量聚会时间，聚会定在什么时候？", answer: ["周四晚上", "木曜日の夜"], audioSrc: "/audio/listening/tl9.mp3" },
  { id: 10, stem: "请听音频后填写下方空白：女人问男人最近在做什么，男人在做什么？", answer: ["准备日语考试", "日本語の試験の準備をする"], audioSrc: "/audio/listening/tl10.mp3" },
  { id: 11, stem: "请听音频后填写下方空白：男人和女人在讨论周末的活动，他们最终决定做什么？", answer: ["去电影院看电影", "映画館で映画を見る"], audioSrc: "/audio/listening/tl11.mp3" },
  { id: 12, stem: "请听音频后填写下方空白：女人询问男人去公司的交通方式，男人怎么去公司？", answer: ["步行", "徒歩で行く"], audioSrc: "/audio/listening/tl12.mp3" },
  { id: 13, stem: "请听音频后填写下方空白：两人在商量给朋友买什么特产，他们决定买什么？", answer: ["红茶", "紅茶"], audioSrc: "/audio/listening/tl13.mp3" },
  { id: 14, stem: "请听音频后填写下方空白：男人问女人明天是否有空，女人明天要做什么？", answer: ["参加朋友的生日派对", "友達の誕生日パーティーに参加する"], audioSrc: "/audio/listening/tl14.mp3" },
  { id: 15, stem: "请听音频后填写下方空白：女人问男人最近是否看了新上映的电影，男人怎么回答？", answer: ["没看电影，但上周在网上看了一部有趣的电视剧", "映画はまだ見ていないけど、先週ネットで面白そうなドラマを見た"], audioSrc: "/audio/listening/tl15.mp3" },
  { id: 16, stem: "请听音频后填写下方空白：男人和女人在讨论搬家事宜，新家离车站远吗？", answer: ["不远，从车站步行 5 分钟", "遠くない、駅から徒歩 5 分"], audioSrc: "/audio/listening/tl16.mp3" },
  { id: 17, stem: "请听音频后填写下方空白：女人问男人晚餐想吃什么，男人的回答是什么？", answer: ["想吃寿司", "寿司が食べたい"], audioSrc: "/audio/listening/tl17.mp3" },
  { id: 18, stem: "请听音频后填写下方空白：两人在讨论旅行计划，他们打算什么时候去旅行？", answer: ["下下个月", "再来月"], audioSrc: "/audio/listening/tl18.mp3" },
  { id: 19, stem: "请听音频后填写下方空白：男人问女人是否知道附近的邮局，邮局在哪里？", answer: ["在那边银行的对面", "あちらの銀行の向こう"], audioSrc: "/audio/listening/tl19.mp3" },
  { id: 20, stem: "请听音频后填写下方空白：女人问男人是否会参加学校的运动会，男人怎么决定的？", answer: ["不参加，因为脚疼", "参加しない、足が痛くなったから"], audioSrc: "/audio/listening/tl20.mp3" },
  // Add your listening comprehension questions here
  // Example: { id: 1, stem: "田中さんは（　）で働いています。", answer: "会社", audioSrc: "/audio/listening/tl1.mp3" },
  // Example: { id: 2, stem: "昨日の天気は（　）でした。", answer: "雨", audioSrc: "/audio/listening/tl2.mp3" },
];

// Function to select random questions (updated to select 5)
const selectRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function ListeningPracticePage() {
  // We might need individual refs for each audio element if they play simultaneously,
  // but for simple play/pause per question, binding src dynamically is easier.
  // Let's use a single ref for the audio element template within the map.
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({}); // Track playing state per question
  const [answers, setAnswers] = useState<{ [key: number]: string }>({}); // Store answers for all displayed questions
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]); // State to hold the 5 randomly selected questions

  // Select 5 random questions when the component mounts
  useEffect(() => {
    // TODO: Implement actual question loading/selection logic if needed
    setQuestions(selectRandomQuestions(listeningQuestions, 5)); // Select 5 random questions
  }, []);

  // Handle answer input change for a specific question
  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

   // Function to play or pause a specific audio
   const togglePlayPause = (questionId: number, audioRef: HTMLAudioElement | null) => {
     if (audioRef) {
       if (isPlaying[questionId]) {
         audioRef.pause();
       } else {
         // Pause all other audios before playing the current one
         audioRefs.current.forEach((ref, index) => {
           if (ref && questions[index].id !== questionId && isPlaying[questions[index].id]) {
             ref.pause();
             setIsPlaying(prev => ({ ...prev, [questions[index].id]: false }));
           }
         });
         audioRef.play();
       }
       setIsPlaying(prev => ({ ...prev, [questionId]: !prev[questionId] }));
     }
   };

  // Handle audio ending for a specific audio
  const onAudioEnd = (questionId: number) => {
    setIsPlaying(prev => ({ ...prev, [questionId]: false }));
  };

  // Handle submitting answers
  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(question => {
      const userInput = (answers[question.id] || '').trim();
      if (Array.isArray(question.answer) ? question.answer.includes(userInput) : userInput === question.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  // Handle resetting the practice (gets new random questions)
  const handleReset = () => {
    setQuestions(selectRandomQuestions(listeningQuestions, 5)); // Select new 5 random questions
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setIsPlaying({}); // Reset playing state
     // Reset all audio elements to the beginning
     audioRefs.current.forEach(ref => {
       if (ref) {
         ref.currentTime = 0;
         ref.pause();
       }
     });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">听力题练习</h1>

      <div>
        <h2 className="text-xl font-semibold mb-4">请听音频后填写下方空白：</h2>
        {
          questions.length > 0 ? (
            questions.map((question, index) => (
              <div key={question.id} className="mb-6 border p-4 rounded">
                <p className="mb-2">{index + 1}. {question.stem.replace("请听音频后填写下方空白：", "").trim()}</p>
                {/* Arrange audio button and input side-by-side */}
                <div className="flex items-center mb-2">
                  {/* Use a ref callback to assign refs to the array */}
                   <audio
                     ref={el => { audioRefs.current[index] = el; }}
                     src={question.audioSrc}
                     onEnded={() => onAudioEnd(question.id)}
                     onPlay={() => setIsPlaying(prev => ({ ...prev, [question.id]: true }))}
                     onPause={() => setIsPlaying(prev => ({ ...prev, [question.id]: false }))}
                   ></audio>
                {/* Fill-in-the-Blanks Input */}
                <input
                  type="text"
                  className="border rounded px-2 py-1 w-64 mr-4"
                  value={answers[question.id] || ''}
                  onChange={e => handleAnswerChange(question.id, e.target.value)}
                  disabled={showResults}
                />

                  <button
                    onClick={() => togglePlayPause(question.id, audioRefs.current[index])}
                    className={`w-10 h-10 flex items-center justify-center rounded ${
                      isPlaying[question.id] ? 'bg-red-500' : 'bg-white border border-gray-300'
                    } transition-colors`}
                  >
                    {/* Use text symbols for now. Can replace with SVG icons later if needed. */}
                    {/* White circle with play symbol when stopped/paused, red square with pause symbol when playing */}
                    {audioRefs.current[index]?.ended ? (
                       // Ended state (back to initial look)
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    ) : isPlaying[question.id] ? (
                      // Playing state (red square with pause symbol)
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      // Paused or initial state (white circle with play symbol)
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </button>

                </div> {/* Close the flex container */}
               
                {/* Show result for this question after submission */}
                {showResults && (
                  <p className={`mt-1 ${Array.isArray(question.answer) ? question.answer.includes(answers[question.id]?.trim()) ? 'text-green-600' : 'text-red-600' : answers[question.id]?.trim() === question.answer ? 'text-green-600' : 'text-red-600'}`}>
                    正确答案: {Array.isArray(question.answer) ? question.answer.join(', ') : question.answer}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>正在加载题目...</p>
          )
        }
      </div>

      {/* Submit and Reset Buttons */}
      <div className="mt-6">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            disabled={questions.length === 0} // Disable submit if no questions loaded
          >
            提交答案
          </button>
        ) : (
          <div>
            <p className="mb-4">得分: {score}/{questions.length}</p>
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              重新开始
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 