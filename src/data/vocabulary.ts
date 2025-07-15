export interface VocabularyCard {
  id: string;
  word: string;
  romaji: string;
  meaning: string;
  status: '未学习' | '学习中' | '已完成';
  category: string;
  examples: {
    japanese: string;
    chinese: string;
  }[];
}

// 词汇分类
export const vocabularyCategories = [
  { id: 'basic', name: '基础词汇' },
  { id: 'nature', name: '自然环境' },
  { id: 'season', name: '季节天气' },
  { id: 'animal', name: '动物' },
  { id: 'plant', name: '植物' },
  { id: 'food', name: '食物' },
  { id: 'transport', name: '交通' },
  { id: 'workplace', name: '职场' },
  { id: 'emotion', name: '情感表达' },
  { id: 'body', name: '身体部位' },
  { id: 'family', name: '家庭成员' },
  { id: 'number', name: '数字计量' },
  { id: 'direction', name: '方位' },
  { id: 'time', name: '时间' },
  { id: 'verb', name: '动词' },
  { id: 'adj', name: '形容词' },
  { id: 'adv', name: '副词' },
  { id: 'conj', name: '接续词' },
  { id: 'culture', name: '文化' },
  { id: 'tech', name: '科技' },
  { id: 'sport', name: '运动' },
  { id: 'art', name: '艺术' },
  { id: 'medical', name: '医疗' },
  { id: 'business', name: '商业' },
  { id: 'education', name: '教育' },
  { id: 'place', name: '地点' },
  { id: 'weather', name: '天气' },
  { id: 'color', name: '颜色' },
  { id: 'shape', name: '形状' },
  { id: 'clothes', name: '衣物' },
  { id: 'festival', name: '节日' },
  { id: 'hobby', name: '兴趣' },
  { id: 'life', name: '日常生活' },
];

// 原始词汇数据
const rawVocabularyData: VocabularyCard[] = [
  // 基础词汇
  { id: 'basic-1', word: 'こんにちは', romaji: 'konnichiwa', meaning: '你好', status: '未学习', category: 'basic', examples: [{ japanese: 'こんにちは、元気ですか？', chinese: '你好，你好吗？' }] },
  { id: 'basic-2', word: 'ありがとう', romaji: 'arigatou', meaning: '谢谢', status: '未学习', category: 'basic', examples: [{ japanese: 'ありがとうございます。', chinese: '非常感谢。' }] },
  { id: 'basic-3', word: 'さようなら', romaji: 'sayounara', meaning: '再见', status: '未学习', category: 'basic', examples: [{ japanese: 'さようなら、また明日。', chinese: '再见，明天见。' }] },
  { id: 'basic-4', word: 'おはよう', romaji: 'ohayou', meaning: '早上好', status: '未学习', category: 'basic', examples: [{ japanese: 'おはようございます。', chinese: '早上好。' }] },
  { id: 'basic-5', word: 'こんばんは', romaji: 'konbanwa', meaning: '晚上好', status: '未学习', category: 'basic', examples: [{ japanese: 'こんばんは、お元気ですか？', chinese: '晚上好，你好吗？' }] },
  { id: 'basic-6', word: 'すみません', romaji: 'sumimasen', meaning: '对不起', status: '未学习', category: 'basic', examples: [{ japanese: 'すみません、遅くなりました。', chinese: '对不起，我来晚了。' }] },
  { id: 'basic-7', word: 'いただきます', romaji: 'itadakimasu', meaning: '我开动了', status: '未学习', category: 'basic', examples: [{ japanese: 'いただきます。', chinese: '我开动了。' }] },
  { id: 'basic-8', word: 'ごちそうさま', romaji: 'gochisousama', meaning: '谢谢款待', status: '未学习', category: 'basic', examples: [{ japanese: 'ごちそうさまでした。', chinese: '谢谢款待。' }] },
  { id: 'basic-9', word: 'お疲れ様', romaji: 'otsukaresama', meaning: '辛苦了', status: '未学习', category: 'basic', examples: [{ japanese: 'お疲れ様でした。', chinese: '辛苦了。' }] },
  { id: 'basic-10', word: '失礼', romaji: 'shitsurei', meaning: '失礼了', status: '未学习', category: 'basic', examples: [{ japanese: '失礼します。', chinese: '失礼了。' }] },
  {
    id: 'basic-11',
    word: 'おめでとう',
    romaji: 'omedetou',
    meaning: '恭喜',
    status: '未学习',
    category: 'basic',
    examples: [
      {
        japanese: 'おめでとうございます。',
        chinese: '恭喜您。'
      }
    ]
  },
  {
    id: 'basic-13',
    word: 'どういたしまして',
    romaji: 'dou itashimashite',
    meaning: '不客气',
    status: '未学习',
    category: 'basic',
    examples: [
      {
        japanese: 'ありがとう。どういたしまして。',
        chinese: '谢谢。不客气。'
      }
    ]
  },
  {
    id: 'basic-14',
    word: 'はい',
    romaji: 'hai',
    meaning: '是的',
    status: '未学习',
    category: 'basic',
    examples: [
      {
        japanese: 'はい、分かりました。',
        chinese: '是的，明白了。'
      }
    ]
  },
  {
    id: 'basic-15',
    word: 'いいえ',
    romaji: 'iie',
    meaning: '不是/不',
    status: '未学习',
    category: 'basic',
    examples: [
      { japanese: 'いいえ、違います。', chinese: '不是，不对。' }
    ]
  },
  {
    id: 'basic-16',
    word: 'お願いします',
    romaji: 'onegai shimasu',
    meaning: '拜托了/请',
    status: '未学习',
    category: 'basic',
    examples: [
      { japanese: '助けてください、お願いします。', chinese: '请帮帮我，拜托了。' }
    ]
  },
  {
    id: 'basic-17',
    word: '分かりました',
    romaji: 'wakarimashita',
    meaning: '明白了',
    status: '未学习',
    category: 'basic',
    examples: [
      { japanese: '分かりました、ありがとうございます。', chinese: '明白了，谢谢。' }
    ]
  },
  {
    id: 'basic-18',
    word: 'どうぞ',
    romaji: 'douzo',
    meaning: '请/请用',
    status: '未学习',
    category: 'basic',
    examples: [
      { japanese: 'どうぞお入りください。', chinese: '请进。' }
    ]
  },
  {
    id: 'basic-19',
    word: 'お元気ですか',
    romaji: 'ogenki desu ka',
    meaning: '你好吗',
    status: '未学习',
    category: 'basic',
    examples: [
      { japanese: 'お元気ですか？', chinese: '你好吗？' }
    ]
  },
  {
    id: 'basic-20',
    word: '久しぶり',
    romaji: 'hisashiburi',
    meaning: '好久不见',
    status: '未学习',
    category: 'basic',
    examples: [
      { japanese: '久しぶりですね。', chinese: '好久不见啊。' }
    ]
  },
  // 自然环境
  {
    id: 'nature-1',
    word: '山',
    romaji: 'yama',
    meaning: '山',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '富士山は日本で一番高い山です。',
        chinese: '富士山是日本最高的山。'
      }
    ]
  },
  {
    id: 'nature-2',
    word: '川',
    romaji: 'kawa',
    meaning: '河',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: 'この川はとてもきれいです。',
        chinese: '这条河很清澈。'
      }
    ]
  },
  {
    id: 'nature-3',
    word: '海',
    romaji: 'umi',
    meaning: '海',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '海はとても広いです。',
        chinese: '海洋很广阔。'
      }
    ]
  },
  {
    id: 'nature-4',
    word: '空',
    romaji: 'sora',
    meaning: '天空',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '空が青いです。',
        chinese: '天空很蓝。'
      }
    ]
  },
  {
    id: 'nature-5',
    word: '森',
    romaji: 'mori',
    meaning: '森林',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '森の中を散歩します。',
        chinese: '在森林中散步。'
      }
    ]
  },
  {
    id: 'nature-6',
    word: '湖',
    romaji: 'mizuumi',
    meaning: '湖泊',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '湖が静かです。',
        chinese: '湖泊很安静。'
      }
    ]
  },
  {
    id: 'nature-9',
    word: '星',
    romaji: 'hoshi',
    meaning: '星星',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '星が輝いています。',
        chinese: '星星在闪烁。'
      }
    ]
  },
  {
    id: 'nature-10',
    word: '月',
    romaji: 'tsuki',
    meaning: '月亮',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '月が明るいです。',
        chinese: '月亮很亮。'
      }
    ]
  },
  {
    id: 'nature-11',
    word: '雲',
    romaji: 'kumo',
    meaning: '云',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '雲が浮かんでいます。',
        chinese: '云在飘浮。'
      }
    ]
  },
  {
    id: 'nature-12',
    word: '虹',
    romaji: 'niji',
    meaning: '彩虹',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '虹が出ています。',
        chinese: '出现了彩虹。'
      }
    ]
  },
  {
    id: 'nature-13',
    word: '滝',
    romaji: 'taki',
    meaning: '瀑布',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '滝が流れています。',
        chinese: '瀑布在流淌。'
      }
    ]
  },
  {
    id: 'nature-14',
    word: '谷',
    romaji: 'tani',
    meaning: '山谷',
    status: '未学习',
    category: 'nature',
    examples: [
      {
        japanese: '谷を歩きます。',
        chinese: '在山谷中行走。'
      }
    ]
  },
  // 季节天气
  {
    id: 'season-1',
    word: '春',
    romaji: 'haru',
    meaning: '春天',
    status: '未学习',
    category: 'season',
    examples: [
      {
        japanese: '春になると桜が咲きます。',
        chinese: '到了春天樱花就会开放。'
      }
    ]
  },
  {
    id: 'season-2',
    word: '雨',
    romaji: 'ame',
    meaning: '雨',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '今日は雨が降っています。',
        chinese: '今天在下雨。'
      }
    ]
  },
  {
    id: 'season-3',
    word: '夏',
    romaji: 'natsu',
    meaning: '夏天',
    status: '未学习',
    category: 'season',
    examples: [
      {
        japanese: '夏は暑いです。',
        chinese: '夏天很热。'
      }
    ]
  },
  {
    id: 'season-4',
    word: '秋',
    romaji: 'aki',
    meaning: '秋天',
    status: '未学习',
    category: 'season',
    examples: [
      {
        japanese: '秋になると紅葉がきれいです。',
        chinese: '到了秋天红叶很美。'
      }
    ]
  },
  {
    id: 'season-5',
    word: '冬',
    romaji: 'fuyu',
    meaning: '冬天',
    status: '未学习',
    category: 'season',
    examples: [
      {
        japanese: '冬は寒いです。',
        chinese: '冬天很冷。'
      }
    ]
  },
  {
    id: 'season-6',
    word: '雪',
    romaji: 'yuki',
    meaning: '雪',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '雪が降っています。',
        chinese: '在下雪。'
      }
    ]
  },
  {
    id: 'season-7',
    word: '風',
    romaji: 'kaze',
    meaning: '风',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '風が強いです。',
        chinese: '风很大。'
      }
    ]
  },
  {
    id: 'season-8',
    word: '雷',
    romaji: 'kaminari',
    meaning: '雷',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '雷が鳴っています。',
        chinese: '在打雷。'
      }
    ]
  },
  {
    id: 'season-9',
    word: '霧',
    romaji: 'kiri',
    meaning: '雾',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '霧がかかっています。',
        chinese: '起雾了。'
      }
    ]
  },
  {
    id: 'season-10',
    word: '霜',
    romaji: 'shimo',
    meaning: '霜',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '霜が降りています。',
        chinese: '下霜了。'
      }
    ]
  },
  {
    id: 'season-11',
    word: '曇り',
    romaji: 'kumori',
    meaning: '阴天',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '今日は曇りです。',
        chinese: '今天是阴天。'
      }
    ]
  },
  {
    id: 'season-12',
    word: '晴れ',
    romaji: 'hare',
    meaning: '晴天',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '今日は晴れです。',
        chinese: '今天是晴天。'
      }
    ]
  },
  {
    id: 'season-13',
    word: '湿度',
    romaji: 'shitsudo',
    meaning: '湿度',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '湿度が高いです。',
        chinese: '湿度很高。'
      }
    ]
  },
  {
    id: 'season-14',
    word: '気温',
    romaji: 'kion',
    meaning: '气温',
    status: '未学习',
    category: 'weather',
    examples: [
      {
        japanese: '今日の気温は何度ですか。',
        chinese: '今天的气温是多少度？'
      }
    ]
  },
  // 动物
  {
    id: 'animal-1',
    word: '猫',
    romaji: 'neko',
    meaning: '猫',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '猫が好きです。',
        chinese: '我喜欢猫。'
      }
    ]
  },
  {
    id: 'animal-2',
    word: '犬',
    romaji: 'inu',
    meaning: '狗',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '犬を飼っています。',
        chinese: '我养了一只狗。'
      }
    ]
  },
  {
    id: 'animal-3',
    word: '鳥',
    romaji: 'tori',
    meaning: '鸟',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '鳥が空を飛んでいます。',
        chinese: '鸟儿在天空中飞翔。'
      }
    ]
  },
  {
    id: 'animal-4',
    word: '魚',
    romaji: 'sakana',
    meaning: '鱼',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '魚が泳いでいます。',
        chinese: '鱼在游泳。'
      }
    ]
  },
  {
    id: 'animal-5',
    word: '熊',
    romaji: 'kuma',
    meaning: '熊',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '熊が森に住んでいます。',
        chinese: '熊住在森林里。'
      }
    ]
  },
  {
    id: 'animal-6',
    word: '虎',
    romaji: 'tora',
    meaning: '老虎',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '虎は強い動物です。',
        chinese: '老虎是强壮的动物。'
      }
    ]
  },
  {
    id: 'animal-7',
    word: '猿',
    romaji: 'saru',
    meaning: '猴子',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '猿が木に登っています。',
        chinese: '猴子在爬树。'
      }
    ]
  },
  {
    id: 'animal-8',
    word: '象',
    romaji: 'zou',
    meaning: '大象',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '象は大きな動物です。',
        chinese: '大象是大型动物。'
      }
    ]
  },
  {
    id: 'animal-9',
    word: '鹿',
    romaji: 'shika',
    meaning: '鹿',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '鹿が森にいます。',
        chinese: '鹿在森林里。'
      }
    ]
  },
  {
    id: 'animal-10',
    word: '狐',
    romaji: 'kitsune',
    meaning: '狐狸',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '狐が走っています。',
        chinese: '狐狸在跑。'
      }
    ]
  },
  {
    id: 'animal-13',
    word: '馬',
    romaji: 'uma',
    meaning: '马',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '馬が走っています。',
        chinese: '马在奔跑。'
      }
    ]
  },
  {
    id: 'animal-14',
    word: '羊',
    romaji: 'hitsuji',
    meaning: '羊',
    status: '未学习',
    category: 'animal',
    examples: [
      {
        japanese: '羊が草を食べています。',
        chinese: '羊在吃草。'
      }
    ]
  },
  // 植物
  {
    id: 'plant-1',
    word: '花',
    romaji: 'hana',
    meaning: '花',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '庭に花が咲いています。',
        chinese: '院子里开着花。'
      }
    ]
  },
  {
    id: 'plant-2',
    word: '木',
    romaji: 'ki',
    meaning: '树',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '大きな木があります。',
        chinese: '有一棵大树。'
      }
    ]
  },
  {
    id: 'plant-3',
    word: '草',
    romaji: 'kusa',
    meaning: '草',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '草が生えています。',
        chinese: '草长出来了。'
      }
    ]
  },
  {
    id: 'plant-4',
    word: '葉',
    romaji: 'ha',
    meaning: '叶子',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '葉が落ちます。',
        chinese: '叶子落下来了。'
      }
    ]
  },
  {
    id: 'plant-5',
    word: '桜',
    romaji: 'sakura',
    meaning: '樱花',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '桜が咲いています。',
        chinese: '樱花开了。'
      }
    ]
  },
  {
    id: 'plant-6',
    word: '松',
    romaji: 'matsu',
    meaning: '松树',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '松の木が立っています。',
        chinese: '松树挺立着。'
      }
    ]
  },
  {
    id: 'plant-7',
    word: '竹',
    romaji: 'take',
    meaning: '竹子',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '竹が生えています。',
        chinese: '竹子长出来了。'
      }
    ]
  },
  {
    id: 'plant-8',
    word: '梅',
    romaji: 'ume',
    meaning: '梅花',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '梅の花が咲いています。',
        chinese: '梅花开了。'
      }
    ]
  },
  {
    id: 'plant-11',
    word: '葡萄',
    romaji: 'budou',
    meaning: '葡萄',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '葡萄を食べます。',
        chinese: '吃葡萄。'
      }
    ]
  },
  {
    id: 'plant-12',
    word: '蘭',
    romaji: 'ran',
    meaning: '兰花',
    status: '未学习',
    category: 'plant',
    examples: [
      {
        japanese: '蘭の花が美しいです。',
        chinese: '兰花很美。'
      }
    ]
  },
  // 食物
  {
    id: 'food-1',
    word: '寿司',
    romaji: 'sushi',
    meaning: '寿司',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: '寿司を食べに行きましょう。',
        chinese: '我们去吃寿司吧。'
      }
    ]
  },
  {
    id: 'food-2',
    word: 'ラーメン',
    romaji: 'raamen',
    meaning: '拉面',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'ラーメンが大好きです。',
        chinese: '我很喜欢拉面。'
      }
    ]
  },
  {
    id: 'food-3',
    word: 'ご飯',
    romaji: 'gohan',
    meaning: '米饭',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'ご飯を食べましょう。',
        chinese: '我们吃饭吧。'
      }
    ]
  },
  {
    id: 'food-4',
    word: '味噌汁',
    romaji: 'miso shiru',
    meaning: '味增汤',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: '味噌汁を作ります。',
        chinese: '我来做味增汤。'
      }
    ]
  },
  {
    id: 'food-5',
    word: 'パン',
    romaji: 'pan',
    meaning: '面包',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'パンを買います。',
        chinese: '买面包。'
      }
    ]
  },
  {
    id: 'food-6',
    word: 'ケーキ',
    romaji: 'keeki',
    meaning: '蛋糕',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'ケーキを作ります。',
        chinese: '做蛋糕。'
      }
    ]
  },
  {
    id: 'food-7',
    word: 'お茶',
    romaji: 'ocha',
    meaning: '茶',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'お茶を飲みます。',
        chinese: '喝茶。'
      }
    ]
  },
  {
    id: 'food-8',
    word: 'コーヒー',
    romaji: 'koohii',
    meaning: '咖啡',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'コーヒーを飲みます。',
        chinese: '喝咖啡。'
      }
    ]
  },
  {
    id: 'food-9',
    word: 'お酒',
    romaji: 'osake',
    meaning: '酒',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'お酒を飲みます。',
        chinese: '喝酒。'
      }
    ]
  },
  {
    id: 'food-10',
    word: 'ビール',
    romaji: 'biiru',
    meaning: '啤酒',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: 'ビールを飲みます。',
        chinese: '喝啤酒。'
      }
    ]
  },
  {
    id: 'food-13',
    word: '牛乳',
    romaji: 'gyuunyuu',
    meaning: '牛奶',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: '牛乳を飲みます。',
        chinese: '喝牛奶。'
      }
    ]
  },
  {
    id: 'food-14',
    word: '卵',
    romaji: 'tamago',
    meaning: '鸡蛋',
    status: '未学习',
    category: 'food',
    examples: [
      {
        japanese: '卵をゆでます。',
        chinese: '煮鸡蛋。'
      }
    ]
  },
  // 动词
  {
    id: 'verb-1',
    word: '食べる',
    romaji: 'taberu',
    meaning: '吃',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: 'ご飯を食べます。',
        chinese: '吃饭。'
      },
      {
        japanese: '美味しい料理を食べました。',
        chinese: '吃了美味的料理。'
      }
    ]
  },
  {
    id: 'verb-2',
    word: '飲む',
    romaji: 'nomu',
    meaning: '喝',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: 'お茶を飲みます。',
        chinese: '我喝茶。'
      }
    ]
  },
  {
    id: 'verb-3',
    word: '行く',
    romaji: 'iku',
    meaning: '去',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '学校に行きます。',
        chinese: '我去学校。'
      }
    ]
  },
  {
    id: 'verb-4',
    word: '来る',
    romaji: 'kuru',
    meaning: '来',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '友達が来ます。',
        chinese: '朋友要来。'
      }
    ]
  },
  {
    id: 'verb-5',
    word: '見る',
    romaji: 'miru',
    meaning: '看',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: 'テレビを見ます。',
        chinese: '我看电视。'
      }
    ]
  },
  {
    id: 'verb-6',
    word: '聞く',
    romaji: 'kiku',
    meaning: '听',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '音楽を聞きます。',
        chinese: '我听音乐。'
      }
    ]
  },
  {
    id: 'verb-7',
    word: '書く',
    romaji: 'kaku',
    meaning: '写',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '手紙を書きます。',
        chinese: '写信。'
      }
    ]
  },
  {
    id: 'verb-8',
    word: '読む',
    romaji: 'yomu',
    meaning: '读',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '本を読みます。',
        chinese: '读书。'
      }
    ]
  },
  {
    id: 'verb-9',
    word: '話す',
    romaji: 'hanasu',
    meaning: '说话',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '日本語を話します。',
        chinese: '说日语。'
      }
    ]
  },
  {
    id: 'verb-13',
    word: '歩く',
    romaji: 'aruku',
    meaning: '走路',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '公園を歩きます。',
        chinese: '在公园里走路。'
      }
    ]
  },
  {
    id: 'verb-14',
    word: '走る',
    romaji: 'hashiru',
    meaning: '跑步',
    status: '未学习',
    category: 'verb',
    examples: [
      {
        japanese: '毎朝走ります。',
        chinese: '每天早上跑步。'
      }
    ]
  },
  // 形容词
  {
    id: 'adj-1',
    word: '大きい',
    romaji: 'ookii',
    meaning: '大的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '大きい家です。',
        chinese: '是大房子。'
      },
      {
        japanese: 'この部屋は大きいですね。',
        chinese: '这个房间真大啊。'
      }
    ]
  },
  {
    id: 'adj-2',
    word: '小さい',
    romaji: 'chiisai',
    meaning: '小的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '小さい猫がいます。',
        chinese: '有一只小猫。'
      }
    ]
  },
  {
    id: 'adj-3',
    word: '新しい',
    romaji: 'atarashii',
    meaning: '新的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '新しい車を買いました。',
        chinese: '买了新车。'
      }
    ]
  },
  {
    id: 'adj-4',
    word: '古い',
    romaji: 'furui',
    meaning: '旧的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '古い本を読みます。',
        chinese: '读旧书。'
      }
    ]
  },
  {
    id: 'adj-5',
    word: '高い',
    romaji: 'takai',
    meaning: '高的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '高いビルがあります。',
        chinese: '有高楼。'
      }
    ]
  },
  {
    id: 'adj-6',
    word: '低い',
    romaji: 'hikui',
    meaning: '低的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '低いテーブルです。',
        chinese: '是矮桌子。'
      }
    ]
  },
  {
    id: 'adj-7',
    word: '美しい',
    romaji: 'utsukushii',
    meaning: '美丽的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '美しい景色です。',
        chinese: '美丽的景色。'
      }
    ]
  },
  {
    id: 'adj-8',
    word: '醜い',
    romaji: 'minikui',
    meaning: '丑陋的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '醜い建物です。',
        chinese: '丑陋的建筑物。'
      }
    ]
  },
  {
    id: 'adj-9',
    word: '速い',
    romaji: 'hayai',
    meaning: '快的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '速い車です。',
        chinese: '是快车。'
      }
    ]
  },
  {
    id: 'adj-10',
    word: '遅い',
    romaji: 'osoi',
    meaning: '慢的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '遅い電車です。',
        chinese: '是慢车。'
      }
    ]
  },
  {
    id: 'adj-13',
    word: '明るい',
    romaji: 'akarui',
    meaning: '明亮的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '部屋が明るいです。',
        chinese: '房间很明亮。'
      }
    ]
  },
  {
    id: 'adj-14',
    word: '暗い',
    romaji: 'kurai',
    meaning: '昏暗的',
    status: '未学习',
    category: 'adj',
    examples: [
      {
        japanese: '部屋が暗いです。',
        chinese: '房间很暗。'
      }
    ]
  },
  // 副词
  {
    id: 'adv-1',
    word: 'ゆっくり',
    romaji: 'yukkuri',
    meaning: '慢慢地',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: 'ゆっくり歩きます。',
        chinese: '慢慢地走。'
      }
    ]
  },
  {
    id: 'adv-2',
    word: '急に',
    romaji: 'kyuuni',
    meaning: '突然',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: '急に雨が降りました。',
        chinese: '突然下雨了。'
      }
    ]
  },
  {
    id: 'adv-7',
    word: 'たくさん',
    romaji: 'takusan',
    meaning: '很多',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: 'たくさん食べます。',
        chinese: '吃很多。'
      }
    ]
  },
  {
    id: 'adv-8',
    word: '少し',
    romaji: 'sukoshi',
    meaning: '一点',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: '少し待ってください。',
        chinese: '请稍等。'
      }
    ]
  },
  {
    id: 'adv-9',
    word: 'とても',
    romaji: 'totemo',
    meaning: '非常',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: 'とても美味しいです。',
        chinese: '非常好吃。'
      }
    ]
  },
  {
    id: 'adv-10',
    word: 'あまり',
    romaji: 'amari',
    meaning: '不太',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: 'あまり美味しくないです。',
        chinese: '不太好吃。'
      }
    ]
  },
  {
    id: 'adv-11',
    word: 'すぐ',
    romaji: 'sugu',
    meaning: '马上',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: 'すぐ行きます。',
        chinese: '马上去。'
      }
    ]
  },
  {
    id: 'adv-12',
    word: 'もっと',
    romaji: 'motto',
    meaning: '更多',
    status: '未学习',
    category: 'adv',
    examples: [
      {
        japanese: 'もっと勉強します。',
        chinese: '要更加努力学习。'
      }
    ]
  },
  // 接续词
  {
    id: 'conj-1',
    word: 'また',
    romaji: 'mata',
    meaning: '又',
    status: '未学习',
    category: 'conj',
    examples: [
      {
        japanese: 'また会いましょう。',
        chinese: '再见。'
      }
    ]
  },
  {
    id: 'conj-2',
    word: 'それから',
    romaji: 'sorekara',
    meaning: '然后',
    status: '未学习',
    category: 'conj',
    examples: [
      {
        japanese: '朝起きて、それから学校に行きます。',
        chinese: '早上起床，然后去学校。'
      }
    ]
  },
  {
    id: 'conj-7',
    word: 'そして',
    romaji: 'soshite',
    meaning: '然后',
    status: '未学习',
    category: 'conj',
    examples: [
      {
        japanese: '朝起きて、そして学校に行きます。',
        chinese: '早上起床，然后去学校。'
      }
    ]
  },
  {
    id: 'conj-8',
    word: 'でも',
    romaji: 'demo',
    meaning: '但是',
    status: '未学习',
    category: 'conj',
    examples: [
      {
        japanese: '雨が降っています。でも、出かけます。',
        chinese: '在下雨。但是，我要出门。'
      }
    ]
  },
  {
    id: 'conj-10',
    word: 'それから',
    romaji: 'sorekara',
    meaning: '然后',
    status: '未学习',
    category: 'conj',
    examples: [
      {
        japanese: '朝起きて、それから学校に行きます。',
        chinese: '早上起床，然后去学校。'
      }
    ]
  },
  {
    id: 'conj-11',
    word: 'それに',
    romaji: 'soreni',
    meaning: '而且',
    status: '未学习',
    category: 'conj',
    examples: [
      {
        japanese: '彼は親切です。それに、頭もいいです。',
        chinese: '他很亲切，而且很聪明。'
      }
    ]
  },
  {
    id: 'conj-12',
    word: 'または',
    romaji: 'matawa',
    meaning: '或者',
    status: '未学习',
    category: 'conj',
    examples: [
      {
        japanese: 'コーヒーまたはお茶を飲みますか。',
        chinese: '喝咖啡还是喝茶？'
      }
    ]
  },
  // 文化
  {
    id: 'culture-1',
    word: '日本',
    romaji: 'nihon',
    meaning: '日本',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '日本はとても美しい国です。',
        chinese: '日本是一个非常美丽的国家。'
      }
    ]
  },
  {
    id: 'culture-2',
    word: '中国',
    romaji: 'china',
    meaning: '中国',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '中国はとても古い国です。',
        chinese: '中国是一个非常古老的国家。'
      }
    ]
  },
  {
    id: 'culture-3',
    word: '武道',
    romaji: 'budou',
    meaning: '武道',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '武道を習います。',
        chinese: '学习武道。'
      }
    ]
  },
  {
    id: 'culture-4',
    word: '芸術',
    romaji: 'geijutsu',
    meaning: '艺术',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '芸術を鑑賞します。',
        chinese: '欣赏艺术。'
      }
    ]
  },
  {
    id: 'culture-5',
    word: '武道',
    romaji: 'budou',
    meaning: '武道',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '武道を習います。',
        chinese: '学习武道。'
      }
    ]
  },
  {
    id: 'culture-6',
    word: '芸術',
    romaji: 'geijutsu',
    meaning: '艺术',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '芸術を鑑賞します。',
        chinese: '欣赏艺术。'
      }
    ]
  },
  {
    id: 'culture-7',
    word: '祭り',
    romaji: 'matsuri',
    meaning: '节日',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '祭りに行きます。',
        chinese: '去参加节日。'
      }
    ]
  },
  {
    id: 'culture-8',
    word: '神社',
    romaji: 'jinja',
    meaning: '神社',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '神社にお参りします。',
        chinese: '去神社参拜。'
      }
    ]
  },
  {
    id: 'culture-9',
    word: '和服',
    romaji: 'wafuku',
    meaning: '和服',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '和服を着ます。',
        chinese: '穿和服。'
      }
    ]
  },
  {
    id: 'culture-10',
    word: '茶道',
    romaji: 'sadou',
    meaning: '茶道',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '茶道を習います。',
        chinese: '学习茶道。'
      }
    ]
  },
  {
    id: 'culture-11',
    word: '神道',
    romaji: 'shinto',
    meaning: '神道',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '神道は日本の伝統宗教です。',
        chinese: '神道是日本的传统宗教。'
      }
    ]
  },
  {
    id: 'culture-12',
    word: '仏教',
    romaji: 'bukkyou',
    meaning: '佛教',
    status: '未学习',
    category: 'culture',
    examples: [
      {
        japanese: '仏教はアジアで広く信仰されています。',
        chinese: '佛教在亚洲广泛信仰。'
      }
    ]
  },
  // 科技
  {
    id: 'tech-1',
    word: 'コンピュータ',
    romaji: 'konpyuuta',
    meaning: '电脑',
    status: '未学习',
    category: 'tech',
    examples: [{ japanese: 'コンピュータで作業します。', chinese: '用电脑工作。' }],
  },
  {
    id: 'tech-2',
    word: 'インターネット',
    romaji: 'intaanetto',
    meaning: '互联网',
    status: '未学习',
    category: 'tech',
    examples: [{ japanese: 'インターネットで調べます。', chinese: '在网上查找。' }],
  },
  {
    id: 'tech-3',
    word: 'スマートフォン',
    romaji: 'sumaatofon',
    meaning: '智能手机',
    status: '未学习',
    category: 'tech',
    examples: [{ japanese: 'スマートフォンで連絡します。', chinese: '用智能手机联系。' }],
  },
  {
    id: 'tech-4',
    word: 'アプリ',
    romaji: 'apuri',
    meaning: '应用程序',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: '新しいアプリをインストールします。',
        chinese: '安装新的应用程序。'
      }
    ]
  },
  {
    id: 'tech-5',
    word: 'データ',
    romaji: 'deeta',
    meaning: '数据',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'データを保存します。',
        chinese: '保存数据。'
      }
    ]
  },
  // 教育
  {
    id: 'education-1',
    word: '学校',
    romaji: 'gakkou',
    meaning: '学校',
    status: '未学习',
    category: 'education',
    examples: [{ japanese: '学校で勉強します。', chinese: '在学校学习。' }],
  },
  {
    id: 'education-2',
    word: '先生',
    romaji: 'sensei',
    meaning: '老师',
    status: '未学习',
    category: 'education',
    examples: [{ japanese: '先生に教わります。', chinese: '跟老师学习。' }],
  },
  {
    id: 'education-3',
    word: '学生',
    romaji: 'gakusei',
    meaning: '学生',
    status: '未学习',
    category: 'education',
    examples: [{ japanese: '学生として頑張ります。', chinese: '作为学生努力。' }],
  },
  {
    id: 'education-4',
    word: '教科書',
    romaji: 'kyoukasho',
    meaning: '教科书',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '教科書を読みます。',
        chinese: '阅读教科书。'
      }
    ]
  },
  {
    id: 'education-5',
    word: 'ノート',
    romaji: 'nooto',
    meaning: '笔记本',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: 'ノートにメモを取ります。',
        chinese: '在笔记本上做笔记。'
      }
    ]
  },
  {
    id: 'tech-6',
    word: 'ウェブサイト',
    romaji: 'webusaito',
    meaning: '网站',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'ウェブサイトを閲覧します。',
        chinese: '浏览网站。'
      }
    ]
  },
  {
    id: 'tech-7',
    word: 'パスワード',
    romaji: 'pasuwādo',
    meaning: '密码',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'パスワードを設定します。',
        chinese: '设置密码。'
      }
    ]
  },
  {
    id: 'tech-8',
    word: 'データ',
    romaji: 'dēta',
    meaning: '数据',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'データを保存します。',
        chinese: '保存数据。'
      }
    ]
  },
  {
    id: 'tech-9',
    word: 'ファイル',
    romaji: 'fairu',
    meaning: '文件',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'ファイルを開きます。',
        chinese: '打开文件。'
      }
    ]
  },
  {
    id: 'tech-10',
    word: 'ダウンロード',
    romaji: 'daunrōdo',
    meaning: '下载',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'ファイルをダウンロードします。',
        chinese: '下载文件。'
      }
    ]
  },
  {
    id: 'tech-11',
    word: 'アップロード',
    romaji: 'appurōdo',
    meaning: '上传',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: '写真をアップロードします。',
        chinese: '上传照片。'
      }
    ]
  },
  {
    id: 'tech-12',
    word: 'ソフトウェア',
    romaji: 'sofutowea',
    meaning: '软件',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'ソフトウェアを更新します。',
        chinese: '更新软件。'
      }
    ]
  },
  {
    id: 'tech-13',
    word: 'ハードウェア',
    romaji: 'hādowea',
    meaning: '硬件',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'ハードウェアを修理します。',
        chinese: '修理硬件。'
      }
    ]
  },
  {
    id: 'tech-14',
    word: 'ネットワーク',
    romaji: 'nettowāku',
    meaning: '网络',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'ネットワークに接続します。',
        chinese: '连接网络。'
      }
    ]
  },
  {
    id: 'tech-15',
    word: 'サーバー',
    romaji: 'sābā',
    meaning: '服务器',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'サーバーを管理します。',
        chinese: '管理服务器。'
      }
    ]
  },
  {
    id: 'tech-16',
    word: 'プログラミング',
    romaji: 'puroguramingu',
    meaning: '编程',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'プログラミングを勉強します。',
        chinese: '学习编程。'
      }
    ]
  },
  {
    id: 'tech-17',
    word: 'バグ',
    romaji: 'bagu',
    meaning: '程序错误',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'バグを修正します。',
        chinese: '修正程序错误。'
      }
    ]
  },
  {
    id: 'tech-18',
    word: 'セキュリティ',
    romaji: 'sekyuriti',
    meaning: '安全性',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'セキュリティを強化します。',
        chinese: '加强安全性。'
      }
    ]
  },
  {
    id: 'tech-19',
    word: 'バックアップ',
    romaji: 'bakkuappu',
    meaning: '备份',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'データをバックアップします。',
        chinese: '备份数据。'
      }
    ]
  },
  {
    id: 'tech-20',
    word: 'クラウド',
    romaji: 'kuraudo',
    meaning: '云',
    status: '未学习',
    category: 'tech',
    examples: [
      {
        japanese: 'クラウドに保存します。',
        chinese: '保存到云端。'
      }
    ]
  },
  // 运动
  {
    id: 'sport-2',
    word: 'サッカー',
    romaji: 'sakkaa',
    meaning: '足球',
    status: '未学习',
    category: 'sport',
    examples: [
      {
        japanese: 'サッカーをします。',
        chinese: '踢足球。'
      }
    ]
  },
  {
    id: 'sport-3',
    word: 'テニス',
    romaji: 'tenisu',
    meaning: '网球',
    status: '未学习',
    category: 'sport',
    examples: [
      {
        japanese: 'テニスをします。',
        chinese: '打网球。'
      }
    ]
  },
  {
    id: 'sport-4',
    word: '水泳',
    romaji: 'suiei',
    meaning: '游泳',
    status: '未学习',
    category: 'sport',
    examples: [
      {
        japanese: 'プールで水泳をします。',
        chinese: '在游泳池游泳。'
      }
    ]
  },
  {
    id: 'sport-5',
    word: 'ジョギング',
    romaji: 'jogingu',
    meaning: '慢跑',
    status: '未学习',
    category: 'sport',
    examples: [
      {
        japanese: '朝にジョギングをします。',
        chinese: '早上慢跑。'
      }
    ]
  },
  // 艺术
  {
    id: 'art-1',
    word: '音楽',
    romaji: 'ongaku',
    meaning: '音乐',
    status: '未学习',
    category: 'art',
    examples: [{ japanese: '音楽を聴きます。', chinese: '听音乐。' }],
  },
  {
    id: 'art-2',
    word: '彫刻',
    romaji: 'choukoku',
    meaning: '雕刻',
    status: '未学习',
    category: 'art',
    examples: [
      {
        japanese: '彫刻を作ります。',
        chinese: '制作雕刻。'
      }
    ]
  },
  {
    id: 'art-3',
    word: '陶芸',
    romaji: 'tougei',
    meaning: '陶艺',
    status: '未学习',
    category: 'art',
    examples: [
      {
        japanese: '陶芸教室に通います。',
        chinese: '去陶艺教室。'
      }
    ]
  },
  {
    id: 'art-4',
    word: '書道',
    romaji: 'shodou',
    meaning: '书法',
    status: '未学习',
    category: 'art',
    examples: [
      {
        japanese: '書道を習います。',
        chinese: '学习书法。'
      }
    ]
  },
  {
    id: 'art-5',
    word: '折り紙',
    romaji: 'origami',
    meaning: '折纸',
    status: '未学习',
    category: 'art',
    examples: [
      {
        japanese: '折り紙で鶴を折ります。',
        chinese: '用折纸折千纸鹤。'
      }
    ]
  },
  // 医疗
  {
    id: 'medical-1',
    word: '病院',
    romaji: 'byouin',
    meaning: '医院',
    status: '未学习',
    category: 'medical',
    examples: [{ japanese: '病院に行きます。', chinese: '去医院。' }],
  },
  {
    id: 'medical-2',
    word: '医者',
    romaji: 'isha',
    meaning: '医生',
    status: '未学习',
    category: 'medical',
    examples: [{ japanese: '医者に診てもらいます。', chinese: '让医生看病。' }],
  },
  {
    id: 'medical-3',
    word: '薬',
    romaji: 'kusuri',
    meaning: '药',
    status: '未学习',
    category: 'medical',
    examples: [{ japanese: '薬を飲みます。', chinese: '吃药。' }],
  },
  {
    id: 'medical-4',
    word: '薬局',
    romaji: 'yakkyoku',
    meaning: '药店',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '薬局で薬を買います。',
        chinese: '在药店买药。'
      }
    ]
  },
  {
    id: 'medical-5',
    word: '病院',
    romaji: 'byouin',
    meaning: '医院',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '病院に行きます。',
        chinese: '去医院。'
      }
    ]
  },
  {
    id: 'medical-6',
    word: '薬局',
    romaji: 'yakkyoku',
    meaning: '药店',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '薬局で薬を買います。',
        chinese: '在药店买药。'
      }
    ]
  },
  {
    id: 'medical-7',
    word: '医者',
    romaji: 'isha',
    meaning: '医生',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '医者に診てもらいます。',
        chinese: '让医生看病。'
      }
    ]
  },
  {
    id: 'medical-8',
    word: '看護師',
    romaji: 'kangoshi',
    meaning: '护士',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '看護師が手当てをします。',
        chinese: '护士进行治疗。'
      }
    ]
  },
  {
    id: 'medical-9',
    word: '病院',
    romaji: 'byouin',
    meaning: '医院',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '病院に行きます。',
        chinese: '去医院。'
      }
    ]
  },
  {
    id: 'medical-10',
    word: '薬',
    romaji: 'kusuri',
    meaning: '药',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '薬を飲みます。',
        chinese: '吃药。'
      }
    ]
  },
  {
    id: 'medical-11',
    word: '注射',
    romaji: 'chuusha',
    meaning: '注射',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '注射を受けます。',
        chinese: '打针。'
      }
    ]
  },
  {
    id: 'medical-12',
    word: '診察',
    romaji: 'shinsatsu',
    meaning: '诊察',
    status: '未学习',
    category: 'medical',
    examples: [
      {
        japanese: '医者に診察してもらいます。',
        chinese: '让医生诊察。'
      }
    ]
  },
  // 商业
  {
    id: 'business-1',
    word: '会社',
    romaji: 'kaisha',
    meaning: '公司',
    status: '未学习',
    category: 'business',
    examples: [{ japanese: '会社で働きます。', chinese: '在公司工作。' }],
  },
  {
    id: 'business-2',
    word: '社長',
    romaji: 'shachou',
    meaning: '社长',
    status: '未学习',
    category: 'business',
    examples: [{ japanese: '社長に報告します。', chinese: '向社长报告。' }],
  },
  {
    id: 'business-3',
    word: '会議',
    romaji: 'kaigi',
    meaning: '会议',
    status: '未学习',
    category: 'business',
    examples: [{ japanese: '会議に参加します。', chinese: '参加会议。' }],
  },
  {
    id: 'business-4',
    word: '商談',
    romaji: 'shoudan',
    meaning: '商业谈判',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '商談を行います。',
        chinese: '进行商业谈判。'
      }
    ]
  },
  {
    id: 'business-5',
    word: '会社',
    romaji: 'kaisha',
    meaning: '公司',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '会社で働きます。',
        chinese: '在公司工作。'
      }
    ]
  },
  {
    id: 'business-6',
    word: '商談',
    romaji: 'shoudan',
    meaning: '商业谈判',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '商談を行います。',
        chinese: '进行商业谈判。'
      }
    ]
  },
  {
    id: 'business-7',
    word: '会社員',
    romaji: 'kaishain',
    meaning: '公司职员',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '会社員として働きます。',
        chinese: '作为公司职员工作。'
      }
    ]
  },
  {
    id: 'business-8',
    word: '営業',
    romaji: 'eigyou',
    meaning: '营业',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '営業部で働きます。',
        chinese: '在营业部工作。'
      }
    ]
  },
  {
    id: 'business-9',
    word: '会社',
    romaji: 'kaisha',
    meaning: '公司',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '会社で働きます。',
        chinese: '在公司工作。'
      }
    ]
  },
  {
    id: 'business-10',
    word: '商談',
    romaji: 'shoudan',
    meaning: '商业谈判',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '商談をします。',
        chinese: '进行商业谈判。'
      }
    ]
  },
  {
    id: 'business-11',
    word: '契約',
    romaji: 'keiyaku',
    meaning: '合同',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '契約を結びます。',
        chinese: '签合同。'
      }
    ]
  },
  {
    id: 'business-12',
    word: '会議',
    romaji: 'kaigi',
    meaning: '会议',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '会議に参加します。',
        chinese: '参加会议。'
      }
    ]
  },
  {
    id: 'business-13',
    word: '資料',
    romaji: 'shiryō',
    meaning: '资料',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '資料を準備します。',
        chinese: '准备资料。'
      }
    ]
  },
  {
    id: 'business-14',
    word: '報告',
    romaji: 'hōkoku',
    meaning: '报告',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '報告を提出します。',
        chinese: '提交报告。'
      }
    ]
  },
  {
    id: 'business-15',
    word: 'プレゼン',
    romaji: 'prezentaion',
    meaning: '演示',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: 'プレゼンを行います。',
        chinese: '进行演示。'
      }
    ]
  },
  {
    id: 'business-16',
    word: '契約',
    romaji: 'keiyaku',
    meaning: '合同',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '契約を結びます。',
        chinese: '签订合同。'
      }
    ]
  },
  {
    id: 'business-17',
    word: '顧客',
    romaji: 'kokyaku',
    meaning: '客户',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '顧客と打ち合わせます。',
        chinese: '与客户商谈。'
      }
    ]
  },
  {
    id: 'business-18',
    word: '上司',
    romaji: 'jōshi',
    meaning: '上司',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '上司に報告します。',
        chinese: '向上司报告。'
      }
    ]
  },
  {
    id: 'business-19',
    word: '部下',
    romaji: 'buka',
    meaning: '下属',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '部下を指導します。',
        chinese: '指导下属。'
      }
    ]
  },
  {
    id: 'business-20',
    word: '休日',
    romaji: 'kyūjitsu',
    meaning: '休息日',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '休日に休みます。',
        chinese: '在休息日休息。'
      }
    ]
  },
  {
    id: 'business-21',
    word: '残業',
    romaji: 'zangyō',
    meaning: '加班',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '残業をします。',
        chinese: '加班。'
      }
    ]
  },
  {
    id: 'business-22',
    word: '給料',
    romaji: 'kyūryō',
    meaning: '工资',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '給料をもらいます。',
        chinese: '领取工资。'
      }
    ]
  },
  {
    id: 'business-23',
    word: '退勤',
    romaji: 'taikin',
    meaning: '下班',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '退勤します。',
        chinese: '下班。'
      }
    ]
  },
  {
    id: 'business-24',
    word: '出勤',
    romaji: 'shukkin',
    meaning: '上班',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '出勤します。',
        chinese: '上班。'
      }
    ]
  },
  {
    id: 'business-25',
    word: 'ビジネス',
    romaji: 'bijinesu',
    meaning: '商务',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: 'ビジネスミーティングをします。',
        chinese: '进行商务会议。'
      }
    ]
  },
  {
    id: 'business-26',
    word: '交渉',
    romaji: 'kōshō',
    meaning: '谈判',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '交渉を行います。',
        chinese: '进行谈判。'
      }
    ]
  },
  {
    id: 'business-27',
    word: '提案',
    romaji: 'teian',
    meaning: '提案',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '提案を出します。',
        chinese: '提出提案。'
      }
    ]
  },
  {
    id: 'business-28',
    word: '決裁',
    romaji: 'kessai',
    meaning: '裁决',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '決裁を待ちます。',
        chinese: '等待裁决。'
      }
    ]
  },
  {
    id: 'business-29',
    word: '期限',
    romaji: 'kigen',
    meaning: '期限',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '期限を守ります。',
        chinese: '遵守期限。'
      }
    ]
  },
  {
    id: 'business-30',
    word: '目標',
    romaji: 'mokuhyō',
    meaning: '目标',
    status: '未学习',
    category: 'business',
    examples: [
      {
        japanese: '目標を達成します。',
        chinese: '达成目标。'
      }
    ]
  },
  // 交通
  {
    id: 'transport-1',
    word: '電車',
    romaji: 'densha',
    meaning: '电车',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '電車で通勤します。',
        chinese: '坐电车通勤。'
      }
    ]
  },
  {
    id: 'transport-2',
    word: 'バス',
    romaji: 'basu',
    meaning: '公交车',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: 'バスに乗ります。',
        chinese: '坐公交车。'
      }
    ]
  },
  {
    id: 'transport-3',
    word: '地下鉄',
    romaji: 'chikatetsu',
    meaning: '地铁',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '地下鉄で移動します。',
        chinese: '坐地铁出行。'
      }
    ]
  },
  {
    id: 'transport-4',
    word: 'タクシー',
    romaji: 'takushii',
    meaning: '出租车',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: 'タクシーを呼びます。',
        chinese: '叫出租车。'
      }
    ]
  },
  {
    id: 'transport-5',
    word: '自転車',
    romaji: 'jitensha',
    meaning: '自行车',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '自転車で学校に行きます。',
        chinese: '骑自行车去学校。'
      }
    ]
  },
  {
    id: 'transport-6',
    word: '車',
    romaji: 'kuruma',
    meaning: '汽车',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '車を運転します。',
        chinese: '开车。'
      }
    ]
  },
  {
    id: 'transport-7',
    word: '飛行機',
    romaji: 'hikouki',
    meaning: '飞机',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '飛行機で旅行します。',
        chinese: '坐飞机旅行。'
      }
    ]
  },
  {
    id: 'transport-9',
    word: '新幹線',
    romaji: 'shinkansen',
    meaning: '新干线',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '新幹線で東京に行きます。',
        chinese: '坐新干线去东京。'
      }
    ]
  },
  {
    id: 'transport-10',
    word: '駅',
    romaji: 'eki',
    meaning: '车站',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '駅で待ち合わせます。',
        chinese: '在车站见面。'
      }
    ]
  },
  {
    id: 'transport-11',
    word: '空港',
    romaji: 'kuukou',
    meaning: '机场',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '空港に着きました。',
        chinese: '到达机场了。'
      }
    ]
  },
  {
    id: 'transport-12',
    word: '港',
    romaji: 'minato',
    meaning: '港口',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '港から船が出ます。',
        chinese: '船从港口出发。'
      }
    ]
  },
  {
    id: 'transport-13',
    word: '運転手',
    romaji: 'untenshu',
    meaning: '司机',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '運転手が車を運転します。',
        chinese: '司机开车。'
      }
    ]
  },
  {
    id: 'transport-14',
    word: '切符',
    romaji: 'kippu',
    meaning: '车票',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '切符を買います。',
        chinese: '买车票。'
      }
    ]
  },
  // 工作学习
  {
    id: 'work-1',
    word: '仕事',
    romaji: 'shigoto',
    meaning: '工作',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '仕事が忙しいです。',
        chinese: '工作很忙。'
      }
    ]
  },
  {
    id: 'work-2',
    word: '会社',
    romaji: 'kaisha',
    meaning: '公司',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '会社で働きます。',
        chinese: '在公司工作。'
      }
    ]
  },
  {
    id: 'work-3',
    word: '会議',
    romaji: 'kaigi',
    meaning: '会议',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '会議に参加します。',
        chinese: '参加会议。'
      }
    ]
  },
  {
    id: 'work-4',
    word: '報告',
    romaji: 'houkoku',
    meaning: '报告',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '報告書を書きます。',
        chinese: '写报告。'
      }
    ]
  },
  {
    id: 'work-5',
    word: '打ち合わせ',
    romaji: 'uchiawase',
    meaning: '商谈',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '打ち合わせをします。',
        chinese: '进行商谈。'
      }
    ]
  },
  {
    id: 'work-6',
    word: '残業',
    romaji: 'zangyou',
    meaning: '加班',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '残業があります。',
        chinese: '要加班。'
      }
    ]
  },
  {
    id: 'work-7',
    word: '休憩',
    romaji: 'kyuukei',
    meaning: '休息',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '休憩時間を取ります。',
        chinese: '休息一下。'
      }
    ]
  },
  {
    id: 'work-8',
    word: '給料',
    romaji: 'kyuuryou',
    meaning: '工资',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '給料が上がりました。',
        chinese: '工资涨了。'
      }
    ]
  },
  {
    id: 'work-9',
    word: '上司',
    romaji: 'joushi',
    meaning: '上司',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '上司に報告します。',
        chinese: '向上司报告。'
      }
    ]
  },
  {
    id: 'work-10',
    word: '部下',
    romaji: 'buka',
    meaning: '部下',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '部下を指導します。',
        chinese: '指导部下。'
      }
    ]
  },
  {
    id: 'work-11',
    word: '同僚',
    romaji: 'douryou',
    meaning: '同事',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '同僚と協力します。',
        chinese: '与同事合作。'
      }
    ]
  },
  {
    id: 'work-12',
    word: '研修',
    romaji: 'kenshuu',
    meaning: '培训',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '研修を受けます。',
        chinese: '参加培训。'
      }
    ]
  },
  {
    id: 'work-13',
    word: '面接',
    romaji: 'mensetsu',
    meaning: '面试',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '面接を受けます。',
        chinese: '参加面试。'
      }
    ]
  },
  {
    id: 'work-14',
    word: '転職',
    romaji: 'tenshoku',
    meaning: '跳槽',
    status: '未学习',
    category: 'work',
    examples: [
      {
        japanese: '転職を考えています。',
        chinese: '考虑跳槽。'
      }
    ]
  },
  // 情感表达
  {
    id: 'emotion-1',
    word: '嬉しい',
    romaji: 'ureshii',
    meaning: '高兴',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: 'とても嬉しいです。',
        chinese: '非常高兴。'
      }
    ]
  },
  {
    id: 'emotion-2',
    word: '悲しい',
    romaji: 'kanashii',
    meaning: '悲伤',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '悲しいニュースです。',
        chinese: '令人悲伤的消息。'
      }
    ]
  },
  {
    id: 'emotion-3',
    word: '怒る',
    romaji: 'okoru',
    meaning: '生气',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '怒らないでください。',
        chinese: '请不要生气。'
      }
    ]
  },
  {
    id: 'emotion-4',
    word: '怖い',
    romaji: 'kowai',
    meaning: '害怕',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '怖い映画です。',
        chinese: '这是一部恐怖电影。'
      }
    ]
  },
  {
    id: 'emotion-5',
    word: '寂しい',
    romaji: 'sabishii',
    meaning: '寂寞',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '寂しい気持ちです。',
        chinese: '感到寂寞。'
      }
    ]
  },
  {
    id: 'emotion-6',
    word: '楽しい',
    romaji: 'tanoshii',
    meaning: '快乐',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '楽しい時間を過ごしました。',
        chinese: '度过了快乐的时光。'
      }
    ]
  },
  {
    id: 'emotion-7',
    word: '疲れる',
    romaji: 'tsukareru',
    meaning: '疲惫',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: 'とても疲れました。',
        chinese: '非常疲惫。'
      }
    ]
  },
  {
    id: 'emotion-8',
    word: '安心',
    romaji: 'anshin',
    meaning: '安心',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '安心しました。',
        chinese: '放心了。'
      }
    ]
  },
  {
    id: 'emotion-9',
    word: '心配',
    romaji: 'shinpai',
    meaning: '担心',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '心配しないでください。',
        chinese: '请不要担心。'
      }
    ]
  },
  {
    id: 'emotion-10',
    word: '緊張',
    romaji: 'kinchou',
    meaning: '紧张',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '緊張しています。',
        chinese: '很紧张。'
      }
    ]
  },
  {
    id: 'emotion-11',
    word: '感動',
    romaji: 'kandou',
    meaning: '感动',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: 'とても感動しました。',
        chinese: '非常感动。'
      }
    ]
  },
  {
    id: 'emotion-12',
    word: '恥ずかしい',
    romaji: 'hazukashii',
    meaning: '害羞',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '恥ずかしいです。',
        chinese: '很害羞。'
      }
    ]
  },
  {
    id: 'emotion-13',
    word: '羨ましい',
    romaji: 'urayamashii',
    meaning: '羡慕',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '羨ましいです。',
        chinese: '很羡慕。'
      }
    ]
  },
  {
    id: 'emotion-14',
    word: '後悔',
    romaji: 'koukai',
    meaning: '后悔',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '後悔しています。',
        chinese: '很后悔。'
      }
    ]
  },
  // 身体部位
  {
    id: 'body-1',
    word: '頭',
    romaji: 'atama',
    meaning: '头',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '頭が痛いです。',
        chinese: '头痛。'
      }
    ]
  },
  {
    id: 'body-2',
    word: '顔',
    romaji: 'kao',
    meaning: '脸',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '顔を洗います。',
        chinese: '洗脸。'
      }
    ]
  },
  {
    id: 'body-3',
    word: '目',
    romaji: 'me',
    meaning: '眼睛',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '目が疲れています。',
        chinese: '眼睛疲劳。'
      }
    ]
  },
  {
    id: 'body-4',
    word: '耳',
    romaji: 'mimi',
    meaning: '耳朵',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '耳が聞こえません。',
        chinese: '听不见。'
      }
    ]
  },
  {
    id: 'body-5',
    word: '鼻',
    romaji: 'hana',
    meaning: '鼻子',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '鼻が詰まっています。',
        chinese: '鼻子不通。'
      }
    ]
  },
  {
    id: 'body-6',
    word: '口',
    romaji: 'kuchi',
    meaning: '嘴',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '口を開けてください。',
        chinese: '请张开嘴。'
      }
    ]
  },
  {
    id: 'body-7',
    word: '手',
    romaji: 'te',
    meaning: '手',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '手を洗います。',
        chinese: '洗手。'
      }
    ]
  },
  {
    id: 'body-8',
    word: '足',
    romaji: 'ashi',
    meaning: '脚',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '足が痛いです。',
        chinese: '脚痛。'
      }
    ]
  },
  {
    id: 'body-9',
    word: '肩',
    romaji: 'kata',
    meaning: '肩膀',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '肩が凝っています。',
        chinese: '肩膀酸痛。'
      }
    ]
  },
  {
    id: 'body-10',
    word: '背中',
    romaji: 'senaka',
    meaning: '背部',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '背中が痛いです。',
        chinese: '背痛。'
      }
    ]
  },
  {
    id: 'body-11',
    word: '胸',
    romaji: 'mune',
    meaning: '胸部',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '胸が痛いです。',
        chinese: '胸痛。'
      }
    ]
  },
  {
    id: 'body-12',
    word: 'お腹',
    romaji: 'onaka',
    meaning: '肚子',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: 'お腹が空きました。',
        chinese: '肚子饿了。'
      }
    ]
  },
  {
    id: 'body-13',
    word: '腰',
    romaji: 'koshi',
    meaning: '腰',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '腰が痛いです。',
        chinese: '腰痛。'
      }
    ]
  },
  {
    id: 'body-14',
    word: '首',
    romaji: 'kubi',
    meaning: '脖子',
    status: '未学习',
    category: 'body',
    examples: [
      {
        japanese: '首が痛いです。',
        chinese: '脖子痛。'
      }
    ]
  },
  // 家庭成员
  {
    id: 'family-1',
    word: '家族',
    romaji: 'kazoku',
    meaning: '家人',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '家族と一緒に住んでいます。',
        chinese: '和家人一起住。'
      }
    ]
  },
  {
    id: 'family-2',
    word: '父',
    romaji: 'chichi',
    meaning: '父亲',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '父は会社員です。',
        chinese: '父亲是公司职员。'
      }
    ]
  },
  {
    id: 'family-3',
    word: '母',
    romaji: 'haha',
    meaning: '母亲',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '母は料理が上手です。',
        chinese: '母亲很会做饭。'
      }
    ]
  },
  {
    id: 'family-4',
    word: '兄',
    romaji: 'ani',
    meaning: '哥哥',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '兄は大学生です。',
        chinese: '哥哥是大学生。'
      }
    ]
  },
  {
    id: 'family-5',
    word: '姉',
    romaji: 'ane',
    meaning: '姐姐',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '姉は看護師です。',
        chinese: '姐姐是护士。'
      }
    ]
  },
  {
    id: 'family-6',
    word: '弟',
    romaji: 'otouto',
    meaning: '弟弟',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '弟は高校生です。',
        chinese: '弟弟是高中生。'
      }
    ]
  },
  {
    id: 'family-7',
    word: '妹',
    romaji: 'imouto',
    meaning: '妹妹',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '妹は中学生です。',
        chinese: '妹妹是初中生。'
      }
    ]
  },
  {
    id: 'family-9',
    word: '祖母',
    romaji: 'sobo',
    meaning: '祖母',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '祖母は料理が好きです。',
        chinese: '祖母喜欢做饭。'
      }
    ]
  },
  {
    id: 'family-10',
    word: '叔父',
    romaji: 'oji',
    meaning: '叔叔',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '叔父は医者です。',
        chinese: '叔叔是医生。'
      }
    ]
  },
  {
    id: 'family-11',
    word: '叔母',
    romaji: 'oba',
    meaning: '阿姨',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '叔母は先生です。',
        chinese: '阿姨是老师。'
      }
    ]
  },
  {
    id: 'family-12',
    word: '従兄弟',
    romaji: 'itoko',
    meaning: '堂兄弟',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '従兄弟と遊びます。',
        chinese: '和堂兄弟一起玩。'
      }
    ]
  },
  {
    id: 'family-13',
    word: '義理の父',
    romaji: 'giri no chichi',
    meaning: '岳父',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '義理の父に会います。',
        chinese: '见岳父。'
      }
    ]
  },
  {
    id: 'family-14',
    word: '義理の母',
    romaji: 'giri no haha',
    meaning: '岳母',
    status: '未学习',
    category: 'family',
    examples: [
      {
        japanese: '義理の母と話します。',
        chinese: '和岳母说话。'
      }
    ]
  },
  // 数字和计量
  {
    id: 'number-1',
    word: '一',
    romaji: 'ichi',
    meaning: '一',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '一つあります。',
        chinese: '有一个。'
      }
    ]
  },
  {
    id: 'number-2',
    word: '二',
    romaji: 'ni',
    meaning: '二',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '二つあります。',
        chinese: '有两个。'
      }
    ]
  },
  {
    id: 'number-3',
    word: '三',
    romaji: 'san',
    meaning: '三',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '三つあります。',
        chinese: '有三个。'
      }
    ]
  },
  {
    id: 'number-4',
    word: '四',
    romaji: 'yon',
    meaning: '四',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '四つあります。',
        chinese: '有四个。'
      }
    ]
  },
  {
    id: 'number-5',
    word: '五',
    romaji: 'go',
    meaning: '五',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '五つあります。',
        chinese: '有五个。'
      }
    ]
  },
  {
    id: 'number-6',
    word: '六',
    romaji: 'roku',
    meaning: '六',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '六つあります。',
        chinese: '有六个。'
      }
    ]
  },
  {
    id: 'number-7',
    word: '七',
    romaji: 'nana',
    meaning: '七',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '七つあります。',
        chinese: '有七个。'
      }
    ]
  },
  {
    id: 'number-8',
    word: '八',
    romaji: 'hachi',
    meaning: '八',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '八つあります。',
        chinese: '有八个。'
      }
    ]
  },
  {
    id: 'number-9',
    word: '九',
    romaji: 'kyuu',
    meaning: '九',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '九つあります。',
        chinese: '有九个。'
      }
    ]
  },
  {
    id: 'number-10',
    word: '十',
    romaji: 'juu',
    meaning: '十',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '十個あります。',
        chinese: '有十个。'
      }
    ]
  },
  {
    id: 'number-11',
    word: '百',
    romaji: 'hyaku',
    meaning: '百',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '百円です。',
        chinese: '一百日元。'
      }
    ]
  },
  {
    id: 'number-12',
    word: '千',
    romaji: 'sen',
    meaning: '千',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '千円です。',
        chinese: '一千日元。'
      }
    ]
  },
  {
    id: 'number-13',
    word: '万',
    romaji: 'man',
    meaning: '万',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '一万円です。',
        chinese: '一万日元。'
      }
    ]
  },
  {
    id: 'number-14',
    word: '億',
    romaji: 'oku',
    meaning: '亿',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '一億円です。',
        chinese: '一亿日元。'
      }
    ]
  },
  {
    id: 'number-15',
    word: '兆',
    romaji: 'chou',
    meaning: '兆',
    status: '未学习',
    category: 'number',
    examples: [
      {
        japanese: '一兆円です。',
        chinese: '一兆日元。'
      }
    ]
  },
  // 方向
  {
    id: 'direction-1',
    word: '上',
    romaji: 'ue',
    meaning: '上',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '上を見ます。',
        chinese: '向上看。'
      }
    ]
  },
  {
    id: 'direction-2',
    word: '下',
    romaji: 'shita',
    meaning: '下',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '下を見ます。',
        chinese: '向下看。'
      }
    ]
  },
  {
    id: 'direction-3',
    word: '左',
    romaji: 'hidari',
    meaning: '左',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '左に曲がります。',
        chinese: '向左转。'
      },
      {
        japanese: '左に曲がってください。',
        chinese: '请向左转。'
      }
    ]
  },
  {
    id: 'direction-4',
    word: '右',
    romaji: 'migi',
    meaning: '右',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '右に曲がります。',
        chinese: '向右转。'
      },
      {
        japanese: '右に曲がってください。',
        chinese: '请向右转。'
      }
    ]
  },
  {
    id: 'direction-5',
    word: '前',
    romaji: 'mae',
    meaning: '前',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '前に進みます。',
        chinese: '向前进。'
      }
    ]
  },
  {
    id: 'direction-6',
    word: '後ろ',
    romaji: 'ushiro',
    meaning: '后',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '後ろを見ます。',
        chinese: '请往后看。'
      }
    ]
  },
  {
    id: 'direction-7',
    word: '中',
    romaji: 'naka',
    meaning: '中',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '中に入ります。',
        chinese: '请进去。'
      }
    ]
  },
  {
    id: 'direction-8',
    word: '外',
    romaji: 'soto',
    meaning: '外',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '外に出てください。',
        chinese: '请出去。'
      }
    ]
  },
  {
    id: 'direction-9',
    word: '東',
    romaji: 'higashi',
    meaning: '东',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '東に向かって進みます。',
        chinese: '向东前进。'
      }
    ]
  },
  {
    id: 'direction-10',
    word: '西',
    romaji: 'nishi',
    meaning: '西',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '西に向かって進みます。',
        chinese: '向西前进。'
      }
    ]
  },
  {
    id: 'direction-11',
    word: '南',
    romaji: 'minami',
    meaning: '南',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '南に向かって進みます。',
        chinese: '向南前进。'
      }
    ]
  },
  {
    id: 'direction-12',
    word: '北',
    romaji: 'kita',
    meaning: '北',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '北に向かって進みます。',
        chinese: '向北前进。'
      }
    ]
  },
  {
    id: 'direction-13',
    word: '近く',
    romaji: 'chikaku',
    meaning: '附近',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '近くにあります。',
        chinese: '在附近。'
      }
    ]
  },
  {
    id: 'direction-14',
    word: '遠く',
    romaji: 'tooku',
    meaning: '远处',
    status: '未学习',
    category: 'direction',
    examples: [
      {
        japanese: '遠くにあります。',
        chinese: '在远处。'
      }
    ]
  },
  // 时间
  {
    id: 'time-1',
    word: '今',
    romaji: 'ima',
    meaning: '现在',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '今何時ですか。',
        chinese: '现在几点了？'
      }
    ]
  },
  {
    id: 'time-2',
    word: '今日',
    romaji: 'kyou',
    meaning: '今天',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '今日は忙しいです。',
        chinese: '今天很忙。'
      }
    ]
  },
  {
    id: 'time-3',
    word: '明日',
    romaji: 'ashita',
    meaning: '明天',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '明日会いましょう。',
        chinese: '明天见吧。'
      }
    ]
  },
  {
    id: 'time-4',
    word: '昨日',
    romaji: 'kinou',
    meaning: '昨天',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '昨日は休みでした。',
        chinese: '昨天休息了。'
      }
    ]
  },
  {
    id: 'time-5',
    word: '朝',
    romaji: 'asa',
    meaning: '早上',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '朝早く起きます。',
        chinese: '早上早起。'
      }
    ]
  },
  {
    id: 'time-6',
    word: '昼',
    romaji: 'hiru',
    meaning: '中午',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '昼ご飯を食べます。',
        chinese: '吃午饭。'
      }
    ]
  },
  {
    id: 'time-7',
    word: '夜',
    romaji: 'yoru',
    meaning: '晚上',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '夜遅く寝ます。',
        chinese: '晚上晚睡。'
      }
    ]
  },
  {
    id: 'time-8',
    word: '今週',
    romaji: 'konshuu',
    meaning: '这周',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '今週は忙しいです。',
        chinese: '这周很忙。'
      }
    ]
  },
  {
    id: 'time-9',
    word: '来週',
    romaji: 'raishuu',
    meaning: '下周',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '来週会いましょう。',
        chinese: '下周见吧。'
      }
    ]
  },
  {
    id: 'time-10',
    word: '先週',
    romaji: 'senshuu',
    meaning: '上周',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '先週は休みでした。',
        chinese: '上周休息了。'
      }
    ]
  },
  {
    id: 'time-11',
    word: '今月',
    romaji: 'kongetsu',
    meaning: '这个月',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '今月は忙しいです。',
        chinese: '这个月很忙。'
      }
    ]
  },
  {
    id: 'time-12',
    word: '来月',
    romaji: 'raigetsu',
    meaning: '下个月',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '来月会いましょう。',
        chinese: '下个月见吧。'
      }
    ]
  },
  {
    id: 'time-13',
    word: '先月',
    romaji: 'sengetsu',
    meaning: '上个月',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '先月は休みでした。',
        chinese: '上个月休息了。'
      }
    ]
  },
  {
    id: 'time-14',
    word: '毎日',
    romaji: 'mainichi',
    meaning: '每天',
    status: '未学习',
    category: 'time',
    examples: [
      {
        japanese: '毎日勉強します。',
        chinese: '每天学习。'
      }
    ]
  },
  // 地点
  {
    id: 'place-1',
    word: '駅',
    romaji: 'eki',
    meaning: '车站',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '駅で電車を待ちます。',
        chinese: '在车站等电车。'
      }
    ]
  },
  {
    id: 'place-2',
    word: '空港',
    romaji: 'kuukou',
    meaning: '机场',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '空港で飛行機に乗ります。',
        chinese: '在机场乘坐飞机。'
      }
    ]
  },
  {
    id: 'place-3',
    word: '病院',
    romaji: 'byouin',
    meaning: '医院',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '病院で診察を受けます。',
        chinese: '在医院接受检查。'
      }
    ]
  },
  {
    id: 'place-4',
    word: '学校',
    romaji: 'gakkou',
    meaning: '学校',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '学校で勉強します。',
        chinese: '在学校学习。'
      }
    ]
  },
  {
    id: 'place-5',
    word: '図書館',
    romaji: 'toshokan',
    meaning: '图书馆',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '図書館で本を借ります。',
        chinese: '在图书馆借书。'
      }
    ]
  },
  {
    id: 'place-6',
    word: '公園',
    romaji: 'kouen',
    meaning: '公园',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '公園で散歩します。',
        chinese: '在公园散步。'
      }
    ]
  },
  {
    id: 'place-8',
    word: 'デパート',
    romaji: 'depaato',
    meaning: '百货商店',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: 'デパートで買い物をします。',
        chinese: '在百货商店购物。'
      }
    ]
  },
  {
    id: 'place-9',
    word: 'スーパー',
    romaji: 'suupaa',
    meaning: '超市',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: 'スーパーで食材を買います。',
        chinese: '在超市买食材。'
      }
    ]
  },
  {
    id: 'place-10',
    word: '銀行',
    romaji: 'ginkou',
    meaning: '银行',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '銀行でお金を預けます。',
        chinese: '在银行存钱。'
      }
    ]
  },
  {
    id: 'place-11',
    word: '郵便局',
    romaji: 'yuubinkyoku',
    meaning: '邮局',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '郵便局で手紙を出します。',
        chinese: '在邮局寄信。'
      }
    ]
  },
  {
    id: 'place-12',
    word: '美容院',
    romaji: 'biyouin',
    meaning: '美容院',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '美容院で髪を切ります。',
        chinese: '在美容院剪头发。'
      }
    ]
  },
  {
    id: 'place-13',
    word: 'レストラン',
    romaji: 'resutoran',
    meaning: '餐厅',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: 'レストランで食事をします。',
        chinese: '在餐厅吃饭。'
      }
    ]
  },
  {
    id: 'place-14',
    word: 'カフェ',
    romaji: 'kafe',
    meaning: '咖啡厅',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: 'カフェでコーヒーを飲みます。',
        chinese: '在咖啡厅喝咖啡。'
      }
    ]
  },
  // 衣物
  {
    id: 'clothes-1',
    word: 'シャツ',
    romaji: 'shatsu',
    meaning: '衬衫',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'シャツを着ます。',
        chinese: '穿衬衫。'
      }
    ]
  },
  {
    id: 'clothes-2',
    word: 'ズボン',
    romaji: 'zubon',
    meaning: '裤子',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'ズボンを履きます。',
        chinese: '穿裤子。'
      }
    ]
  },
  {
    id: 'clothes-3',
    word: 'スカート',
    romaji: 'sukaato',
    meaning: '裙子',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'スカートを履きます。',
        chinese: '穿裙子。'
      }
    ]
  },
  {
    id: 'clothes-4',
    word: '靴',
    romaji: 'kutsu',
    meaning: '鞋子',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: '靴を履きます。',
        chinese: '穿鞋子。'
      }
    ]
  },
  {
    id: 'clothes-5',
    word: '帽子',
    romaji: 'boushi',
    meaning: '帽子',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: '帽子をかぶります。',
        chinese: '戴帽子。'
      }
    ]
  },
  {
    id: 'clothes-6',
    word: 'コート',
    romaji: 'kooto',
    meaning: '大衣',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'コートを着ます。',
        chinese: '穿大衣。'
      }
    ]
  },
  {
    id: 'clothes-7',
    word: 'セーター',
    romaji: 'seetaa',
    meaning: '毛衣',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'セーターを着ます。',
        chinese: '穿毛衣。'
      }
    ]
  },
  {
    id: 'clothes-8',
    word: 'ネクタイ',
    romaji: 'nekutai',
    meaning: '领带',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'ネクタイを締めます。',
        chinese: '打领带。'
      }
    ]
  },
  {
    id: 'clothes-9',
    word: '靴下',
    romaji: 'kutsushita',
    meaning: '袜子',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: '靴下を履きます。',
        chinese: '穿袜子。'
      }
    ]
  },
  {
    id: 'clothes-10',
    word: '手袋',
    romaji: 'tebukuro',
    meaning: '手套',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: '手袋をします。',
        chinese: '戴手套。'
      }
    ]
  },
  // 职场
  {
    id: 'workplace-1',
    word: '会議',
    romaji: 'kaigi',
    meaning: '会议',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '会議に参加します。',
        chinese: '参加会议。'
      }
    ]
  },
  {
    id: 'workplace-2',
    word: '報告',
    romaji: 'houkoku',
    meaning: '报告',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '報告書を提出します。',
        chinese: '提交报告。'
      }
    ]
  },
  {
    id: 'workplace-3',
    word: '打ち合わせ',
    romaji: 'uchiawase',
    meaning: '商谈',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '打ち合わせを行います。',
        chinese: '进行商谈。'
      }
    ]
  },
  {
    id: 'workplace-4',
    word: '残業',
    romaji: 'zangyou',
    meaning: '加班',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '残業をします。',
        chinese: '加班。'
      }
    ]
  },
  {
    id: 'workplace-5',
    word: '休憩',
    romaji: 'kyuukei',
    meaning: '休息',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '休憩時間を取ります。',
        chinese: '休息一下。'
      }
    ]
  },
  // 日常生活相关词汇
  {
    id: 'life-1',
    word: '洗濯',
    romaji: 'sentaku',
    meaning: '洗衣服',
    status: '未学习',
    category: 'life',
    examples: [
      {
        japanese: '洗濯機で洗濯をします。',
        chinese: '用洗衣机洗衣服。'
      }
    ]
  },
  {
    id: 'life-2',
    word: '掃除',
    romaji: 'souji',
    meaning: '打扫',
    status: '未学习',
    category: 'life',
    examples: [
      {
        japanese: '部屋を掃除します。',
        chinese: '打扫房间。'
      }
    ]
  },
  {
    id: 'life-3',
    word: '料理',
    romaji: 'ryouri',
    meaning: '烹饪',
    status: '未学习',
    category: 'life',
    examples: [
      {
        japanese: '夕食の料理を作ります。',
        chinese: '做晚饭。'
      }
    ]
  },
  {
    id: 'life-4',
    word: '買い物',
    romaji: 'kaimono',
    meaning: '购物',
    status: '未学习',
    category: 'life',
    examples: [
      {
        japanese: 'スーパーで買い物をします。',
        chinese: '在超市购物。'
      }
    ]
  },
  {
    id: 'life-5',
    word: '散歩',
    romaji: 'sanpo',
    meaning: '散步',
    status: '未学习',
    category: 'life',
    examples: [
      {
        japanese: '公園で散歩します。',
        chinese: '在公园散步。'
      }
    ]
  },
  // 情感和感受 (续)
  {
    id: 'emotion-25',
    word: '悲しむ',
    romaji: 'kanashimu',
    meaning: '感到悲伤',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '友達が病気で悲しんでいます。',
        chinese: '朋友生病了，我很悲伤。'
      }
    ]
  },
  {
    id: 'emotion-26',
    word: '喜ぶ',
    romaji: 'yorokobu',
    meaning: '感到高兴',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: 'プレゼントをもらって喜びました。',
        chinese: '收到礼物很高兴。'
      }
    ]
  },
  {
    id: 'emotion-27',
    word: '怒る',
    romaji: 'ikaru',
    meaning: '生气',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '嘘をつかれて怒っています。',
        chinese: '被骗了，很生气。'
      }
    ]
  },
  {
    id: 'emotion-28',
    word: '恐れる',
    romaji: 'osoreru',
    meaning: '害怕',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '暗闇を恐れます。',
        chinese: '害怕黑暗。'
      }
    ]
  },
  {
    id: 'emotion-29',
    word: '楽しむ',
    romaji: 'tanoshimu',
    meaning: '享受',
    status: '未学习',
    category: 'emotion',
    examples: [
      {
        japanese: '旅行を楽しみます。',
        chinese: '享受旅行。'
      }
    ]
  },
  // 地点和场所 (续)
  {
    id: 'place-25',
    word: '美術館',
    romaji: 'bijutsukan',
    meaning: '美术馆',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '美術館で絵を見ます。',
        chinese: '在美术馆看画。'
      }
    ]
  },
  {
    id: 'place-26',
    word: '博物館',
    romaji: 'hakubutsukan',
    meaning: '博物馆',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '博物館で歴史を学びます。',
        chinese: '在博物馆学习历史。'
      }
    ]
  },
  {
    id: 'place-27',
    word: '映画館',
    romaji: 'eigakan',
    meaning: '电影院',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '映画館で映画を見ます。',
        chinese: '在电影院看电影。'
      }
    ]
  },
  {
    id: 'place-28',
    word: '劇場',
    romaji: 'gekijou',
    meaning: '剧场',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '劇場で演劇を見ます。',
        chinese: '在剧场看话剧。'
      }
    ]
  },
  {
    id: 'place-29',
    word: '体育館',
    romaji: 'taiikukan',
    meaning: '体育馆',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '体育館で運動します。',
        chinese: '在体育馆运动。'
      }
    ]
  },
  {
    id: 'place-30',
    word: 'プール',
    romaji: 'puuru',
    meaning: '游泳池',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: 'プールで泳ぎます。',
        chinese: '在游泳池游泳。'
      }
    ]
  },
  {
    id: 'place-31',
    word: '遊園地',
    romaji: 'yuuenchi',
    meaning: '游乐园',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '遊園地で遊びます。',
        chinese: '在游乐园玩。'
      }
    ]
  },
  {
    id: 'place-32',
    word: '動物園',
    romaji: 'doubutsuen',
    meaning: '动物园',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '動物園で動物を見ます。',
        chinese: '在动物园看动物。'
      }
    ]
  },
  {
    id: 'place-33',
    word: '植物園',
    romaji: 'shokubutsuen',
    meaning: '植物园',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '植物園で植物を見ます。',
        chinese: '在植物园看植物。'
      }
    ]
  },
  {
    id: 'place-34',
    word: '水族館',
    romaji: 'suizokukan',
    meaning: '水族馆',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '水族館で魚を見ます。',
        chinese: '在水族馆看鱼。'
      }
    ]
  },
  // 交通和旅行 (续)
  {
    id: 'transport-15',
    word: '船',
    romaji: 'fune',
    meaning: '船',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '船に乗ります。',
        chinese: '乘船。'
      }
    ]
  },
  {
    id: 'transport-16',
    word: '港',
    romaji: 'minato',
    meaning: '港口',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '港で船を見ます。',
        chinese: '在港口看船。'
      }
    ]
  },
  {
    id: 'transport-17',
    word: '切符売り場',
    romaji: 'kippu uriba',
    meaning: '售票处',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '切符売り場で切符を買います。',
        chinese: '在售票处买票。'
      }
    ]
  },
  {
    id: 'transport-18',
    word: '改札口',
    romaji: 'kaisatsuguchi',
    meaning: '检票口',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: '改札口を通ります。',
        chinese: '通过检票口。'
      }
    ]
  },
  {
    id: 'transport-19',
    word: 'ホーム',
    romaji: 'hoomu',
    meaning: '站台',
    status: '未学习',
    category: 'place',
    examples: [
      {
        japanese: 'ホームで電車を待ちます。',
        chinese: '在站台等电车。'
      }
    ]
  },
  {
    id: 'transport-20',
    word: '時刻表',
    romaji: 'jikokuhyou',
    meaning: '时刻表',
    status: '未学习',
    category: 'transport',
    examples: [
      {
        japanese: '時刻表を確認します。',
        chinese: '确认时刻表。'
      }
    ]
  },
  // 教育 (续)
  {
    id: 'education-41',
    word: '試験官',
    romaji: 'shikenkan',
    meaning: '监考老师',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '試験官が試験の説明をします。',
        chinese: '监考老师说明考试事项。'
      }
    ]
  },
  {
    id: 'education-42',
    word: '答案',
    romaji: 'touan',
    meaning: '答卷',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '答案を提出します。',
        chinese: '提交答卷。'
      }
    ]
  },
  {
    id: 'education-43',
    word: '採点',
    romaji: 'saiten',
    meaning: '评分',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '試験の採点を行います。',
        chinese: '进行考试评分。'
      }
    ]
  },
  {
    id: 'education-44',
    word: '成績',
    romaji: 'seiseki',
    meaning: '成绩',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '成績が良いです。',
        chinese: '成绩很好。'
      }
    ]
  },
  {
    id: 'education-45',
    word: '単位',
    romaji: 'tani',
    meaning: '学分',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '必要な単位を取得します。',
        chinese: '取得所需学分。'
      }
    ]
  },
  {
    id: 'education-46',
    word: '留学',
    romaji: 'ryuugaku',
    meaning: '留学',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '日本に留学します。',
        chinese: '去日本留学。'
      }
    ]
  },
  {
    id: 'education-47',
    word: '奨学金',
    romaji: 'shougakukin',
    meaning: '奖学金',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '奨学金をもらいました。',
        chinese: '拿到了奖学金。'
      }
    ]
  },
  {
    id: 'education-48',
    word: '卒業論文',
    romaji: 'sotsugyou ronbun',
    meaning: '毕业论文',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '卒業論文を書きます。',
        chinese: '写毕业论文。'
      }
    ]
  },
  {
    id: 'education-49',
    word: '入学式',
    romaji: 'nyuugakushiki',
    meaning: '开学典礼',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '入学式に参加します。',
        chinese: '参加开学典礼。'
      }
    ]
  },
  {
    id: 'education-50',
    word: '卒業式',
    romaji: 'sotsugyoushiki',
    meaning: '毕业典礼',
    status: '未学习',
    category: 'education',
    examples: [
      {
        japanese: '卒業式で卒業証書をもらいました。',
        chinese: '在毕业典礼上拿到了毕业证书。'
      }
    ]
  },
  // 节日 (续)
  {
    id: 'festival-4',
    word: 'クリスマス',
    romaji: 'kurisumasu',
    meaning: '圣诞节',
    status: '未学习',
    category: 'festival',
    examples: [
      {
        japanese: 'クリスマスにプレゼントを交換します。',
        chinese: '圣诞节交换礼物。'
      }
    ]
  },
  {
    id: 'festival-5',
    word: 'ハロウィン',
    romaji: 'harowin',
    meaning: '万圣节',
    status: '未学习',
    category: 'festival',
    examples: [
      {
        japanese: 'ハロウィンに仮装します。',
        chinese: '万圣节化妆。'
      }
    ]
  },
  {
    id: 'festival-6',
    word: '誕生日',
    romaji: 'tanjoubi',
    meaning: '生日',
    status: '未学习',
    category: 'festival',
    examples: [
      {
        japanese: '誕生日にケーキを食べます。',
        chinese: '生日吃蛋糕。'
      }
    ]
  },
  {
    id: 'festival-7',
    word: '記念日',
    romaji: 'kinenbi',
    meaning: '纪念日',
    status: '未学习',
    category: 'festival',
    examples: [
      {
        japanese: '結婚記念日を祝います。',
        chinese: '庆祝结婚纪念日。'
      }
    ]
  },
  // 兴趣 (续)
  {
    id: 'hobby-6',
    word: '旅行',
    romaji: 'ryokou',
    meaning: '旅行',
    status: '未学习',
    category: 'hobby',
    examples: [
      {
        japanese: '旅行に行くのが好きです。',
        chinese: '喜欢去旅行。'
      }
    ]
  },
  {
    id: 'hobby-7',
    word: 'スポーツ',
    romaji: 'supootsu',
    meaning: '运动',
    status: '未学习',
    category: 'hobby',
    examples: [
      {
        japanese: '毎日スポーツをします。',
        chinese: '每天做运动。'
      }
    ]
  },
  {
    id: 'hobby-8',
    word: '料理',
    romaji: 'ryouri',
    meaning: '烹饪',
    status: '未学习',
    category: 'hobby',
    examples: [
      {
        japanese: '料理を作るのが好きです。',
        chinese: '喜欢做饭。'
      }
    ]
  },
  {
    id: 'hobby-9',
    word: '絵を描く',
    romaji: 'e o kaku',
    meaning: '画画',
    status: '未学习',
    category: 'hobby',
    examples: [
      {
        japanese: '絵を描くのが得意です。',
        chinese: '擅长画画。'
      }
    ]
  },
  {
    id: 'hobby-10',
    word: '歌を歌う',
    romaji: 'uta o utau',
    meaning: '唱歌',
    status: '未学习',
    category: 'hobby',
    examples: [
      {
        japanese: 'カラオケで歌を歌います。',
        chinese: '在卡拉OK唱歌。'
      }
    ]
  },
  // 新增颜色词汇
  {
    id: 'color-11',
    word: '赤',
    romaji: 'aka',
    meaning: '红色',
    status: '未学习',
    category: 'color',
    examples: [
      {
        japanese: '赤いリンゴです。',
        chinese: '是红色的苹果。',
      }
    ]
  },
  {
    id: 'color-12',
    word: '青',
    romaji: 'ao',
    meaning: '蓝色',
    status: '未学习',
    category: 'color',
    examples: [
      {
        japanese: '青い空です。',
        chinese: '是蓝色的天空。',
      }
    ]
  },
  {
    id: 'color-13',
    word: '黄色',
    romaji: 'kiiro',
    meaning: '黄色',
    status: '未学习',
    category: 'color',
    examples: [
      {
        japanese: '黄色いバナナです。',
        chinese: '是黄色的香蕉。',
      }
    ]
  },
  {
    id: 'color-14',
    word: '緑',
    romaji: 'midori',
    meaning: '绿色',
    status: '未学习',
    category: 'color',
    examples: [
      {
        japanese: '緑の葉っぱです。',
        chinese: '是绿色的叶子。',
      }
    ]
  },
  {
    id: 'color-15',
    word: '黒',
    romaji: 'kuro',
    meaning: '黑色',
    status: '未学习',
    category: 'color',
    examples: [
      {
        japanese: '黒い猫です。',
        chinese: '是黑色的猫。',
      }
    ]
  },
  {
    id: 'color-16',
    word: '白',
    romaji: 'shiro',
    meaning: '白色',
    status: '未学习',
    category: 'color',
    examples: [
      {
        japanese: '白い紙です。',
        chinese: '是白色的纸。',
      }
    ]
  },
  // 新增形状词汇
  {
    id: 'shape-11',
    word: '丸い',
    romaji: 'marui',
    meaning: '圆形的',
    status: '未学习',
    category: 'shape',
    examples: [
      {
        japanese: '丸いお皿です。',
        chinese: '是圆形的盘子。',
      }
    ]
  },
  {
    id: 'shape-12',
    word: '四角い',
    romaji: 'shikakui',
    meaning: '四角形的',
    status: '未学习',
    category: 'shape',
    examples: [
      {
        japanese: '四角い箱です。',
        chinese: '是四角形的箱子。',
      }
    ]
  },
  {
    id: 'shape-13',
    word: '三角形',
    romaji: 'sankakkei',
    meaning: '三角形',
    status: '未学习',
    category: 'shape',
    examples: [
      {
        japanese: '三角形の定規です。',
        chinese: '是三角形的尺子。',
      }
    ]
  },
  // 新增衣物词汇
  {
    id: 'clothes-11',
    word: 'Tシャツ',
    romaji: 'tii shatsu',
    meaning: 'T恤',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: '新しいTシャツを買いました。',
        chinese: '买了新T恤。',
      }
    ]
  },
  {
    id: 'clothes-12',
    word: 'ジーパン',
    romaji: 'jiipan',
    meaning: '牛仔裤',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'ジーパンを履きます。',
        chinese: '穿牛仔裤。',
      }
    ]
  },
  {
    id: 'clothes-13',
    word: 'ワンピース',
    romaji: 'wanpiisu',
    meaning: '连衣裙',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: '可愛いワンピースです。',
        chinese: '是可爱的连衣裙。',
      }
    ]
  },
  {
    id: 'clothes-14',
    word: 'ジャケット',
    romaji: 'jaketto',
    meaning: '夹克',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: '暖かいジャケットを着ます。',
        chinese: '穿暖和的夹克。',
      }
    ]
  },
  {
    id: 'clothes-15',
    word: 'マフラー',
    romaji: 'mafuraa',
    meaning: '围巾',
    status: '未学习',
    category: 'clothes',
    examples: [
      {
        japanese: 'マフラーを巻きます。',
        chinese: '围围巾。',
      }
    ]
  },
  // 新增职场词汇
  {
    id: 'workplace-6',
    word: '部署',
    romaji: 'busho',
    meaning: '部门',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '営業部署に配属されました。',
        chinese: '被分配到销售部门了。',
      }
    ]
  },
  {
    id: 'workplace-7',
    word: '上司',
    romaji: 'joushi',
    meaning: '上司',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '上司に相談します。',
        chinese: '和上司商量。',
      }
    ]
  },
  {
    id: 'workplace-8',
    word: '部下',
    romaji: 'buka',
    meaning: '下属',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '部下を指導します。',
        chinese: '指导下属。',
      }
    ]
  },
  {
    id: 'workplace-9',
    word: '同僚',
    romaji: 'douryou',
    meaning: '同事',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '同僚と協力します。',
        chinese: '和同事合作。',
      }
    ]
  },
  {
    id: 'workplace-10',
    word: '顧客',
    romaji: 'kokyaku',
    meaning: '客户',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '顧客と打ち合わせます。',
        chinese: '和客户会面。',
      }
    ]
  },
  {
    id: 'workplace-11',
    word: '取引先',
    romaji: 'torihikisaki',
    meaning: '客户/贸易伙伴',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '取引先と契約を結びます。',
        chinese: '和客户签订合同。',
      }
    ]
  },
  {
    id: 'workplace-12',
    word: '会議室',
    romaji: 'kaigishitsu',
    meaning: '会议室',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '会議室を予約します。',
        chinese: '预定会议室。',
      }
    ]
  },
  {
    id: 'workplace-13',
    word: '資料',
    romaji: 'shiryou',
    meaning: '资料',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '資料を準備します。',
        chinese: '准备资料。',
      }
    ]
  },
  {
    id: 'workplace-14',
    word: '報告書',
    romaji: 'houkokusho',
    meaning: '报告书',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '報告書を提出します。',
        chinese: '提交报告书。',
      }
    ]
  },
  {
    id: 'workplace-15',
    word: '提出',
    romaji: 'teishutsu',
    meaning: '提交',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '書類を提出します。',
        chinese: '提交文件。',
      }
    ]
  },
  {
    id: 'workplace-16',
    word: '承認',
    romaji: 'shounin',
    meaning: '批准',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '申請が承認されました。',
        chinese: '申请被批准了。',
      }
    ]
  },
  {
    id: 'workplace-17',
    word: '企画',
    romaji: 'kikaku',
    meaning: '企划',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '新しい企画を立てます。',
        chinese: '制定新的企划。',
      }
    ]
  },
  {
    id: 'workplace-18',
    word: '開発',
    romaji: 'kaihatsu',
    meaning: '开发',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '新製品を開発します。',
        chinese: '开发新产品。',
      }
    ]
  },
  {
    id: 'workplace-19',
    word: '目標',
    romaji: 'mokuhyou',
    meaning: '目标',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '目標を達成します。',
        chinese: '达成目标。',
      }
    ]
  },
  {
    id: 'workplace-20',
    word: '評価',
    romaji: 'hyouka',
    meaning: '评价',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '業績を評価します。',
        chinese: '评价业绩。',
      }
    ]
  },
  {
    id: 'workplace-23',
    word: '転勤',
    romaji: 'tenkin',
    meaning: '调职',
    status: '未学习',
    category: 'workplace',
    examples: [
      {
        japanese: '転勤になりました。',
        chinese: '被调职了。',
      },
    ],
  }, // Add comma here before inserting new items
  // 新增更多词汇
  // 节日 (续)
  {
    id: 'festival-10',
    word: '七夕',
    romaji: 'tanabata',
    meaning: '七夕',
    status: '未学习',
    category: 'festival',
    examples: [ { japanese: '七夕に願い事をします。', chinese: '七夕许愿。' }, ],
  },
  {
    id: 'festival-11',
    word: '中秋節',
    romaji: 'chuushuu setsu',
    meaning: '中秋节',
    status: '未学习',
    category: 'festival',
    examples: [ { japanese: '中秋節に月を見ます。', chinese: '中秋节赏月。' }, ],
  },
  // 兴趣 (续)
  {
    id: 'hobby-13',
    word: '音楽鑑賞',
    romaji: 'ongaku kanshou',
    meaning: '听音乐',
    status: '未学习', 
    category: 'hobby',
    examples: [ { japanese: '音楽鑑賞が趣味です。', chinese: '爱好是听音乐。' }, ],
  },
  {
    id: 'hobby-14',
    word: '写真撮影',
    romaji: 'shashin satsuei',
    meaning: '摄影',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '写真撮影が好きです。', chinese: '喜欢摄影。' }, ],
  },
  // 日常生活 (续)
  {
    id: 'life-8',
    word: '風呂',
    romaji: 'furo',
    meaning: '洗澡',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '夜に風呂に入ります。', chinese: '晚上洗澡。' }, ],
  },
  {
    id: 'life-9',
    word: '歯磨き',
    romaji: 'hamigaki',
    meaning: '刷牙',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '朝と夜に歯磨きをします。', chinese: '早晚刷牙。' }, ],
  },
  {
    id: 'life-10',
    word: '睡眠',
    romaji: 'suimin',
    meaning: '睡眠',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '十分な睡眠が必要です。', chinese: '需要充足的睡眠。' }, ],
  },
  // 职场 (续)
  {
    id: 'workplace-24',
    word: '面接',
    romaji: 'mensetsu',
    meaning: '面试',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '明日は面接があります。', chinese: '明天有面试。' }, ],
  },
  {
    id: 'workplace-25',
    word: '履歴書',
    romaji: 'rirekisho',
    meaning: '履历书',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '履歴書を作成します。', chinese: '制作履历书。' }, ],
  },
  {
    id: 'workplace-26',
    word: '給料',
    romaji: 'kyuuryou',
    meaning: '工资',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '給料日です。', chinese: '发工资的日子。', }, ],
  },
  {
    id: 'workplace-27',
    word: 'ボーナス',
    romaji: 'boonasu',
    meaning: '奖金',
    status: '未学习',
    category: 'workplace',
        examples: [ { japanese: 'ボーナスをもらいました。', chinese: '拿到奖金了。' }, ],
  },
  {
    id: 'workplace-28',
    word: '部署異動',
    romaji: 'busho idou',
    meaning: '部门调动',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '部署異動がありました。', chinese: '部门调动了。' }, ],
  },
  {
    id: 'workplace-29',
    word: '昇進',
    romaji: 'shoushin',
    meaning: '升职',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '昇進しました。', chinese: '升职了。' }, ],
  },
  {
    id: 'workplace-30',
    word: '退職',
    romaji: 'taishoku',
    meaning: '退休',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '会社を退職しました。', chinese: '从公司退休了。' }, ],
  },
  {
    id: 'workplace-31',
    word: '会議',
    romaji: 'kaigi',
    meaning: '会议',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '会議を始めます。', chinese: '开始会议。' }, ],
  },
  {
    id: 'workplace-32',
    word: 'プレゼン',
    romaji: 'purezen',
    meaning: '演讲',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: 'プレゼンの準備をします。', chinese: '准备演讲。' }, ],
  },
  {
    id: 'workplace-33',
    word: '残業',
    romaji: 'zangyou',
    meaning: '加班',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '今日は残業があります。', chinese: '今天要加班。' }, ],
  },
  {
    id: 'life-13',
    word: '掃除',
    romaji: 'souji',
    meaning: '打扫',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '部屋を掃除します。', chinese: '打扫房间。' }, ],
  },
  {
    id: 'life-14',
    word: '洗濯',
    romaji: 'sentaku',
    meaning: '洗衣服',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '洗濯物を干します。', chinese: '晾衣服。' }, ],
  },
  {
    id: 'life-15',
    word: '料理',
    romaji: 'ryouri',
    meaning: '烹饪',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '料理を作ります。', chinese: '做饭。' }, ],
  },
  {
    id: 'hobby-17',
    word: '読書',
    romaji: 'dokusho',
    meaning: '读书',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '読書が趣味です。', chinese: '爱好是读书。' }, ],
  },
  {
    id: 'hobby-18',
    word: '旅行',
    romaji: 'ryokou',
    meaning: '旅行',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '旅行に行きます。', chinese: '去旅行。' }, ],
  },
  {
    id: 'food-31',
    word: 'お好み焼き',
    romaji: 'okonomiyaki',
    meaning: '大阪烧',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'お好み焼きを食べます。', chinese: '吃大阪烧。' }, ],
  },
  {
    id: 'food-32',
    word: 'たこ焼き',
    romaji: 'takoyaki',
    meaning: '章鱼烧',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'たこ焼きが好きです。', chinese: '喜欢章鱼烧。' }, ],
  },
  {
    id: 'transport-21',
    word: '新幹線',
    romaji: 'shinkansen',
    meaning: '新干线',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '新幹線で東京へ行きます。', chinese: '坐新干线去东京。' }, ],
  },
  {
    id: 'transport-22',
    word: 'タクシー',
    romaji: 'takushii',
    meaning: '出租车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'タクシーを呼びます。', chinese: '叫出租车。' }, ],
  },
  {
    id: 'emotion-21',
    word: '嬉しい',
    romaji: 'ureshii',
    meaning: '高兴',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: 'とても嬉しいです。', chinese: '非常高兴。' }, ],
  },
  {
    id: 'emotion-22',
    word: '悲しい',
    romaji: 'kanashii',
    meaning: '悲伤',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '悲しい気持ちです。', chinese: '感到悲伤。' }, ],
  },
  {
    id: 'workplace-34',
    word: '研修',
    romaji: 'kenshuu',
    meaning: '培训',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '新入社員の研修があります。', chinese: '有新员工培训。' }, ],
  },
  {
    id: 'workplace-35',
    word: '評価',
    romaji: 'hyouka',
    meaning: '评价',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '期末評価を提出します。', chinese: '提交期末评价。' }, ],
  },
  {
    id: 'life-16',
    word: '買い物',
    romaji: 'kaimono',
    meaning: '购物',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'スーパーで買い物をします。', chinese: '在超市购物。' }, ],
  },
  {
    id: 'life-17',
    word: '掃除機',
    romaji: 'soujiki',
    meaning: '吸尘器',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '掃除機をかけます。', chinese: '用吸尘器打扫。' }, ],
  },
  {
    id: 'life-18',
    word: '洗濯機',
    romaji: 'sentakuki',
    meaning: '洗衣机',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '洗濯機で洗濯します。', chinese: '用洗衣机洗衣服。' }, ],
  },
  {
    id: 'hobby-19',
    word: '映画',
    romaji: 'eiga',
    meaning: '电影',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '映画を見に行きます。', chinese: '去看电影。' }, ],
  },
  {
    id: 'hobby-20',
    word: '音楽',
    romaji: 'ongaku',
    meaning: '音乐',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '音楽を聴きます。', chinese: '听音乐。' }, ],
  },
  {
    id: 'food-33',
    word: 'ラーメン',
    romaji: 'raamen',
    meaning: '拉面',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'ラーメンを食べます。', chinese: '吃拉面。' }, ],
  },
  {
    id: 'food-34',
    word: 'うどん',
    romaji: 'udon',
    meaning: '乌冬面',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'うどんが好きです。', chinese: '喜欢乌冬面。' }, ],
  },
  {
    id: 'transport-23',
    word: 'バス',
    romaji: 'basu',
    meaning: '公交车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'バスに乗ります。', chinese: '坐公交车。' }, ],
  },
  {
    id: 'transport-24',
    word: '地下鉄',
    romaji: 'chikatetsu',
    meaning: '地铁',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '地下鉄で通勤します。', chinese: '坐地铁通勤。' }, ],
  },
  {
    id: 'emotion-23',
    word: '楽しい',
    romaji: 'tanoshii',
    meaning: '快乐',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: 'とても楽しいです。', chinese: '非常快乐。' }, ],
  },
  {
    id: 'emotion-24',
    word: '寂しい',
    romaji: 'sabishii',
    meaning: '寂寞',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '寂しい気持ちです。', chinese: '感到寂寞。' }, ],
  },
  {
    id: 'workplace-36',
    word: '出張',
    romaji: 'shucchou',
    meaning: '出差',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '来週出張があります。', chinese: '下周要出差。' }, ],
  },
  {
    id: 'workplace-37',
    word: '報告',
    romaji: 'houkoku',
    meaning: '报告',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '報告書を提出します。', chinese: '提交报告书。' }, ],
  },
  {
    id: 'life-19',
    word: '料理人',
    romaji: 'ryourinin',
    meaning: '厨师',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '料理人になりたいです。', chinese: '想成为厨师。' }, ],
  },
  {
    id: 'life-20',
    word: '掃除人',
    romaji: 'soujinin',
    meaning: '清洁工',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '掃除人が来ます。', chinese: '清洁工要来。' }, ],
  },
  {
    id: 'hobby-21',
    word: 'スポーツ',
    romaji: 'supootsu',
    meaning: '运动',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'スポーツをします。', chinese: '做运动。' }, ],
  },
  {
    id: 'hobby-22',
    word: 'ダンス',
    romaji: 'dansu',
    meaning: '跳舞',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'ダンスを習います。', chinese: '学习跳舞。' }, ],
  },
  {
    id: 'food-35',
    word: '寿司',
    romaji: 'sushi',
    meaning: '寿司',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '寿司を食べます。', chinese: '吃寿司。' }, ],
  },
  {
    id: 'food-36',
    word: '天ぷら',
    romaji: 'tenpura',
    meaning: '天妇罗',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '天ぷらが好きです。', chinese: '喜欢天妇罗。' }, ],
  },
  {
    id: 'transport-25',
    word: '飛行機',
    romaji: 'hikouki',
    meaning: '飞机',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '飛行機で旅行します。', chinese: '坐飞机旅行。' }, ],
  },
  {
    id: 'transport-26',
    word: '船',
    romaji: 'fune',
    meaning: '船',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '船で移動します。', chinese: '坐船移动。' }, ],
  },
  {
    id: 'emotion-25',
    word: '怒り',
    romaji: 'ikari',
    meaning: '愤怒',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '怒りを抑えます。', chinese: '抑制愤怒。' }, ],
  },
  {
    id: 'emotion-26',
    word: '喜び',
    romaji: 'yorokobi',
    meaning: '喜悦',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '喜びを分かち合います。', chinese: '分享喜悦。' }, ],
  },
  {
    id: 'workplace-38',
    word: '会議室',
    romaji: 'kaigishitsu',
    meaning: '会议室',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '会議室で打ち合わせをします。', chinese: '在会议室开会。' }, ],
  },
  {
    id: 'workplace-39',
    word: '上司',
    romaji: 'joushi',
    meaning: '上司',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '上司に報告します。', chinese: '向上司报告。' }, ],
  },
  {
    id: 'life-21',
    word: '洗面所',
    romaji: 'senmenjo',
    meaning: '洗手间',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '洗面所に行きます。', chinese: '去洗手间。' }, ],
  },
  {
    id: 'life-22',
    word: '台所',
    romaji: 'daidokoro',
    meaning: '厨房',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '台所で料理を作ります。', chinese: '在厨房做饭。' }, ],
  },
  {
    id: 'hobby-23',
    word: '絵画',
    romaji: 'kaiga',
    meaning: '绘画',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '絵画を描きます。', chinese: '画画。' }, ],
  },
  {
    id: 'hobby-24',
    word: '写真',
    romaji: 'shashin',
    meaning: '照片',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '写真を撮ります。', chinese: '拍照。' }, ],
  },
  {
    id: 'food-37',
    word: '刺身',
    romaji: 'sashimi',
    meaning: '生鱼片',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '刺身を食べます。', chinese: '吃生鱼片。' }, ],
  },
  {
    id: 'food-38',
    word: '焼肉',
    romaji: 'yakiniku',
    meaning: '烤肉',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '焼肉を食べに行きます。', chinese: '去吃烤肉。' }, ],
  },
  {
    id: 'transport-27',
    word: '自転車',
    romaji: 'jitensha',
    meaning: '自行车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '自転車で通学します。', chinese: '骑自行车上学。' }, ],
  },
  {
    id: 'transport-28',
    word: 'バイク',
    romaji: 'baiku',
    meaning: '摩托车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'バイクに乗ります。', chinese: '骑摩托车。' }, ],
  },
  {
    id: 'emotion-27',
    word: '驚き',
    romaji: 'odoroki',
    meaning: '惊讶',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '驚きの表情を見せます。', chinese: '露出惊讶的表情。' }, ],
  },
  {
    id: 'emotion-28',
    word: '不安',
    romaji: 'fuan',
    meaning: '不安',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '不安な気持ちです。', chinese: '感到不安。' }, ],
  },
  {
    id: 'workplace-40',
    word: '部下',
    romaji: 'buka',
    meaning: '下属',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '部下を指導します。', chinese: '指导下属。' }, ],
  },
  {
    id: 'workplace-41',
    word: '同僚',
    romaji: 'douryou',
    meaning: '同事',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '同僚と協力します。', chinese: '与同事合作。' }, ],
  },
  {
    id: 'life-23',
    word: '寝室',
    romaji: 'shinshitsu',
    meaning: '卧室',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '寝室で寝ます。', chinese: '在卧室睡觉。' }, ],
  },
  {
    id: 'life-24',
    word: 'リビング',
    romaji: 'ribingu',
    meaning: '客厅',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'リビングでテレビを見ます。', chinese: '在客厅看电视。' }, ],
  },
  {
    id: 'hobby-25',
    word: '園芸',
    romaji: 'engei',
    meaning: '园艺',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '園芸を楽しみます。', chinese: '享受园艺。' }, ],
  },
  {
    id: 'hobby-26',
    word: '手芸',
    romaji: 'shugei',
    meaning: '手工艺',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '手芸を作ります。', chinese: '做手工艺。' }, ],
  },
  {
    id: 'food-39',
    word: '鍋',
    romaji: 'nabe',
    meaning: '火锅',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '鍋を食べます。', chinese: '吃火锅。' }, ],
  },
  {
    id: 'food-40',
    word: '焼き鳥',
    romaji: 'yakitori',
    meaning: '烤鸡肉串',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '焼き鳥を食べます。', chinese: '吃烤鸡肉串。' }, ],
  },
  {
    id: 'transport-29',
    word: '電車',
    romaji: 'densha',
    meaning: '电车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '電車で通勤します。', chinese: '坐电车通勤。' }, ],
  },
  {
    id: 'transport-30',
    word: 'モノレール',
    romaji: 'monoreeru',
    meaning: '单轨电车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'モノレールに乗ります。', chinese: '坐单轨电车。' }, ],
  },
  {
    id: 'emotion-29',
    word: '期待',
    romaji: 'kitai',
    meaning: '期待',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '期待を込めます。', chinese: '充满期待。' }, ],
  },
  {
    id: 'emotion-30',
    word: '希望',
    romaji: 'kibou',
    meaning: '希望',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '希望を持ちます。', chinese: '抱有希望。' }, ],
  },
  {
    id: 'workplace-42',
    word: 'プロジェクト',
    romaji: 'purojekuto',
    meaning: '项目',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: 'プロジェクトを進めます。', chinese: '推进项目。' }, ],
  },
  {
    id: 'workplace-43',
    word: 'ミーティング',
    romaji: 'miitingu',
    meaning: '会议',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: 'ミーティングに参加します。', chinese: '参加会议。' }, ],
  },
  {
    id: 'life-25',
    word: '洗濯機',
    romaji: 'sentakuki',
    meaning: '洗衣机',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '洗濯機で洗濯します。', chinese: '用洗衣机洗衣服。' }, ],
  },
  {
    id: 'life-26',
    word: '冷蔵庫',
    romaji: 'reizouko',
    meaning: '冰箱',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '冷蔵庫に食材を入れます。', chinese: '把食材放进冰箱。' }, ],
  },
  {
    id: 'hobby-27',
    word: '釣り',
    romaji: 'tsuri',
    meaning: '钓鱼',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '釣りに行きます。', chinese: '去钓鱼。' }, ],
  },
  {
    id: 'hobby-28',
    word: '登山',
    romaji: 'tozan',
    meaning: '登山',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '山に登ります。', chinese: '去登山。' }, ],
  },
  {
    id: 'food-41',
    word: '餃子',
    romaji: 'gyouza',
    meaning: '饺子',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '餃子を作ります。', chinese: '包饺子。' }, ],
  },
  {
    id: 'food-42',
    word: 'ラーメン',
    romaji: 'raamen',
    meaning: '拉面',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'ラーメンを食べます。', chinese: '吃拉面。' }, ],
  },
  {
    id: 'transport-31',
    word: 'タクシー',
    romaji: 'takushii',
    meaning: '出租车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'タクシーを呼びます。', chinese: '叫出租车。' }, ],
  },
  {
    id: 'transport-32',
    word: 'バス停',
    romaji: 'basutei',
    meaning: '公交站',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'バス停で待ちます。', chinese: '在公交站等车。' }, ],
  },
  {
    id: 'emotion-31',
    word: '緊張',
    romaji: 'kinchou',
    meaning: '紧张',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '緊張しています。', chinese: '很紧张。' }, ],
  },
  {
    id: 'emotion-32',
    word: '安心',
    romaji: 'anshin',
    meaning: '安心',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '安心しました。', chinese: '放心了。' }, ],
  },
  {
    id: 'workplace-44',
    word: 'プレゼンテーション',
    romaji: 'purezenteeshon',
    meaning: '演讲',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: 'プレゼンテーションを準備します。', chinese: '准备演讲。' }, ],
  },
  {
    id: 'workplace-45',
    word: 'レポート',
    romaji: 'repooto',
    meaning: '报告',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: 'レポートを提出します。', chinese: '提交报告。' }, ],
  },
  {
    id: 'life-27',
    word: 'エアコン',
    romaji: 'eakon',
    meaning: '空调',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'エアコンをつけます。', chinese: '开空调。' }, ],
  },
  {
    id: 'life-28',
    word: 'テレビ',
    romaji: 'terebi',
    meaning: '电视',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'テレビを見ます。', chinese: '看电视。' }, ],
  },
  {
    id: 'hobby-29',
    word: '水泳',
    romaji: 'suiei',
    meaning: '游泳',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '水泳を習います。', chinese: '学习游泳。' }, ],
  },
  {
    id: 'hobby-30',
    word: 'ジョギング',
    romaji: 'jogingu',
    meaning: '慢跑',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'ジョギングをします。', chinese: '慢跑。' }, ],
  },
  {
    id: 'food-43',
    word: 'カレー',
    romaji: 'karee',
    meaning: '咖喱',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'カレーを作ります。', chinese: '做咖喱。' }, ],
  },
  {
    id: 'food-44',
    word: 'ハンバーグ',
    romaji: 'hanbaagu',
    meaning: '汉堡肉饼',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'ハンバーグを食べます。', chinese: '吃汉堡肉饼。' }, ],
  },
  {
    id: 'transport-33',
    word: '駅',
    romaji: 'eki',
    meaning: '车站',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '駅で待ち合わせます。', chinese: '在车站见面。' }, ],
  },
  {
    id: 'transport-34',
    word: '空港',
    romaji: 'kuukou',
    meaning: '机场',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '空港に着きました。', chinese: '到达机场。' }, ],
  },
  {
    id: 'emotion-33',
    word: '興奮',
    romaji: 'koufun',
    meaning: '兴奋',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '興奮しています。', chinese: '很兴奋。' }, ],
  },
  {
    id: 'emotion-34',
    word: '満足',
    romaji: 'manzoku',
    meaning: '满足',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '満足しています。', chinese: '很满足。' }, ],
  },
  {
    id: 'workplace-46',
    word: 'スケジュール',
    romaji: 'sukejuuru',
    meaning: '日程',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: 'スケジュールを確認します。', chinese: '确认日程。' }, ],
  },
  {
    id: 'workplace-47',
    word: 'デスク',
    romaji: 'desuku',
    meaning: '办公桌',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: 'デスクを整理します。', chinese: '整理办公桌。' }, ],
  },
  {
    id: 'life-29',
    word: '洗面台',
    romaji: 'senmendai',
    meaning: '洗脸台',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '洗面台で顔を洗います。', chinese: '在洗脸台洗脸。' }, ],
  },
  {
    id: 'life-30',
    word: 'ベッド',
    romaji: 'beddo',
    meaning: '床',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'ベッドで寝ます。', chinese: '在床上睡觉。' }, ],
  },
  {
    id: 'hobby-31',
    word: 'ヨガ',
    romaji: 'yoga',
    meaning: '瑜伽',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'ヨガを練習します。', chinese: '练习瑜伽。' }, ],
  },
  {
    id: 'hobby-32',
    word: 'ピアノ',
    romaji: 'piano',
    meaning: '钢琴',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'ピアノを弾きます。', chinese: '弹钢琴。' }, ],
  },
  {
    id: 'food-45',
    word: 'パスタ',
    romaji: 'pasuta',
    meaning: '意大利面',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'パスタを作ります。', chinese: '做意大利面。' }, ],
  },
  {
    id: 'food-46',
    word: 'ピザ',
    romaji: 'piza',
    meaning: '披萨',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'ピザを注文します。', chinese: '点披萨。' }, ],
  },
  {
    id: 'transport-35',
    word: '港',
    romaji: 'minato',
    meaning: '港口',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '港に着きました。', chinese: '到达港口。' }, ],
  },
  {
    id: 'transport-36',
    word: '駐車場',
    romaji: 'chuushajou',
    meaning: '停车场',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '駐車場に車を止めます。', chinese: '在停车场停车。' }, ],
  },
  {
    id: 'emotion-35',
    word: '感謝',
    romaji: 'kansha',
    meaning: '感谢',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '感謝の気持ちを伝えます。', chinese: '表达感谢之情。' }, ],
  },
  {
    id: 'emotion-36',
    word: '尊敬',
    romaji: 'sonkei',
    meaning: '尊敬',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '尊敬の念を抱きます。', chinese: '怀有敬意。' }, ],
  },
  {
    id: 'workplace-48',
    word: '会議室',
    romaji: 'kaigishitsu',
    meaning: '会议室',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '会議室で打ち合わせをします。', chinese: '在会议室开会。' }, ],
  },
  {
    id: 'workplace-49',
    word: '名刺',
    romaji: 'meishi',
    meaning: '名片',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '名刺を交換しましょう。', chinese: '让我们交换名片吧。' }],
  },
  {
    id: 'workplace-50',
    word: '会議',
    romaji: 'kaigi',
    meaning: '会议',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '会議は午後2時からです。', chinese: '会议从下午2点开始。' }],
  },
  {
    id: 'workplace-51',
    word: '報告書',
    romaji: 'houkokusho',
    meaning: '报告书',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '報告書を提出してください。', chinese: '请提交报告书。' }],
  },
  {
    id: 'workplace-52',
    word: '企画書',
    romaji: 'kikakusho',
    meaning: '企划书',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '企画書を作成中です。', chinese: '正在制作企划书。' }],
  },
  {
    id: 'life-35',
    word: '洗濯機',
    romaji: 'sentakuki',
    meaning: '洗衣机',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '洗濯機で洗濯物を洗います。', chinese: '用洗衣机洗衣服。' }],
  },
  {
    id: 'life-36',
    word: '掃除機',
    romaji: 'soujiki',
    meaning: '吸尘器',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '掃除機で部屋を掃除します。', chinese: '用吸尘器打扫房间。' }],
  },
  {
    id: 'life-37',
    word: '冷蔵庫',
    romaji: 'reizouko',
    meaning: '冰箱',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '冷蔵庫に食材を入れます。', chinese: '把食材放进冰箱。' }],
  },
  {
    id: 'life-38',
    word: '電子レンジ',
    romaji: 'denshi renji',
    meaning: '微波炉',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '電子レンジで温めます。', chinese: '用微波炉加热。' }],
  },
  {
    id: 'hobby-36',
    word: '写真',
    romaji: 'shashin',
    meaning: '照片',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '写真を撮ります。', chinese: '拍照。' }],
  },
  {
    id: 'hobby-37',
    word: 'カメラ',
    romaji: 'kamera',
    meaning: '相机',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '新しいカメラを買いました。', chinese: '买了新相机。' }],
  },
  {
    id: 'hobby-38',
    word: '絵画',
    romaji: 'kaiga',
    meaning: '绘画',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '絵画を描きます。', chinese: '画画。' }],
  },
  {
    id: 'hobby-39',
    word: '彫刻',
    romaji: 'choukoku',
    meaning: '雕刻',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '木彫りを彫ります。', chinese: '雕刻木雕。' }],
  },
  {
    id: 'transport-40',
    word: 'タクシー',
    romaji: 'takushii',
    meaning: '出租车',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'タクシーで空港へ行きます。', chinese: '坐出租车去机场。' }],
  },
  {
    id: 'transport-41',
    word: 'バス停',
    romaji: 'basutei',
    meaning: '公交车站',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'バス停で待ちます。', chinese: '在公交车站等车。' }],
  },
  {
    id: 'transport-42',
    word: '駅前',
    romaji: 'ekimae',
    meaning: '车站前',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '駅前で待ち合わせます。', chinese: '在车站前碰头。' }],
  },
  {
    id: 'emotion-40',
    word: '緊張',
    romaji: 'kinchou',
    meaning: '紧张',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '面接で緊張します。', chinese: '面试时很紧张。' }],
  },
  {
    id: 'emotion-41',
    word: '不安',
    romaji: 'fuan',
    meaning: '不安',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '将来に不安を感じます。', chinese: '对未来感到不安。' }],
  },
  {
    id: 'emotion-42',
    word: '期待',
    romaji: 'kitai',
    meaning: '期待',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '新しい仕事に期待しています。', chinese: '期待新的工作。' }],
  },
  {
    id: 'emotion-43',
    word: '希望',
    romaji: 'kibou',
    meaning: '希望',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '希望を持って頑張ります。', chinese: '带着希望努力。' }],
  },
  {
    id: 'emotion-44',
    word: '自信',
    romaji: 'jishin',
    meaning: '自信',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '自分に自信があります。', chinese: '对自己有信心。' }],
  },
  {
    id: 'emotion-45',
    word: '勇気',
    romaji: 'yuuki',
    meaning: '勇气',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '勇気を出して挑戦します。', chinese: '鼓起勇气挑战。' }],
  },
  {
    id: 'emotion-46',
    word: '決心',
    romaji: 'kesshin',
    meaning: '决心',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '決心を固めます。', chinese: '下定决心。' }],
  },
  {
    id: 'emotion-47',
    word: '覚悟',
    romaji: 'kakugo',
    meaning: '觉悟',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '覚悟を決めます。', chinese: '下定决心。' }],
  },
  {
    id: 'emotion-48',
    word: '忍耐',
    romaji: 'nintai',
    meaning: '忍耐',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '忍耐強く待ちます。', chinese: '耐心等待。' }],
  },
  {
    id: 'emotion-49',
    word: '感謝',
    romaji: 'kansha',
    meaning: '感谢',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '感謝の気持ちを伝えます。', chinese: '表达感谢之情。' }],
  },
  {
    id: 'emotion-50',
    word: '尊敬',
    romaji: 'sonkei',
    meaning: '尊敬',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '先生を尊敬します。', chinese: '尊敬老师。' }],
  },
  {
    id: 'emotion-51',
    word: '信頼',
    romaji: 'shinrai',
    meaning: '信赖',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '信頼関係を築きます。', chinese: '建立信赖关系。' }],
  },
  {
    id: 'emotion-52',
    word: '愛情',
    romaji: 'aijou',
    meaning: '爱情',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '愛情を注ぎます。', chinese: '倾注爱情。' }],
  },
  {
    id: 'emotion-53',
    word: '友情',
    romaji: 'yuujou',
    meaning: '友情',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '友情を大切にします。', chinese: '珍惜友情。' }],
  },
  {
    id: 'emotion-54',
    word: '親愛',
    romaji: 'shinai',
    meaning: '亲爱',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '親愛なる友へ。', chinese: '致亲爱的朋友。' }],
  },
  {
    id: 'emotion-55',
    word: '慈愛',
    romaji: 'jiai',
    meaning: '慈爱',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '慈愛の心を持ちます。', chinese: '怀有慈爱之心。' }],
  },
  {
    id: 'emotion-56',
    word: '同情',
    romaji: 'doujou',
    meaning: '同情',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '同情を寄せます。', chinese: '表示同情。' }],
  },
  {
    id: 'emotion-57',
    word: '共感',
    romaji: 'kyoukan',
    meaning: '共鸣',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '共感を得ます。', chinese: '获得共鸣。' }],
  },
  {
    id: 'emotion-58',
    word: '理解',
    romaji: 'rikai',
    meaning: '理解',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '理解を示します。', chinese: '表示理解。' }],
  },
  {
    id: 'emotion-59',
    word: '寛容',
    romaji: 'kanyou',
    meaning: '宽容',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '寛容な態度を取ります。', chinese: '采取宽容的态度。' }],
  },
  {
    id: 'emotion-60',
    word: '謙虚',
    romaji: 'kenkyo',
    meaning: '谦虚',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '謙虚な姿勢を保ちます。', chinese: '保持谦虚的态度。' }],
  },
  {
    id: 'emotion-61',
    word: '誠実',
    romaji: 'seijitsu',
    meaning: '诚实',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '誠実に接します。', chinese: '诚实对待。' }],
  },
  {
    id: 'emotion-62',
    word: '正直',
    romaji: 'shoujiki',
    meaning: '正直',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '正直に話します。', chinese: '说实话。' }],
  },
  {
    id: 'emotion-63',
    word: '真摯',
    romaji: 'shinshi',
    meaning: '真挚',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '真摯に向き合います。', chinese: '真诚面对。' }],
  },
  {
    id: 'emotion-64',
    word: '真剣',
    romaji: 'shinken',
    meaning: '认真',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '真剣に考えます。', chinese: '认真思考。' }],
  },
  {
    id: 'emotion-65',
    word: '熱心',
    romaji: 'nesshin',
    meaning: '热心',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '熱心に取り組みます。', chinese: '热心投入。' }],
  },
  {
    id: 'emotion-66',
    word: '情熱',
    romaji: 'jounetsu',
    meaning: '热情',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '情熱を注ぎます。', chinese: '倾注热情。' }],
  },
  {
    id: 'emotion-67',
    word: '意欲',
    romaji: 'iyoku',
    meaning: '意愿',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '意欲を持って取り組みます。', chinese: '带着意愿投入。' }],
  },
  {
    id: 'emotion-68',
    word: '向上心',
    romaji: 'koushoushin',
    meaning: '上进心',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '向上心を持ちます。', chinese: '保持上进心。' }],
  },
  {
    id: 'emotion-69',
    word: '探究心',
    romaji: 'tankyuu',
    meaning: '探究心',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '探究心を持ちます。', chinese: '保持探究心。' }],
  },
  {
    id: 'emotion-70',
    word: '好奇心',
    romaji: 'koukishin',
    meaning: '好奇心',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '好奇心を持ちます。', chinese: '保持好奇心。' }],
  },
  {
    id: 'emotion-71',
    word: '創造力',
    romaji: 'souzouryoku',
    meaning: '创造力',
    status: '未学习',
    category: 'emotion',
    examples: [{ japanese: '創造力を発揮します。', chinese: '发挥创造力。' }],
  },
  // 新增词汇 (补充到目标数量)
  // 工作场所 (workplace)
  {
    id: 'workplace-61',
    word: '同僚',
    romaji: 'douryou',
    meaning: '同事',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '同僚とランチに行きます。', chinese: '和同事一起去吃午饭。' }, ],
  },
  {
    id: 'workplace-62',
    word: '上司',
    romaji: 'joushi',
    meaning: '上司',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '上司に相談します。', chinese: '向上司咨询。' }, ],
  },
  {
    id: 'workplace-63',
    word: '部下',
    romaji: 'buka',
    meaning: '部下',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '部下に指示を出します。', chinese: '给部下指示。' }, ],
  },
  // 日常生活 (life)
  {
    id: 'life-47',
    word: '箸',
    romaji: 'hashi',
    meaning: '筷子',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '箸でご飯を食べます。', chinese: '用筷子吃饭。' }, ],
  },
  {
    id: 'life-48',
    word: 'スプーン',
    romaji: 'supuun',
    meaning: '勺子',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'スプーンを使います。', chinese: '使用勺子。' }, ],
  },
  {
    id: 'life-49',
    word: 'フォーク',
    romaji: 'fooku',
    meaning: '叉子',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'フォークでパスタを食べます。', chinese: '用叉子吃意面。' }, ],
  },
  // 兴趣 (hobby)
  {
    id: 'hobby-49',
    word: 'ゲーム',
    romaji: 'geemu',
    meaning: '游戏',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'ゲームをします。', chinese: '玩游戏。' }, ],
  },
  {
    id: 'hobby-50',
    word: 'スポーツ観戦',
    romaji: 'supootsu kansen',
    meaning: '观看体育比赛',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'スポーツ観戦が好きです。', chinese: '喜欢观看体育比赛。' }, ],
  },
  // 食物 (food)
  {
    id: 'food-63',
    word: 'お茶',
    romaji: 'ocha',
    meaning: '茶',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'お茶を飲みます。', chinese: '喝茶。' }, ],
  },
  {
    id: 'food-64',
    word: 'コーヒー',
    romaji: 'koohii',
    meaning: '咖啡',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'コーヒーを一杯ください。', chinese: '请给我一杯咖啡。' }, ],
  },
  // 交通 (transport)
  {
    id: 'transport-53',
    word: '切符',
    romaji: 'kippu',
    meaning: '票',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '切符を買います。', chinese: '买票。' }, ],
  },
  {
    id: 'transport-54',
    word: '改札口',
    romaji: 'kaisatsuguchi',
    meaning: '检票口',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '改札口を通ります。', chinese: '通过检票口。' }, ],
  },
  // 情感表达 (emotion)
  {
    id: 'emotion-53',
    word: '楽しい',
    romaji: 'tanoshii',
    meaning: '开心/快乐',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '楽しい時間です。', chinese: '快乐的时光。' }, ],
  },
  {
    id: 'emotion-54',
    word: '悲しい',
    romaji: 'kanashii',
    meaning: '悲伤',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '悲しいニュースです。', chinese: '是悲伤的新闻。' }, ],
  },
  // 身体部位 (body)
  {
    id: 'body-22',
    word: '髪',
    romaji: 'kami',
    meaning: '头发',
    status: '未学习',
    category: 'body',
    examples: [ { japanese: '髪を切りました。', chinese: '剪了头发。' }, ],
  },
  // 家庭成员 (family)
  {
    id: 'family-22',
    word: 'いとこ',
    romaji: 'itoko',
    meaning: '堂兄弟/姐妹, 表兄弟/姐妹',
    status: '未学习',
    category: 'family',
    examples: [ { japanese: 'いとこに会いました。', chinese: '见到了表亲。' }, ],
  },
  // 数字计量 (number)
  {
    id: 'number-21',
    word: '少し',
    romaji: 'sukoshi',
    meaning: '一点',
    status: '未学习',
    category: 'number',
    examples: [ { japanese: '少しだけ食べます。', chinese: '只吃一点。' }, ],
  },
  // 方位 (direction)
  {
    id: 'direction-20',
    word: '上',
    romaji: 'ue',
    meaning: '上面',
    status: '未学习',
    category: 'direction',
    examples: [ { japanese: '机の上に本があります。', chinese: '桌子上面有书。' }, ],
  },
  // 时间 (time)
  {
    id: 'time-21',
    word: '今日',
    romaji: 'kyou',
    meaning: '今天',
    status: '未学习',
    category: 'time',
    examples: [ { japanese: '今日は晴れです。', chinese: '今天是晴天。' }, ],
  },
  // 新增词汇 (补充到 500 个)
  // 工作场所 (workplace)
  {
    id: 'workplace-64',
    word: '休憩時間',
    romaji: 'kyuukei jikan',
    meaning: '休息时间',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '休憩時間を取りましょう。', chinese: '休息一下吧。' }, ],
  },
  // 日常生活 (life)
  {
    id: 'life-50',
    word: 'ゴミ箱',
    romaji: 'gomibako',
    meaning: '垃圾桶',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: 'ゴミ箱に捨てます。', chinese: '扔进垃圾桶。' }, ],
  },
  {
    id: 'life-51',
    word: 'ポスト',
    romaji: 'posuto',
    meaning: '邮筒',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '手紙をポストに入れます。', chinese: '把信放进邮筒。' }, ],
  },
  // 兴趣 (hobby)
  {
    id: 'hobby-51',
    word: 'ハイキング',
    romaji: 'haikingu',
    meaning: '徒步旅行',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '週末はハイキングに行きます。', chinese: '周末去徒步旅行。' }, ],
  },
  {
    id: 'hobby-52',
    word: 'サイクリング',
    romaji: 'saikuringu',
    meaning: '骑自行车',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: 'サイクリングが趣味です。', chinese: '爱好是骑自行车。' }, ],
  },
  // 食物 (food)
  {
    id: 'food-65',
    word: 'ケーキ',
    romaji: 'keeki',
    meaning: '蛋糕',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '誕生日ケーキを食べます。', chinese: '吃生日蛋糕。' }, ],
  },
  {
    id: 'food-66',
    word: 'パン',
    romaji: 'pan',
    meaning: '面包',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: '朝ごはんはパンです。', chinese: '早饭是面包。' }, ],
  },
  // 交通 (transport)
  {
    id: 'transport-55',
    word: '乗り換え',
    romaji: 'norikae',
    meaning: '换乘',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: 'ここで電車を乗り換えます。', chinese: '在这里换乘电车。' }, ],
  },
  {
    id: 'transport-56',
    word: '終点',
    romaji: 'shuuten',
    meaning: '终点站',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '終点まで乗ります。', chinese: '坐到终点站。' }, ],
  },
  // 情感表达 (emotion)
  {
    id: 'emotion-55',
    word: '驚き',
    romaji: 'odoroki',
    meaning: '惊讶',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '驚きの声が出ました。', chinese: '发出了惊讶的声音。' }, ],
  },
  {
    id: 'emotion-56',
    word: '感動',
    romaji: 'kandou',
    meaning: '感动',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '感動的な話です。', chinese: '是感人的故事。' }, ],
  },
  // 身体部位 (body)
  {
    id: 'body-23',
    word: '顔',
    romaji: 'kao',
    meaning: '脸',
    status: '未学习',
    category: 'body',
    examples: [ { japanese: '顔を洗います。', chinese: '洗脸。' }, ],
  },
    // 新增词汇 (补充到 500 个)
  // 工作场所 (workplace)
  {
    id: 'workplace-65',
    word: '書類',
    romaji: 'shorui',
    meaning: '文件',
    status: '未学习',
    category: 'workplace',
    examples: [ { japanese: '書類を作成します。', chinese: '制作文件。' }, ],
  },
  // 日常生活 (life)
  {
    id: 'life-52',
    word: '鍵',
    romaji: 'kagi',
    meaning: '钥匙',
    status: '未学习',
    category: 'life',
    examples: [ { japanese: '鍵をかけます。', chinese: '锁门。' }, ],
  },
  // 兴趣 (hobby)
  {
    id: 'hobby-53',
    word: '旅行',
    romaji: 'ryokou',
    meaning: '旅行',
    status: '未学习',
    category: 'hobby',
    examples: [ { japanese: '旅行に行きたいです。', chinese: '想去旅行。' }, ],
  },
  // 食物 (food)
  {
    id: 'food-67',
    word: 'ジュース',
    romaji: 'juusu',
    meaning: '果汁',
    status: '未学习',
    category: 'food',
    examples: [ { japanese: 'ジュースを飲みます。', chinese: '喝果汁。' }, ],
  },
  // 交通 (transport)
  {
    id: 'transport-57',
    word: '運転',
    romaji: 'unten',
    meaning: '驾驶',
    status: '未学习',
    category: 'transport',
    examples: [ { japanese: '車を運転します。', chinese: '驾驶汽车。' }, ],
  },
  // 情感表达 (emotion)
  {
    id: 'emotion-57',
    word: '怒り',
    romaji: 'ikari',
    meaning: '愤怒',
    status: '未学习',
    category: 'emotion',
    examples: [ { japanese: '怒りを感じます。', chinese: '感到愤怒。' }, ],
  },
    // 新增词汇 (补充到 500 个)
  // 身体部位 (body)
  {
    id: 'body-24',
    word: '指',
    romaji: 'yubi',
    meaning: '手指',
    status: '未学习',
    category: 'body',
    examples: [ { japanese: '指を指します。', chinese: '用手指着。' }, ],
  },
  // 家庭成员 (family)
  {
    id: 'family-23',
    word: '親友',
    romaji: 'shinyuu',
    meaning: '挚友/密友',
    status: '未学习',
    category: 'family', // 这里借用 family 类别，虽然更像emotion或relationship
    examples: [ { japanese: '親友に相談します。', chinese: '和挚友商量。' }, ],
  },
];

// 过滤重复的词汇数据
const seenWords = new Set();
const vocabularyData: VocabularyCard[] = rawVocabularyData.filter(item => {
  if (seenWords.has(item.word)) {
    return false;
  } else {
    seenWords.add(item.word);
    return true;
  }
  
});

// 导出过滤后的词汇数据
export { vocabularyData }; 
