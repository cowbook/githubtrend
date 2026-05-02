import axios from 'axios';
import * as cheerio from 'cheerio';

export interface TrendingRepo {
  name: string;
  description: string;
  language: string;
  stars: string;
  todayStars: string;
  forks: string;
  author: string;
  authorUrl: string;
  repoUrl: string;
  avatarUrl: string;
}

export interface TrendingData {
  date: string;
  repos: TrendingRepo[];
  categories: string[];
}

const GITHUB_TRENDING_URL = 'https://github.com/trending';

export async function fetchTrending(options: {
  language?: string;
  since?: 'daily' | 'weekly' | 'monthly';
} = {}): Promise<TrendingData> {
  const params = new URLSearchParams();
  if (options.language) {
    params.set('l', options.language);
  }
  if (options.since) {
    params.set('since', options.since);
  }

  const url = `${GITHUB_TRENDING_URL}${params.toString() ? '?' + params.toString() : ''}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      timeout: 30000,
    });

    const $ = cheerio.load(response.data);
    const repos: TrendingRepo[] = [];
    const categories: string[] = [];

    // 解析编程语言分类
    $('.programming-lang a').each((_, el) => {
      const lang = $(el).text().trim();
      if (lang && !categories.includes(lang)) {
        categories.push(lang);
      }
    });

    // 解析仓库列表
    $('article.Box-row').each((_, el) => {
      const article = $(el);

      // 获取作者和仓库名
      const authorLink = article.find('h2 a').first();
      const authorAndRepo = authorLink.attr('href') || '';
      const parts = authorAndRepo.split('/').filter(Boolean);
      const author = parts[0] || '';
      const repoName = parts[1] || '';

      // 获取描述
      const descriptionEl = article.find('p');
      const description = descriptionEl.text().trim() || '暂无描述';

      // 获取编程语言
      const languageEl = article.find('[itemprop="programmingLanguage"]');
      const language = languageEl.text().trim() || 'Unknown';

      // 获取 stars
      const statsEl = article.find('a.Link--muted');
      let stars = '0';
      let todayStars = '0';
      let forks = '0';

      statsEl.each((i, stat) => {
        const text = $(stat).text().trim();
        if (text.includes('star')) {
          const match = text.replace(/,/g, '').match(/([\d.]+)/);
          if (match) {
            if (i === 0) stars = match[1];
            else if (i === 2) todayStars = match[1];
          }
        }
        if (text.includes('fork')) {
          const match = text.replace(/,/g, '').match(/([\d.]+)/);
          if (match) forks = match[1];
        }
      });

      repos.push({
        name: repoName,
        description,
        language,
        stars,
        todayStars,
        forks,
        author,
        authorUrl: `https://github.com/${author}`,
        repoUrl: `https://github.com/${author}/${repoName}`,
        avatarUrl: `https://github.com/${author}.png?size=40`,
      });
    });

    return {
      date: new Date().toISOString().split('T')[0],
      repos,
      categories,
    };
  } catch (error) {
    console.error('Failed to fetch GitHub trending:', error);
    throw error;
  }
}

// 导出静态数据（用于静态页面）
export const staticData = {
  date: new Date().toISOString().split('T')[0],
  repos: [
    {
      name: 'ChatGPT-Next-Web',
      description: '🎉 One-Click to get a well-designed cross-platform ChatGPT web UI, with lots of awesome features.',
      language: 'TypeScript',
      stars: '62.5k',
      todayStars: '+1.2k',
      forks: '45.2k',
      author: 'Yidadaa',
      authorUrl: 'https://github.com/Yidadaa',
      repoUrl: 'https://github.com/Yidadaa/ChatGPT-Next-Web',
      avatarUrl: 'https://github.com/Yidadaa.png?size=40',
    },
    {
      name: 'awesome-chatgpt-prompts',
      description: 'This repo includes ChatGPT prompt curation for use with the official ChatGPT model.',
      language: 'Python',
      stars: '45.8k',
      todayStars: '+800',
      forks: '12.3k',
      author: 'fabiwolff',
      authorUrl: 'https://github.com/fabiwolff',
      repoUrl: 'https://github.com/fabiwolff/awesome-chatgpt-prompts',
      avatarUrl: 'https://github.com/fabiwolff.png?size=40',
    },
    {
      name: 'public-apis',
      description: 'A collective list of free APIs',
      language: 'Python',
      stars: '223k',
      todayStars: '+500',
      forks: '24.5k',
      author: 'public-apis',
      authorUrl: 'https://github.com/public-apis',
      repoUrl: 'https://github.com/public-apis/public-apis',
      avatarUrl: 'https://github.com/public-apis.png?size=40',
    },
    {
      name: 'free-programming-books',
      description: 'Freely available programming books',
      language: 'Unknown',
      stars: '280k',
      todayStars: '+300',
      forks: '55k',
      author: 'ebookfoundation',
      authorUrl: 'https://github.com/ebookfoundation',
      repoUrl: 'https://github.com/ebookfoundation/free-programming-books',
      avatarUrl: 'https://github.com/ebookfoundation.png?size=40',
    },
    {
      name: 'build-your-own-x',
      description: 'Build your own (insert technology here)',
      language: 'Unknown',
      stars: '185k',
      todayStars: '+600',
      forks: '18k',
      author: 'codecrafters-io',
      authorUrl: 'https://github.com/codecrafters-io',
      repoUrl: 'https://github.com/codecrafters-io/build-your-own-x',
      avatarUrl: 'https://github.com/codecrafters-io.png?size=40',
    },
    {
      name: 'vscode',
      description: 'Visual Studio Code - Open Source IDE based on Electron',
      language: 'TypeScript',
      stars: '155k',
      todayStars: '+400',
      forks: '28k',
      author: 'microsoft',
      authorUrl: 'https://github.com/microsoft',
      repoUrl: 'https://github.com/microsoft/vscode',
      avatarUrl: 'https://github.com/microsoft.png?size=40',
    },
    {
      name: 'react',
      description: 'The library for web and native user interfaces.',
      language: 'JavaScript',
      stars: '225k',
      todayStars: '+200',
      forks: '46k',
      author: 'facebook',
      authorUrl: 'https://github.com/facebook',
      repoUrl: 'https://github.com/facebook/react',
      avatarUrl: 'https://github.com/facebook.png?size=40',
    },
    {
      name: 'typescript',
      description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.',
      language: 'TypeScript',
      stars: '95k',
      todayStars: '+150',
      forks: '12k',
      author: 'microsoft',
      authorUrl: 'https://github.com/microsoft',
      repoUrl: 'https://github.com/microsoft/TypeScript',
      avatarUrl: 'https://github.com/microsoft.png?size=40',
    },
  ],
  categories: ['TypeScript', 'Python', 'JavaScript', 'Go', 'Rust', 'Java', 'C++'],
};