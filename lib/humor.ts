// 幽默内容生成器 - 纯前端静态版本
import { TrendingRepo } from './data';

interface HumorousDescription {
  title: string;
  summary: string;
  highlights: string[];
  joke: string;
  category: string;
}

// 语言到分类的映射
const languageCategories: Record<string, string> = {
  'TypeScript': '前端/全栈',
  'JavaScript': '前端/全栈',
  'Python': 'AI/数据科学',
  'Go': '云原生/后端',
  'Rust': '系统编程',
  'Java': '企业级后端',
  'C++': '系统/游戏',
  'C': '系统编程',
  'Swift': 'iOS开发',
  'Kotlin': 'Android开发',
  'Ruby': 'Web开发',
  'PHP': 'Web开发',
  'C#': '.NET开发',
  'Dart': '跨平台开发',
  'Shell': '运维/DevOps',
  'Jupyter Notebook': '数据科学/AI',
  'Unknown': '其他',
};

// 语言对应的 emoji
const languageEmoji: Record<string, string> = {
  'TypeScript': '🔶',
  'JavaScript': '🟡',
  'Python': '🐍',
  'Go': '🐹',
  'Rust': '🦀',
  'Java': '☕',
  'C++': '⚙️',
  'C': '🔧',
  'Swift': '🍎',
  'Kotlin': '🟣',
  'Ruby': '💎',
  'PHP': '🐘',
  'C#': '🔵',
  'Dart': '🎯',
  'Shell': '🐚',
  'Jupyter Notebook': '📓',
  'Unknown': '📦',
};

// 幽默标题模板
const titleTemplates = [
  '🔥 {repoName} 杀疯了，今天 star 暴涨 {stars}',
  '💡 等等，{repoName} 是什么神仙项目？',
  '🚀 {repoName} 突然爆火，程序员们都在刷什么？',
  '🤔 我就想知道，{repoName} 是怎么火起来的',
  '📈 {repoName} 今日飙升榜，这个项目有点东西',
  '🎉 程序员圈炸锅了，{repoName} 到底有多牛？',
  '✨ 今天 GitHub 最靓的仔：{repoName}',
  '🎯 {repoName} 凭什么让 10 万程序员疯狂？',
];

// 每日一句
const dailyJokes = [
  "据说每个程序员都有一颗想要造轮子的心，今天这些项目就是证明。",
  "如果你今天没有 star 这些项目，说明你还不够卷。",
  "学习新项目最好的方式是：先 star，再抱怨看不懂。",
  "这些项目告诉我们：有时候加班不是因为活多，而是因为想玩的项目还没 star。",
  "今天的 trending 就是明天的面试题，且 star 且珍惜。",
  "每一行代码都是程序员的心血，每一个 star 都是对开源的热爱。",
  "从 trending 看世界：今天流行什么语言，就知道程序员们在焦虑什么。",
  "如果你还在犹豫要不要 star，说明你还不够心动。",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatStars(stars: string): string {
  if (stars.includes('k') || stars.includes('K')) {
    return parseFloat(stars).toFixed(1) + 'k';
  }
  return stars;
}

function generateHighlights(repo: TrendingRepo): string[] {
  const highlights: string[] = [];

  // 基于语言
  const emoji = languageEmoji[repo.language] || '📦';
  highlights.push(`${emoji} 使用 ${repo.language} 开发`);

  // 基于 stars
  const starNum = parseFloat(repo.stars);
  if (starNum > 100) {
    highlights.push('⭐ 超过 ' + formatStars(repo.stars) + ' 颗星');
  } else if (starNum > 50) {
    highlights.push('⭐ 已收获 ' + formatStars(repo.stars) + ' 颗星');
  }

  // 今日增长
  const todayNum = parseInt(repo.todayStars.replace(/[^0-9]/g, ''));
  if (todayNum > 500) {
    highlights.push('📈 今日暴增 ' + repo.todayStars + ' stars');
  }

  // 基于描述关键词
  const desc = repo.description.toLowerCase();
  if (desc.includes('ai') || desc.includes('chatgpt') || desc.includes('llm')) {
    highlights.push('🤖 AI/大模型 相关');
  }
  if (desc.includes('tool') || desc.includes('cli')) {
    highlights.push('🛠️ 开发者工具');
  }
  if (desc.includes('api') || desc.includes('rest')) {
    highlights.push('🔌 API 相关');
  }

  return highlights.slice(0, 4);
}

function generateSummary(repo: TrendingRepo): string {
  const descriptions = [
    `简而言之：${repo.author} 觉得这个世界需要一个 ${repo.name}，于是就造了。`,
    `${repo.name} 试图解决一个你可能没意识到的问题，直到你看到它。`,
    `看看 ${repo.name}，再看看你的项目，你会明白什么叫「差距」。`,
    `${repo.name} 的出现让同类项目感受到了压力。`,
    `${repo.author} 用 ${repo.name} 证明了：好的创意 + 代码 = 改变世界。`,
    `${repo.name}：因为 ${repo.description.slice(0, 30)}... 所以火了。`,
    `${repo.name} 告诉你什么叫「少即是多」。`,
    `${repo.name} 正在悄悄改变 ${repo.language} 生态。`,
  ];
  return getRandomItem(descriptions);
}

function generateTitle(repo: TrendingRepo, rank: number): string {
  const template = getRandomItem(titleTemplates);
  return template
    .replace('{repoName}', repo.name)
    .replace('{stars}', repo.todayStars);
}

function generateCategory(repo: TrendingRepo): string {
  return languageCategories[repo.language] || '其他';
}

export function generateHumorousContent(repo: TrendingRepo, rank: number): HumorousDescription {
  return {
    title: generateTitle(repo, rank),
    summary: generateSummary(repo),
    highlights: generateHighlights(repo),
    joke: getRandomItem(dailyJokes),
    category: generateCategory(repo),
  };
}

export function generateDailyReport(repos: TrendingRepo[]): {
  date: string;
  headline: string;
  intro: string;
  items: HumorousDescription[];
  footer: string;
} {
  const date = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const headlines = [
    `📊 ${date} GitHub 热榜来袭，这些项目你 star 了吗？`,
    `🔥 今日 GitHub 爆款盘点，第 ${repos.length} 个项目让你意想不到`,
    `🚀 程序员的快乐源泉：今日 GitHub Trending 精选`,
    `💎 GitHub 今日热榜，每一个都值得你花时间了解`,
  ];

  const intros = [
    '今天的 GitHub trending 依然精彩，程序员们不是在写代码，就是在 star 项目的路上。让我们来看看今天有哪些项目值得关注！',
    '又是程序员疯狂「买买买」的一天！GitHub trending 上的这些项目，让你的 star 列表又长了三位数。',
    '不看不知道，一看吓一跳！今天的 GitHub trending 简直是程序员的精神食粮，每一个都让人忍不住点 star。',
    '当代程序员的日常：白天写 bug，晚上 star 项目。今天的 trending 就是你的夜间精神食粮。',
  ];

  const footers = [
    '如果你觉得这些项目有意思，别忘了去 GitHub 给个 star 支持一下开源作者们！',
    '记住：star 是对开源最好的支持。今日份的精神食粮，就到这里。',
    '关注 GitHub trending，让你的技术视野永远不落伍。',
    '今天的 trending 就是明天的面试题，建议收藏！',
  ];

  return {
    date,
    headline: getRandomItem(headlines),
    intro: getRandomItem(intros),
    items: repos.slice(0, 12).map((repo, i) => generateHumorousContent(repo, i + 1)),
    footer: getRandomItem(footers),
  };
}