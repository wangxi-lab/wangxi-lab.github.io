export const site = {
  name: '一课一练',
  handle: 'wangxi-lab',
  person: 'wangxi',
  url: 'https://wangxi-lab.github.io',
  title: '一课一练 · wangxi-lab',
  description: '一课一练的个人站点。程序员，记录 AI 与技术实践。',
  lead: '程序员。把 AI 与 Claude 的用法拆成可以跟着读的一课。',
  subtitle: 'wangxi-lab · AI 与技术实践',
  bio: 'talk is cheap, show me the code',
  role: '程序员',
  interests: ['编程', '羽毛球'],
  focuses: ['AI Coding', '工程实践'],
  email: 'wx_youx@163.com',
  github: 'https://github.com/wangxi-lab',
};

export const nav = [
  { id: 'practice', label: '一课', href: '/#practice' },
  { id: 'writing', label: '文章', href: '/#writing' },
  { id: 'lab', label: '项目', href: '/#lab' },
  { id: 'about', label: '关于', href: '/#about' },
];

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Shanghai',
  }).format(date);
}

/** Rough Chinese reading time: about 450 non-space characters per minute. */
export function readingMinutes(body: string | undefined) {
  const count = (body ?? '').replace(/\s+/g, '').length;
  return Math.max(1, Math.round(count / 450));
}

export type PostSummary = {
  title: string;
  href: string;
  date: Date;
  minutes: number;
  category: string;
  excerpt: string;
};
