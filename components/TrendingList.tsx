'use client';

import { useState } from 'react';
import { TrendingRepo } from '@/lib/data';

// 语言颜色映射
const languageColors: Record<string, string> = {
  'TypeScript': '#3178c6',
  'JavaScript': '#f7df1e',
  'Python': '#3572A5',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'Java': '#b07219',
  'C++': '#f34b7d',
  'C': '#555555',
  'Swift': '#F05138',
  'Kotlin': '#A97BFF',
  'Ruby': '#701516',
  'PHP': '#4F5D95',
  'C#': '#178600',
  'Dart': '#00B4AB',
  'Shell': '#89e051',
  'Jupyter Notebook': '#DA5B0B',
  'Unknown': '#8b949e',
};

interface RepoCardProps {
  repo: TrendingRepo;
  rank: number;
}

function formatNumber(num: string): string {
  if (num.includes('k') || num.includes('K')) {
    return num;
  }
  return parseInt(num).toLocaleString();
}

function getLanguageColor(language: string): string {
  return languageColors[language] || '#8b949e';
}

function LanguageBadge({ language }: { language: string }) {
  const color = getLanguageColor(language);
  return (
    <span className="inline-flex items-center gap-1.5 text-sm">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-[var(--foreground)] opacity-80">{language}</span>
    </span>
  );
}

function StarBadge({ count, label }: { count: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm opacity-80">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span>{formatNumber(count)}</span>
      <span className="opacity-60">{label}</span>
    </span>
  );
}

function RepoCard({ repo, rank }: RepoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`
        relative rounded-2xl border p-6 transition-all duration-300 cursor-pointer
        bg-[var(--card-bg)] border-[var(--border)]
        hover:shadow-xl hover:-translate-y-1
        ${isHovered ? 'border-[var(--accent)]' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(repo.repoUrl, '_blank')}
    >
      {/* 排名标签 */}
      <div className={`
        absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center
        text-sm font-bold shadow-lg
        ${rank <= 3 ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' : 'bg-[var(--accent)] text-white'}
      `}>
        {rank}
      </div>

      {/* 作者信息 */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={repo.avatarUrl}
          alt={repo.author}
          className="w-10 h-10 rounded-full border border-[var(--border)]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect fill="%23646464" width="24" height="24"/></svg>';
          }}
        />
        <div className="flex-1 min-w-0">
          <a
            href={repo.authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent)] hover:underline block truncate"
            onClick={(e) => e.stopPropagation()}
          >
            {repo.author}
          </a>
          <a
            href={repo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-[var(--foreground)] hover:text-[var(--accent)] block truncate"
            onClick={(e) => e.stopPropagation()}
          >
            {repo.name}
          </a>
        </div>
      </div>

      {/* 描述 */}
      <p className="text-sm text-[var(--foreground)] opacity-70 mb-4 line-clamp-2">
        {repo.description || '暂无描述'}
      </p>

      {/* 统计信息 */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <LanguageBadge language={repo.language} />
        <StarBadge count={repo.stars} label="stars" />
        <StarBadge count={repo.todayStars} label="今日" />
        <span className="inline-flex items-center gap-1 opacity-60">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {formatNumber(repo.forks)}
        </span>
      </div>

      {/* 热度指示条 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-2xl">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent)] to-transparent"
          style={{ width: `${Math.min(100, parseInt(repo.todayStars) / 10)}%` }}
        />
      </div>
    </article>
  );
}

interface TrendingListProps {
  repos: TrendingRepo[];
  title?: string;
  emptyMessage?: string;
}

export default function TrendingList({ repos, title, emptyMessage = '暂无数据' }: TrendingListProps) {
  if (!repos || repos.length === 0) {
    return (
      <div className="text-center py-12 text-[var(--foreground)] opacity-50">
        {emptyMessage}
      </div>
    );
  }

  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <RepoCard key={`${repo.author}-${repo.name}`} repo={repo} rank={index + 1} />
        ))}
      </div>
    </section>
  );
}