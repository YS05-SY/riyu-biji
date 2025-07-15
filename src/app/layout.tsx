'use client'
import './globals.css'; // 导入全局样式
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// 定义一级导航链接
const topNavLinks = [
  { label: '首页', href: '/' },
  { label: '学习', href: '/study' },
];

// 固定在顶部的头部组件
function FixedTopHeader() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* 网站标题/Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-800">
          日语学习平台
        </Link>

        {/* 一级导航链接 */}
        <nav>
          <ul className="flex space-x-8">
            {topNavLinks.map((link) => (
              <li key={link.href} style={link.label === '学习' ? { cursor: 'pointer' } : {}}>
                <Link href={link.href} className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 cursor-pointer select-none" style={{ cursor: 'pointer' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// 保留右下角的返回按钮组件
function BackButton() {
  const pathname = usePathname();

  return (
    <button
      onClick={() => window.history.back()}
      className="fixed bottom-4 right-4 bg-black text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-800 transition-colors z-50"
      aria-label="返回上一页"
      title="返回上一页" // 添加 title 属性用于鼠标悬停提示
    >
      &larr;&nbsp;返回 {/* 简单的返回箭头图标加上文字 */}
    </button>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <FixedTopHeader /> {/* 添加固定顶部的头部组件 */}
        <main className="pt-16">{children}</main> {/* Added pt-16 to main content */}
        <BackButton /> {/* 保留右下角的返回按钮 */}
      </body>
    </html>
  );
} 