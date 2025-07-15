'use client'
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link'; // 导入 Link 组件

export default function Home() {
  const router = useRouter();
  
  const pathname = usePathname(); // 获取当前路径

  // 二级导航项
  const navs = [
    { label: '五十音图', path: '/hiragana' },
    { label: '速记假名', path: '/study/kana-mnemonics' },
    { label: '刷题', path: '/practice/links' },
    { label: '默写', path: '/study/kana-quiz' },
    { label: '游戏', path: '/game' },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* 主页背景图横幅 */}
      <div
        className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center select-none group"
      >
        <img
          src="/banner/banner.png"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90 -z-10 transition-all duration-300 group-hover:scale-105 group-active:scale-95 cursor-pointer"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">欢迎来到日语学习平台</h1>
          <p className="text-lg md:text-xl text-white drop-shadow">日本語の勉強を始めましょう</p>
        </div>

        {/* 二级导航栏 - 放在图片上方 */}
        <nav className="absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-20 z-20">
          <div className="container mx-auto px-4">
            <ul className="flex justify-around items-center w-full py-2">
              {navs.map((item) => (
                <li key={item.path} className="flex-1 text-center">
                  <button
                    onClick={() => router.push(item.path)}
                    className={`px-4 py-3 transition-all duration-200 w-full h-12 flex items-center justify-center ${pathname === item.path ? 'bg-white bg-opacity-30 text-white font-semibold shadow-sm' : 'text-white hover:bg-transparent hover:text-white'} hover:text-lg`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

      </div>

      {/* 日语介绍区块 */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">关于日语</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            日语（日本語 Nihongo?）是日本国的官方语言。全球有约1.3亿人使用日语，主要集中在日本列岛上。日语的书写系统独特，结合了汉字（从中国引入）、平假名和片假名（均为表音文字）。语法上，日语是一种主语-宾语-谓语（SOV）结构的语言，其助词系统用来标记句子成分之间的关系。学习日语不仅能让你了解日本文化，还能打开通往动漫、漫画、游戏和电影等丰富世界的大门。无论你是出于旅行、工作还是兴趣，学习日语都将是一段充满乐趣和挑战的旅程。
          </p>
          <h3 className="text-xl font-bold mb-3">历史与演变</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            日语的历史可以追溯到古代，大致分为上古日语、中古日语、中世日语和近世日语、现代日语等阶段。上古日语受到早期汉字传入的强烈影响。奈良时代（710年-794年）和平安时代（794年-1185年）是中古日语时期，汉字和汉文在日本的地位非常高，同时期也发展出了万叶假名，并在此基础上创造了平假名和片假名。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            进入镰仓时代（1185年-1333年）和室町时代（1336年-1573年）的中世日语时期，语音、词汇和语法都发生了一些变化。江户时代（1603年-1867年）的近世日语进一步发展，现代日语则是在明治维新（1868年）以后，经过标准化和推广形成的，吸收了大量西方词汇。
          </p>
          <h3 className="text-xl font-bold mb-3">传教士的影响</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            16世纪末至17世纪初，来日的基督教传教士在研究和传播日语方面发挥了独特作用。他们出于传教目的，深入学习日语，并用罗马字母拼写日语，编写了语法书（如《日本语法》）和词典（最著名的是《日葡辞书》，即日语-葡萄牙语词典）。这些著作不仅是传教士学习日语的工具，也为后世研究当时日语的语音、词汇和语法提供了宝贵资料。他们还引入了西方的印刷技术，用活字印刷术出版了一些日语书籍。这些活动虽然主要服务于传教，但也客观上促进了日语的记录和传播方式的多样化。
          </p>
          <h3 className="text-xl font-bold mb-3">日语与中文的关系</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            日语和中文之间有着深远的历史渊源。在古代，汉字通过朝鲜半岛传入日本，成为日语主要的书写符号。大量中文词汇也被引入日语，构成了日语词汇的重要组成部分，这些词汇被称为"汉字词"或"汉语词"。但是日语和中文在语言结构上存在差异：日语是黏着语，通过在词干后添加助词和词尾来表达语法功能，语序通常是主语-宾语-谓语（SOV）；而中文是分析语，主要依靠语序和虚词，语序通常是主语-谓语-宾语（SVO）。因此，尽管共享汉字，但两种语言的语法和发音体系截然不同。所以同学们理解这种关系有助于更好地学习日语词汇和书写系统。
          </p>
          <h3 className="text-xl font-bold mb-3">书写系统的发展</h3>
          <p className="text-gray-700 leading-relaxed">
            日语的书写系统是其独特之处。最早日本人使用汉字书写，后来发展出利用汉字发音或意义来书写日语的"万叶假名"。平安时代，在万叶假名的草书和偏旁基础上，分别创造了用于书写日语词汇和语法的平假名，以及用于标注汉字读音和书写外来语、拟声拟态词的片假名。现代日语主要使用汉字、平假名和片假名，同时罗马字也被广泛用于标识和输入。
          </p>
        </div>
      </section>
    </div>
  );
} 