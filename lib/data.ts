// 纯静态数据 - 不依赖任何 Node.js 模块
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

// 导出静态数据（用于静态页面）
export const staticData: TrendingData = {
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