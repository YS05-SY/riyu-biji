'use client'

import React from 'react';
import SyllabaryChart from '../../components/SyllabaryChart';

const combinedSyllabary = [
  { hiragana: 'あ', katakana: 'ア', romaji: 'a', audio: '/audio/hiragana/a.mp3' },
  { hiragana: 'い', katakana: 'イ', romaji: 'i', audio: '/audio/hiragana/i.mp3' },
  { hiragana: 'う', katakana: 'ウ', romaji: 'u', audio: '/audio/hiragana/u.mp3' },
  { hiragana: 'え', katakana: 'エ', romaji: 'e', audio: '/audio/hiragana/e.mp3' },
  { hiragana: 'お', katakana: 'オ', romaji: 'o', audio: '/audio/hiragana/o.mp3' },

  { hiragana: 'か', katakana: 'カ', romaji: 'ka', audio: '/audio/hiragana/ka.mp3' },
  { hiragana: 'き', katakana: 'キ', romaji: 'ki', audio: '/audio/hiragana/ki.mp3' },
  { hiragana: 'く', katakana: 'ク', romaji: 'ku', audio: '/audio/hiragana/ku.mp3' },
  { hiragana: 'け', katakana: 'ケ', romaji: 'ke', audio: '/audio/hiragana/ke.mp3' },
  { hiragana: 'こ', katakana: 'コ', romaji: 'ko', audio: '/audio/hiragana/ko.mp3' },

  { hiragana: 'さ', katakana: 'サ', romaji: 'sa', audio: '/audio/hiragana/sa.mp3' },
  { hiragana: 'し', katakana: 'シ', romaji: 'shi', audio: '/audio/hiragana/shi.mp3' },
  { hiragana: 'す', katakana: 'ス', romaji: 'su', audio: '/audio/hiragana/su.mp3' },
  { hiragana: 'せ', katakana: 'セ', romaji: 'se', audio: '/audio/hiragana/se.mp3' },
  { hiragana: 'そ', katakana: 'ソ', romaji: 'so', audio: '/audio/hiragana/so.mp3' },

  { hiragana: 'た', katakana: 'タ', romaji: 'ta', audio: '/audio/hiragana/ta.mp3' },
  { hiragana: 'ち', katakana: 'チ', romaji: 'chi', audio: '/audio/hiragana/chi.mp3' },
  { hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', audio: '/audio/hiragana/tsu.mp3' },
  { hiragana: 'て', katakana: 'テ', romaji: 'te', audio: '/audio/hiragana/te.mp3' },
  { hiragana: 'と', katakana: 'ト', romaji: 'to', audio: '/audio/hiragana/to.mp3' },

  { hiragana: 'な', katakana: 'ナ', romaji: 'na', audio: '/audio/hiragana/na.mp3' },
  { hiragana: 'に', katakana: 'ニ', romaji: 'ni', audio: '/audio/hiragana/ni.mp3' },
  { hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', audio: '/audio/hiragana/nu.mp3' },
  { hiragana: 'ね', katakana: 'ネ', romaji: 'ne', audio: '/audio/hiragana/ne.mp3' },
  { hiragana: 'の', katakana: 'ノ', romaji: 'no', audio: '/audio/hiragana/no.mp3' },

  { hiragana: 'は', katakana: 'ハ', romaji: 'ha', audio: '/audio/hiragana/ha.mp3' },
  { hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', audio: '/audio/hiragana/hi.mp3' },
  { hiragana: 'ふ', katakana: 'フ', romaji: 'fu', audio: '/audio/hiragana/fu.mp3' },
  { hiragana: 'へ', katakana: 'ヘ', romaji: 'he', audio: '/audio/hiragana/he.mp3' },
  { hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', audio: '/audio/hiragana/ho.mp3' },

  { hiragana: 'ま', katakana: 'マ', romaji: 'ma', audio: '/audio/hiragana/ma.mp3' },
  { hiragana: 'み', katakana: 'ミ', romaji: 'mi', audio: '/audio/hiragana/mi.mp3' },
  { hiragana: 'む', katakana: 'ム', romaji: 'mu', audio: '/audio/hiragana/mu.mp3' },
  { hiragana: 'め', katakana: 'メ', romaji: 'me', audio: '/audio/hiragana/me.mp3' },
  { hiragana: 'も', katakana: 'モ', romaji: 'mo', audio: '/audio/hiragana/mo.mp3' },

  { hiragana: 'や', katakana: 'ヤ', romaji: 'ya', audio: '/audio/hiragana/ya.mp3' },
  { hiragana: '', katakana: '', romaji: '', audio: '' }, // Empty cell
  { hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', audio: '/audio/hiragana/yu.mp3' },
  { hiragana: '', katakana: '', romaji: '', audio: '' }, // Empty cell
  { hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', audio: '/audio/hiragana/yo.mp3' },

  { hiragana: 'ら', katakana: 'ラ', romaji: 'ra', audio: '/audio/hiragana/ra.mp3' },
  { hiragana: 'り', katakana: 'リ', romaji: 'ri', audio: '/audio/hiragana/ri.mp3' },
  { hiragana: 'る', katakana: 'ル', romaji: 'ru', audio: '/audio/hiragana/ru.mp3' },
  { hiragana: 'れ', katakana: 'レ', romaji: 're', audio: '/audio/hiragana/re.mp3' },
  { hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', audio: '/audio/hiragana/ro.mp3' },

  { hiragana: 'わ', katakana: 'ワ', romaji: 'wa', audio: '/audio/hiragana/wa.mp3' },
  { hiragana: ''/* empty */, katakana: ''/* empty */, romaji: ''/* empty */, audio: ''/* empty */ },
  { hiragana: ''/* empty */, katakana: ''/* empty */, romaji: ''/* empty */, audio: ''/* empty */ },
  { hiragana: ''/* empty */, katakana: ''/* empty */, romaji: ''/* empty */, audio: ''/* empty */ },
  { hiragana: 'を', katakana: 'ヲ', romaji: 'wo', audio: '/audio/hiragana/wo.mp3' },

  { hiragana: 'ん', katakana: 'ン', romaji: 'n', audio: '/audio/hiragana/n.mp3' },
];

export default function HiraganaPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-bold mb-4 text-center">五十音图</h1>
      <p className="text-sm text-gray-500 text-center mb-8 select-none">( 注:上平假，下片假 )</p>
      <SyllabaryChart syllabary={combinedSyllabary} />
      {/* New section for other sounds */}
      <section className="container mx-auto px-4 py-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">认识其它音</h2>

          {/* Section 1: Syllabic N (拨音) */}
          <h3 className="text-xl font-bold mb-3">部分一：拨音 (ん / ン)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            拨音（はつおん, hatsuon）是日语中的一个特殊音节，由假名「ん」（平假名）或「ン」（片假名）表示。它是一个鼻音音节，没有自己的元音。拨音的发音会根据其后面的音节而变化，可以发作类似于英语 'm', 'n', 或 'ng' 的声音。例如：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>跟在唇音（如ぱ、ば、ま）前，发类似 'm' 的音，如：しんぶん (shinbun - 新闻)</li>
            <li>跟在舌尖音（如た、だ、な、ら）前，发类似 'n' 的音，如：みんな (minna - 大家)</li>
            <li>跟在舌根音（如か、が）前，发类似 'ng' 的音，如：てんき (tenki - 天气)</li>
            <li>跟在元音或半元音（や、ゆ、よ、わ）前，发类似鼻子堵塞的 'n' 音。</li>
            <li>在词尾时，通常发类似 'ng' 的音，如：にほん (Nihon - 日本)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            拨音在日语中非常重要，它可以改变词语的含义。学习正确地发拨音对于流利的日语发音至关重要。
          </p>

          {/* Section 2: Double Consonants (促音) */}
          <h3 className="text-xl font-bold mb-3 mt-6">部分二：促音 (っ / ッ)</h3>
          <p className="text-gray-700 leading-relaxed">
            促音（そくおん, sokuon）表示双写辅音，使发音有一个短暂的停顿。它由小写的假名「っ」（平假名）或「ッ」（片假名）表示，放在双写辅音的前面。促音出现在か、さ、た、ぱ行的辅音前。例如：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>がっこう (gakkou - 学校) - 促音后是か行，双写辅音 k</li>
            <li>きって (kitte - 邮票) - 促音后是た行，双写辅音 t</li>
            <li>さっさと (sassato - 赶快) - 促音后是さ行，双写辅音 s</li>
            <li>いっぱい (ippai - 满，一杯) - 促音后是ぱ行，双写辅音 p</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            促音在日语中也很重要，它可以区分词语的含义。例如，きたい (kitai - 期待) 和きったい (kittai - 奇特)。正确地读出促音的停顿对于理解和表达日语非常关键。
          </p>

          {/* Section 3: Contracted Sounds (拗音) */}
          <h3 className="text-xl font-bold mb-3 mt-6">部分三：拗音 (ようおん / ョウオン)</h3>
          <p className="text-gray-700 leading-relaxed">
            拗音（ようおん, youon）是由以 i 结尾的假名（如 き, し, ち, に, ひ, み, り）与小写的や (ゃ), ゆ (ゅ), よ (ょ) 组合而成的音节。类似于中文的西(xi)+奥(ao)=小(xiao)，这些组合被视为一个音节发音。例（如：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>きゃ (kya)</li>
            <li>しゅ (shu)</li>
            <li>ちょ (cho)</li>
            <li>にゃ (nya)</li>
            <li>ひゅ (hyu)</li>
            <li>みょ (myo)</li>
            <li>りゃ (rya)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            拗音在日语词汇中非常常见，正确掌握拗音的发音和书写对于准确地读写日语词语非常重要。通过大小写区分是否为拗音。
          </p>

          {/* Section 4: Voiced and Semi-voiced Consonants (浊音 / 半浊音) */}
          <h3 className="text-xl font-bold mb-3 mt-6">部分四：浊音和半浊音 (だくおん / はんだくおん)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            浊音（だくおん, dakuon）是在か (ka)、さ (sa)、た (ta)、は (ha) 这四行的假名右上角加上两点（称为浊点「゛」）形成的。发音时声带振动。对应的假名及其罗马音变化如下：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>か行 → が行 (ga, gi, gu, ge, go)</li>
            <li>さ行 → ざ行 (za, ji, zu, ze, zo)</li>
            <li>た行 → だ行 (da, ji, zu, de, do)</li>
            <li>は行 → ば行 (ba, bi, bu, be, bo)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            需要注意的是，ざ行的じ和だ行的じ都发音为 ji，ざ行的ず和だ行的ず都发音为 zu。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            半浊音（はんだくおん, handakuon）仅存在于は (ha) 行，在假名右上角加上一个小圆圈（称为半浊点「゜」）形成。发音类似于英语的 'p' 音。对应的假名及其罗马音变化如下：
          </p>
           <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>は行 → ぱ行 (pa, pi, pu, pe, po)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            浊音和半浊音是日语中区分词义的重要特征，掌握它们的正确发音和书写对于准确理解和使用日语词汇至关重要。
          </p>

          {/* Section 5: Long Vowels (长音) */}
          <h3 className="text-xl font-bold mb-3 mt-6">部分五：长音 (ちょうおん / チョウオン)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            长音（ちょうおん, chōon）是指元音的延长发音，也就是拖长去读。在日语中，长音非常重要，因为它可以改变词语的含义。长音的表示方法在平假名和片假名中略有不同：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>平假名长音：通常通过在元音后添加相同的元音假名来表示长音。
              <ul className="list-circle list-inside ml-4">
                <li>あ段假名 + あ: かあ (kaa - 妈妈)</li>
                <li>い段假名 + い: しろい (shiroi - 白色)</li>
                <li>う段假名 + う: くうこう (kūkō - 机场)</li>
                <li>え段假名 + え 或 い: せんせい (sensei - 老师), えいが (eiga - 电影)</li>
                <li>お段假名 + お 或 う: こうえん (kōen - 公园), べんきょう (benkyō - 学习)</li>
              </ul>
            </li>
            <li>片假名长音：通常使用一个长音符号「ー」来表示，放在需要延长的元音假名后面。
              <ul className="list-circle list-inside ml-4">
                <li>ケーキ (kēki - 蛋糕)</li>
                <li>コーヒー (kōhī - 咖啡)</li>
                <li>スーパー (sūpā - 超市)</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            正确发长音对于清晰地表达日语至关重要。例如，おばさん (obasan - 阿姨) 和 おばあさん (obāsan - 奶奶) 是通过长音来区分的。
          </p>

          <h2 className="text-2xl font-bold mb-2 mt-12">不常见的音</h2>
          <p className="text-sm text-gray-500 mb-6">( 了解即可 )</p>
          
          {/* Section 6: Voiced Contracted Sounds (浊拗音) */}
          <h3 className="text-xl font-bold mb-3">部分一：浊拗音 (だくようおん / ダクヨウオン)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            浊拗音是由浊音中以 -i 结尾的假名（ぎ, じ, び, 为什么没有ぢ?）与小写的や (ゃ), ゆ (ゅ), よ (ょ) 组合而成的音节。这些组合也被视为一个音节发音。发音时声带振动。例如：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>ぎゃ (gya)</li>
            <li>じゅ (ju)</li>
            <li>びょ (byo)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            需要注意的是，じゅ 和ぢゅ 的发音相同，都读作 ju；じょ 和ぢょ 的发音相同，都读作 jo。通常使用じゅ和じょ。
          </p>

          {/* Section 7: Semi-voiced Contracted Sounds (半浊拗音) */}
          <h3 className="text-xl font-bold mb-3">部分二：半浊拗音 (はんだくようおん / ハンダクヨウオン)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            半浊拗音是由半浊音中以 -i 结尾的假名（仅 ぴ）与小写的や (ゃ), ゆ (ゅ), よ (ょ) 组合而成的音节。发音时类似于英语的 'py' 系列音。例如：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
            <li>ぴゃ (pya)</li>
            <li>ぴゅ (pyu)</li>
            <li>ぴょ (pyo)</li>
          </ul>

          {/* Section 8: Devoicing (去浊) */}
          <h3 className="text-xl font-bold mb-3">部分三：去浊 (むせいか / ムセイカ)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            去浊是指在特定发音环境下，某些通常是浊音或清音的假名，其元音（通常是い 'i' 和 う 'u'）失去声带振动，发音变得像耳语一样，甚至听不出来。这主要发生在以下情况：
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>夹在清辅音之间：如 きく (kiku - 听) 中的 う，すし (sushi - 寿司) 中的 う。</li>
            <li>位于词尾，前面是清辅音：如 です (desu - 是) 中的 う，ます (masu - 助动词) 中的 う。</li>
            <li>位于词尾，前面是清辅音 + い：如 くさい (kusai - 臭) 中的 い。</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            去浊是日语语音中比较常见的现象，掌握它有助于使你的日语发音更自然地接近母语者。虽然书写上假名仍然存在，但发音时元音的声带振动会消失。
          </p>

        </div>
      </section>
    </div>
  );
}
