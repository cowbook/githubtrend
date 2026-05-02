import { staticData } from '@/lib/data';
import { generateDailyReport } from '@/lib/humor';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrendingList from '@/components/TrendingList';

export default function Home() {
  const report = generateDailyReport(staticData.repos);

  return (
    <div className="min-h-screen flex flex-col">
      <Header date={report.date} />

      <main className="flex-1">
        <Hero
          date={report.date}
          headline={report.headline}
          intro={report.intro}
        />

        {/* 主要内容 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <TrendingList
            repos={staticData.repos}
            title="🔥 今日热榜 Top 12"
          />
        </section>

        {/* 页脚 */}
        <footer className="border-t border-[var(--border)] py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-[var(--foreground)] opacity-70">
                {report.footer}
              </p>
              <div className="flex items-center gap-4 text-sm text-[var(--foreground)] opacity-50">
                <span>数据来源：GitHub Trending</span>
                <span>•</span>
                <a
                  href="https://github.com/cowbook/githubtrend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  参与贡献
                </a>
                <span>•</span>
                <span>Powered by Next.js</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}