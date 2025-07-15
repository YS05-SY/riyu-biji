'use client';

import React from 'react';

export default function KanaMnemonicsPage() {
  const kanaData = [
    {
      title: 'あ行',
      mnemonics: [
        { hiragana: 'あ', katakana: 'ア', mnemonic: '小安 (あ) 有大耳垂 (ア)', scene: '"啊！小安的耳垂好大！"（捂嘴惊讶）', pronunciation: 'a' },
        { hiragana: 'い', katakana: 'イ', mnemonic: 'い + イ = 以（i）', scene: '"以" 字拆分，联想 "一个人"（い）', pronunciation: 'i' },
        { hiragana: 'う', katakana: 'ウ', mnemonic: '驼背（う）剪宝盖头（ウ）哭', scene: '"呜呜呜，驼背剪头变\'宝盖头\'！"（委屈哭腔）', pronunciation: 'u' },
        { hiragana: 'え', katakana: 'エ', mnemonic: '元（え）旦要工（エ）作', scene: '"欸？元旦还要工作？！"（打工人叹息）', pronunciation: 'e' },
        { hiragana: 'お', katakana: 'オ', mnemonic: '魔术（お）师才（オ）来', scene: '"哦！魔术师明天才来！"（期待语气）', pronunciation: 'o' },
      ]
    },
    {
      title: 'か行',
      mnemonics: [
        { hiragana: 'か', katakana: 'カ', mnemonic: '卡（ka）住了，快加（カ）', scene: '"咔！卡住了，快用\'力\'撬！"（用力动作）', pronunciation: 'ka' },
        { hiragana: 'き', katakana: 'キ', mnemonic: '手（キ）拿木棍敲石头（き）key', scene: '"key～木棍敲石头的声音！"（拟声词）', pronunciation: 'ki' },
        { hiragana: 'く', katakana: 'ク', mnemonic: '小于（く）哭（ku）看夕阳（ク）', scene: '"夕阳下，小于哭着说\'好苦（ku）\'！"', pronunciation: 'ku' },
        { hiragana: 'け', katakana: 'ケ', mnemonic: '十字架克（ke）介（ケ）的左脚', scene: '"十字架砸掉\'介\'的左脚，咳（ke）！"', pronunciation: 'ke' },
        { hiragana: 'こ', katakana: 'コ', mnemonic: '口（こ）可（コ）乐', scene: '"咕咚！喝口可乐（ko）～"', pronunciation: 'ko' },
      ]
    },
    {
      title: 'さ行',
      mnemonics: [
        { hiragana: 'さ', katakana: 'サ', mnemonic: '草 (サ) 地有傻（sa）×(さ)', scene: '"草地上画个\'×\'，傻（sa）瓜专属座位！"', pronunciation: 'sa' },
        { hiragana: 'し', katakana: 'シ', mnemonic: '吸（shi）管（し）喝水（シ）', scene: '"吸溜～用吸管喝水（shi）！"（喝水动作）', pronunciation: 'shi' },
        { hiragana: 'す', katakana: 'ス', mnemonic: '小（su）学三角（ス）上吊（す）', scene: '"三角函数太难，小苏（su）上吊啦！"', pronunciation: 'su' },
        { hiragana: 'せ', katakana: 'セ', mnemonic: '小世 (せ) 也 (セ) 好 say（se）', scene: '"小世说\'Yes（se）！\'"（英文谐音）', pronunciation: 'se' },
        { hiragana: 'そ', katakana: 'ソ', mnemonic: '小飞嗖（so）翅膀 (ソ) 反头上', scene: '"嗖～小飞侠反戴翅膀（so）当头盔！"', pronunciation: 'so' },
      ]
    },
    {
      title: 'た行',
      mnemonics: [
        { hiragana: 'た', katakana: 'タ', mnemonic: '他（ta）太（た）看夕（タ）阳', scene: '"他太太（ta）爱看夕阳（タ）！"', pronunciation: 'ta' },
        { hiragana: 'ち', katakana: 'チ', mnemonic: '小 5（ち）被射穿赔七（チ）千', scene: '"5（ち）头上中箭，赔七千（chi）元！"', pronunciation: 'chi' },
        { hiragana: 'つ', katakana: 'ツ', mnemonic: '吃（tsu）龙虾（つ）吧唧（ツ）', scene: '"吧唧！吃龙虾（tsu）钳的声音～"', pronunciation: 'tsu' },
        { hiragana: 'て', katakana: 'テ', mnemonic: '小 2（て）倒贴 (te) 一元 (テ)', scene: '"2（て）元商品倒贴卖，贴（te）心！"', pronunciation: 'te' },
        { hiragana: 'と', katakana: 'ト', mnemonic: '脱（to）落树枝（ト）插石头（と）', scene: '"树枝（to）脱落，插石头啦！"', pronunciation: 'to' },
      ]
    },
    {
      title: 'な行',
      mnemonics: [
        { hiragana: 'な', katakana: 'ナ', mnemonic: '大 (ナ) 脚被那 (na) 蛇吃 (な)', scene: '"大蛇吃掉\'那\'的右脚（ナ），呐（na）！"', pronunciation: 'na' },
        { hiragana: 'に', katakana: 'ニ', mnemonic: '仁（に）没头发好二（ニ）', scene: '"仁兄没头发，像二（ni）傻子！"', pronunciation: 'ni' },
        { hiragana: 'ぬ', katakana: 'ヌ', mnemonic: '不好（ぬ）又（ヌ）成房奴', scene: '"又（nu）当房奴，心情好怒（nu）！"', pronunciation: 'nu' },
        { hiragana: 'ね', katakana: 'ネ', mnemonic: '权（ね）贵衣（ネ）食无忧', scene: '"权贵们\'衣\'食无忧，ne～"（羡慕语气）', pronunciation: 'ne' },
        { hiragana: 'の', katakana: 'ノ', mnemonic: 'NO（の）树倒压电线杆（ノ）', scene: '"NO！树倒压电线杆（no）！"（惊恐喊叫）', pronunciation: 'no' },
      ]
    },
    {
      title: 'は行',
      mnemonics: [
        { hiragana: 'は', katakana: 'ハ', mnemonic: '海王（は）拿八（ハ）宝粥', scene: '"海王举八宝粥（ha），哈！干杯！"', pronunciation: 'ha' },
        { hiragana: 'ひ', katakana: 'ヒ', mnemonic: '比（ヒ）跳绳（ひ）赢了', scene: '"嘿！跳绳比赛赢啦（hi）！"（欢呼）', pronunciation: 'hi' },
        { hiragana: 'ふ', katakana: 'フ', mnemonic: '不（ふ）小心吹飞帽（フ）', scene: '"呼～帽子（fu）被吹飞啦！"（吹气声）', pronunciation: 'fu' },
        { hiragana: 'へ', katakana: 'ヘ', mnemonic: '弯弯眉毛（へ）（ヘ）', scene: '"欸？这眉毛（he）怎么弯弯曲曲？"', pronunciation: 'he' },
        { hiragana: 'ほ', katakana: 'ホ', mnemonic: '海王抢禾（ホ）的帽（ほ）', scene: '"霍！海王抢走禾苗（ho）的帽子！"', pronunciation: 'ho' },
      ]
    },
    {
      title: 'ま行',
      mnemonics: [
        { hiragana: 'ま', katakana: 'マ', mnemonic: '妈（ま）赶末（マ）班车', scene: '"妈妈（ma）喊：\'末班车来啦（ma）！\'"', pronunciation: 'ma' },
        { hiragana: 'み', katakana: 'ミ', mnemonic: '21（み）岁摸猫（ミ）胡须', scene: '"21 岁少女摸猫咪（mi）胡须，咪～"', pronunciation: 'mi' },
        { hiragana: 'む', katakana: 'ム', mnemonic: '小牧（む）没钓（ム）到鱼', scene: '"小牧（mu）钓鱼空竿，慕（mu）了！"', pronunciation: 'mu' },
        { hiragana: 'め', katakana: 'メ', mnemonic: '女（め）神拒绝（メ）表白', scene: '"哎（me），表白被拒，心（メ）碎！"', pronunciation: 'me' },
        { hiragana: 'も', katakana: 'モ', mnemonic: '毛（も）先生头发被摸（モ）没', scene: '"摸（mo）秃毛先生，变矮（モ）了！"', pronunciation: 'mo' },
      ]
    },
    {
      title: 'や行、ら行、わ行',
      mnemonics: [
        { hiragana: 'や', katakana: 'ヤ', mnemonic: '也（や）（ヤ）很好吃呀（ya）', scene: '"呀！鸭舌（ya）好好吃！"（吃货感叹）', pronunciation: 'ya' },
        { hiragana: 'ゆ', katakana: 'ユ', mnemonic: '邮 (yo) 轮 (ユ) 捕渔 (ゆ）', scene: '"邮轮（yu）用叉子（ユ）叉鱼！"', pronunciation: 'yu' },
        { hiragana: 'よ', katakana: 'ヨ', mnemonic: '上（よ）山（ヨ）了哟（yo）', scene: '"哟（yo）！上山（yo）啦！"', pronunciation: 'yo' },
        { hiragana: 'ら', katakana: 'ラ', mnemonic: '5（ら）≥（ラ）4 啦（ra）', scene: '"5 大于 4 啦（ra）！"（数学符号联想）', pronunciation: 'ra' },
        { hiragana: 'り', katakana: 'リ', mnemonic: '小李（ri）有大长腿（り）（リ）', scene: '"小李（ri）秀长腿（ri），哩～"', pronunciation: 'ri' },
        { hiragana: 'る', katakana: 'ル', mnemonic: '小露（lu）卷舌（る）会儿（ル）', scene: '"小露（ru）卷舌说\'ル～\'"（卖萌语气）', pronunciation: 'ru' },
        { hiragana: 'れ', katakana: 'レ', mnemonic: '不想送礼（れ），心 (レ) 累（re）', scene: '"送礼好累（re），心（re）累啊！"', pronunciation: 're' },
        { hiragana: 'ろ', katakana: 'ロ', mnemonic: '小罗（ro）村有 3（ろ）口（ロ）井', scene: '"小罗（ro）村有 3 口井（ro）！"', pronunciation: 'ro' },
        { hiragana: 'わ', katakana: 'ワ', mnemonic: '哇（wa）！书（わ）有 17（ワ）花', scene: '"哇！书上有 17 朵花（wa）！"', pronunciation: 'wa' },
        { hiragana: 'を', katakana: 'ヲ', mnemonic: '传菜刀别让刀尖（ヲ）朝人哦', scene: '"递刀时\'哦（wo）\'，刀尖别朝人！"', pronunciation: 'wo' },
        { hiragana: 'ん', katakana: 'ン', mnemonic: '嗯（h）！h（ん）先生高冷（ン）', scene: '"嗯～高冷先生躲门（n）后！"（鼻音）', pronunciation: 'n' },
      ]
    }
  ];

  const tipsData = [
    '**分组记忆**：每天记2-3行，配合手写加深印象。',
    '**联想画面**：用谐音构建具体场景（如"あ=啊！阿姨喊你"）。',
    '**对比平片假名**：观察字形关联（如"さ=サ"像撒花的动作）。',
    '**循环巩固**：每天复习前一天内容，用卡片自测发音和字形。',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-4">
            速记假名
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            通过谐音和场景联想快速记忆日语假名，让学习变得轻松有趣
          </p>
        </div>

        <div className="space-y-16">
          {kanaData.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className="transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 border-b border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-100 flex items-center">
                    <span className="mr-3 text-3xl">{section.mnemonics[0].hiragana}</span>
                    {section.title}
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-900">
                        {section.title.includes('や行') && (
                          <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            行
                          </th>
                        )}
                        <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          平假名 + 联想
                        </th>
                        <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          片假名 + 联想
                        </th>
                        <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          发音
                        </th>
                        <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          记忆画面 / 口诀
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {section.mnemonics.map((item, itemIndex) => (
                        <tr 
                          key={itemIndex} 
                          className="transition-colors duration-200 hover:bg-gray-50"
                        >
                          {section.title.includes('や行') && (
                            <td className="px-8 py-5 whitespace-nowrap">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                {itemIndex < 3 ? 'や' : itemIndex < 8 ? 'ら' : 'わ'}
                              </span>
                            </td>
                          )}
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="text-2xl font-medium text-gray-900 mr-2">{item.hiragana}</span>
                              <span className="text-gray-700">{item.mnemonic}</span>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="text-2xl font-medium text-gray-900 mr-2">{item.katakana}</span>
                              <span className="text-gray-700">{item.mnemonic}</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                              {item.pronunciation}
                            </span>
                          </td>
                          <td className="px-8 py-5">
                            <span className="text-gray-600">{item.scene}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                记忆技巧总结
              </h2>
            </div>
            <div className="px-8 py-8">
              <ul className="space-y-6">
                {tipsData.map((tip, index) => (
                  <li 
                    key={index} 
                    className="flex items-start group transition-all duration-300 hover:bg-gray-50 p-4 rounded-xl"
                  >
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </span>
                    <p 
                      className="ml-4 text-gray-700 text-lg" 
                      dangerouslySetInnerHTML={{ 
                        __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>') 
                      }}
                    ></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 