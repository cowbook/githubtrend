'use client';

import { useState } from 'react';

interface HeroProps {
  date: string;
  headline: string;
  intro: string;
}

export default function Hero({ date, headline, intro }: HeroProps) {
  const [showJoke, setShowJoke] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 日期标签 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {date}
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
          {headline.split(' ').map((word, i) => (
            word.startsWith('📊') || word.startsWith('🔥') || word.startsWith('🚀') || word.startsWith('💎') ? (
              <span key={i} className="mr-2">{word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          ))}
        </h1>

        {/* 简介 */}
        <p className="text-lg sm:text-xl text-[var(--foreground)] opacity-70 mb-8 max-w-2xl mx-auto">
          {intro}
        </p>

        {/* 快速操作 */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/trending"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            查看官方 Trending
          </a>
          <button
            onClick={() => setShowJoke(!showJoke)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-medium hover:bg-[var(--foreground)]/5 transition-colors"
          >
            <span className="text-xl">🎭</span>
            {showJoke ? '收起' : '今日吐槽'}
          </button>
        </div>

        {/* 每日吐槽 */}
        {showJoke && (
          <div className="mt-8 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] max-w-xl mx-auto animate-in fade-in slide-in-from-top-4">
            <p className="text-[var(--foreground)] opacity-80 italic">
              💬 今日份程序员精神食粮
            </p>
            <p className="text-lg text-[var(--foreground)] mt-2">
              如果你今天没有 star 这些项目，说明你还不够卷。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}