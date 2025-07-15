import React, { useState, useEffect } from 'react';

interface GrammarPoint {
  id: string;
  title: string;
  description: string;
  examples: string[];
  category: string;
}

interface Category {
  name: string;
  grammarPoints: GrammarPoint[];
}

// Define learning statuses
type LearningStatus = 'not_started' | 'in_progress' | 'completed';

const grammarData: Category[] = [
  {
    name: '助詞文法 (Particle Grammar)',
    grammarPoints: [
      {
        id: 'ga',
        title: 'が',
        description: '主格助詞, 提示主语',
        examples: ['猫が走っています。'],
        category: 'particle'
      },
      {
        id: 'o',
        title: 'を (o)',
        description: '宾格助詞, 用于表示宾语',
        examples: ['本を読みます。'],
        category: 'particle'
      },
      {
        id: 'ni',
        title: 'に',
        description: '表示存在的场所 (与 ある/いる 搭配), 表示时间, 表示目的',
        examples: ['机の上に本があります。', '七時に起きます。', '買い物に行きます。'],
        category: 'particle'
      },
      {
        id: 'de',
        title: 'で',
        description: '表示动作进行的场所, 表示手段、方法',
        examples: ['教室で勉強します。', 'ペンで書きます。', '病気で学校を休みます。'],
        category: 'particle'
      },
      {
        id: 'to',
        title: 'と',
        description: '表示并列, 表示引用的内容',
        examples: ['犬と猫', '彼は「行きます」と言いました。'],
        category: 'particle'
      },
      {
        id: 'e',
        title: 'へ (e)',
        description: '表示方向',
        examples: ['日本へ行きます。'],
        category: 'particle'
      },
      {
        id: 'kara',
        title: 'から',
        description: '表示起点, 表示原因',
        examples: ['家から学校まで。', '疲れたから寝ます。'],
        category: 'particle'
      },
      {
        id: 'made',
        title: 'まで',
        description: '表示终点',
        examples: ['朝九時まで寝ます。'],
        category: 'particle'
      },
    ]
  },
  {
    name: '必学句型 (Must-Learn Sentence Patterns)',
    grammarPoints: [
      {
        id: 'sonzai',
        title: '存在句',
        description: '〜に〜があります/います (表示存在), 〜に〜には〜があります/います (强调存在场所), 〜に〜も〜があります/います (表示也有)',
        examples: ['部屋に机があります。庭に犬がいます。', 'この公園には池があります。', '机の上に本もあります。'],
        category: 'sentence_pattern'
      },
      {
        id: 'byousha',
        title: '描写句 (形容詞)',
        description: '〜は〜です。 (一类形容词直接用原形作谓语), 〜は〜です。 (二类形容词要加「です」作谓语, 且修饰名词时要加「な」)',
        examples: ['この果物はおいです。', 'この町はきれいな町です。'],
        category: 'sentence_pattern'
      },
      {
        id: 'jutsugo',
        title: '叙述句 (动词)',
        description: '〜は〜ます。 (用动词ます形构成的敬体陈述句), 〜は〜ません。 (否定形式), 〜は〜ました。 (过去式), 〜は〜て、〜ます。 (表示动作的先后顺序或方式等)',
        examples: ['私は毎日勉強します。', '私はあまりテレビを見ません。', '昨日、私は映画を見ました。', '朝起きて、歯を磨きます。'],
        category: 'sentence_pattern'
      },
      {
        id: 'keigo',
        title: '敬语句',
        description: '〜は〜でございます。 (比「です」更尊敬的表达), 〜は〜になります。 (尊敬语的变化形式)',
        examples: ['先生は教室にいらっしゃいますでございます。', 'お客様はどちらになりますか。'],
        category: 'sentence_pattern'
      }
    ]
  },
  {
    name: '形容詞文法 (Adjective Grammar)',
    grammarPoints: [
      {
        id: 'ikeiyoushi',
        title: '一类形容词 (イ形容詞)',
        description: '终止形 (直接以 い 结尾), 连体形 (原形修饰名词), 连用形 (〜く 形: 修饰动词; 〜かっ 形: 用于过去式或中顿), 假定形 (けれ＋ば)',
        examples: ['この山は高い。', '青い空', '速く走ります。', '昨日は暑かったです。', '美しく静かな町。', '安ければ買います。'],
        category: 'adjective'
      },
      {
        id: 'nakeiyoushi',
        title: '二类形容词 (ナ形容詞)',
        description: '终止形 (词干＋です), 连体形 (词干＋な), 连用形 (词干＋に: 修饰动词; 词干＋で: 用于中顿或过去式), 假定形 (词干＋なら)',
        examples: ['この町はきれいです。', '有名な大学', '静かに寝ます！', 'この店はきれいで、人気がある。', '昨日は暇でした。', '好きなら買ってください。'],
        category: 'adjective'
      },
    ]
  },
  {
    name: '动词文法 (Verb Grammar)',
    grammarPoints: [
      {
        id: 'godan',
        title: '五段动词 (五段活用)',
        description: 'ます形 (连用形 I), て形 (连用形 II), ない形 (未然形), 意向形, 命令形, 被动形, 使役形',
        examples: ['泳ぎます', '打って', '行かない', '行こう', '行け', '読まれる', '行かせる'],
        category: 'verb'
      },
      {
        id: 'ichidan',
        title: '一段动词 (一段活用)',
        description: 'ます形 (连用形 I), て形 (连用形 II), ない形 (未然形), 意向形, 命令形, 被动形, 使役形',
        examples: ['起きます', '食べて', '寝ない', '寝よう', '寝ろ', '食べられる', '寝させる'],
        category: 'verb'
      },
      {
        id: 'irregular',
        title: '不规则动词 (サ变动词和カ变动词)',
        description: 'サ变动词 (します/して/しない/しよう/しろ/される/させる), カ变动词 (来ます/来て/来ない/来よう/来い/来られる/来させる)',
        examples: ['勉強します', '持って来ます'],
        category: 'verb'
      },
    ]
  },
  {
    name: '名詞文法 (Noun Grammar)',
    grammarPoints: [
      {
        id: 'meishi_wa',
        title: '名詞 + は',
        description: '表示主题, 加强否定, 接在助词后面, 比较, 代替助词',
        examples: ['李さんは留学生です。', 'あの料理はおいしくないです。', 'この学校にはプールがあります。', '私は豚肉は食べますが、羊肉は食べません。', 'お酒は飲みません。'],
        category: 'noun'
      },
      {
        id: 'meishi_ga',
        title: '名詞 + が',
        description: '作为内部分主语, 疑问词做主语',
        examples: ['私は車が欲しいです。', '中国は人口が多いです。', '誰が私のケーキを食べましたか。'],
        category: 'noun'
      },
      {
        id: 'meishi_ni',
        title: '名詞 + に',
        description: '表示存在场所, 动作具体时间, 目的地, 目的, 动作接受者, 动作着落点, 衡量的标准',
        examples: ['駅の前にデパートがあります。', '毎朝六時に起きます。', '日本に行きました。', '映画を見に行きます。', '社長に電話します。', 'ここに書いてください。', '一年に三回旅行します。'],
        category: 'noun'
      },
      {
        id: 'meishi_o',
        title: '名詞 + を',
        description: '表示宾语, 表示离开某场所, 表示移动、经过的场所',
        examples: ['単語を覚えます。', '家を出ます。', '大学を卒業する。', 'この道を歩く。', '公園を散歩する。'],
        category: 'noun'
      },
      {
        id: 'meishi_de',
        title: '名詞 + で',
        description: '动作进行的场所, 手段、工具、材料、方法, 表示范围, 合计、累加, 人数＋で (表示多少人一起做某事)',
        examples: ['食堂で食べます。', '鉛筆でマークしてください。', '世界で一番高い山は中国のチベットにある。', '五本で2000円です。', '一人で行きました。'],
        category: 'noun'
      },
      {
        id: 'meishi_mo',
        title: '名詞 + も',
        description: '表示 "也", 表示 "都" 的意思, 疑问词＋も＋否定 (表示全面否定), 表示数量超出预料',
        examples: ['昨日も今日も雨でした。', '中国語も日本語も漢字を使います。', '教室には一人もいません。', '鞄の中にも何もありません。', 'クラスは100人もいます。'],
        category: 'noun'
      },
      {
        id: 'meishi_no',
        title: '名詞 + の',
        description: '表示所属, 表示省略, 接在助词后限定名词, 代替',
        examples: ['日本語の本を買いました。', '私の。', '京都までの切符を二枚ください。', 'これは私の書いた手紙です。'],
        category: 'noun'
      },
    ]
  }
];

const GrammarCard: React.FC<{ 
  point: GrammarPoint; 
  status: LearningStatus; // Use new status type
  onCardClick: (point: GrammarPoint) => void; 
}> = ({ point, status, onCardClick }) => {

  const statusText = {
    'not_started': '未学习',
    'in_progress': '学习中',
    'completed': '已完成',
  }[status];

  const statusColor = {
    'not_started': 'text-gray-500',
    'in_progress': 'text-blue-600', // Or another color for in-progress
    'completed': 'text-green-700',
  }[status];

  const bgColor = {
    'not_started': 'bg-white',
    'in_progress': 'bg-blue-50', // Light blue background for in-progress
    'completed': 'bg-green-100',
  }[status];

  return (
    <div
      className={`border rounded-lg p-4 shadow-sm cursor-pointer transform transition duration-200 hover:scale-105 ${bgColor}`}
      onClick={() => onCardClick(point)}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{point.title}</h3>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${statusColor} ${status === 'not_started' ? 'border border-gray-300' : ''}`}>
          {statusText}
        </span>
      </div>
      <p className="text-gray-700 text-sm truncate">{point.description}</p>
      {/* Examples will be shown in the modal */}
    </div>
  );
};

const GrammarCardWall: React.FC = () => {
  const [learnedStatus, setLearnedStatus] = useState<{ [key: string]: LearningStatus }>({}); // Use new status type
  const [selectedCard, setSelectedCard] = useState<GrammarPoint | null>(null);

  // Load status from local storage on mount
  useEffect(() => {
    const savedStatus = localStorage.getItem('grammarLearnedStatus');
    if (savedStatus) {
      // Initialize with 'not_started' for any points not in savedStatus
      const initialStatus: { [key: string]: LearningStatus } = {};
      grammarData.forEach(category => {
        category.grammarPoints.forEach(point => {
          initialStatus[point.id] = JSON.parse(savedStatus)[point.id] || 'not_started';
        });
      });
      setLearnedStatus(initialStatus);
    } else {
      // Initialize all as 'not_started' if no saved status
      const initialStatus: { [key: string]: LearningStatus } = {};
      grammarData.forEach(category => {
        category.grammarPoints.forEach(point => {
          initialStatus[point.id] = 'not_started';
        });
      });
      setLearnedStatus(initialStatus);
    }
  }, []);

  // Save status to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('grammarLearnedStatus', JSON.stringify(learnedStatus));
  }, [learnedStatus]);

  const toggleStatus = (id: string, newStatus: LearningStatus) => {
    setLearnedStatus(prevStatus => ({
      ...prevStatus,
      [id]: newStatus,
    }));
    // Close modal after changing status
    setSelectedCard(null);
  };

  const handleCardClick = (point: GrammarPoint) => {
    setSelectedCard(point);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const totalPoints = grammarData.reduce((sum, category) => sum + category.grammarPoints.length, 0);
  // Calculate learned count based on 'completed' status for progress bar
  const learnedCount = Object.values(learnedStatus).filter(status => status === 'completed').length;
  const progressPercentage = totalPoints > 0 ? Math.round((learnedCount / totalPoints) * 100) : 0;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">语法卡片墙</h1>

      <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">学习进度</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full text-xs text-white flex items-center justify-center transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          >
            {progressPercentage > 5 && `${progressPercentage}% (${learnedCount}/${totalPoints})`} {/* Only show text if enough space */}
          </div>
        </div>
        {progressPercentage <= 5 && (
           <div className="text-right text-sm text-gray-600 mt-1">{`${progressPercentage}% (${learnedCount}/${totalPoints})`}</div>
        )}
      </div>

      {grammarData.map(category => (
        <div key={category.name} className="mb-8">
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-gray-800 pb-2 text-gray-800">{category.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.grammarPoints.map(point => (
              <GrammarCard
                key={point.id}
                point={point}
                status={learnedStatus[point.id] || 'not_started'} // Pass the status
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      ))}

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-lg w-full relative transform transition-all duration-300 scale-100 opacity-100">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{selectedCard.title}</h3>
            <p className="text-gray-700 mb-5 leading-relaxed">{selectedCard.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-gray-800">例句:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {selectedCard.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end space-x-4">
              {learnedStatus[selectedCard.id] !== 'completed' && (
                <button
                  onClick={() => toggleStatus(selectedCard.id, 'completed')}
                  className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition duration-200"
                >
                  已完成
                </button>
              )}
               {learnedStatus[selectedCard.id] !== 'in_progress' && learnedStatus[selectedCard.id] !== 'completed' && (
                 <button
                   onClick={() => toggleStatus(selectedCard.id, 'in_progress')}
                   className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition duration-200"
                 >
                   学习中
                 </button>
               )}
               {learnedStatus[selectedCard.id] !== 'not_started' && (
                  <button
                    onClick={() => toggleStatus(selectedCard.id, 'not_started')}
                    className="px-6 py-2 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition duration-200"
                  >
                    标记为未学
                  </button>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrammarCardWall; 