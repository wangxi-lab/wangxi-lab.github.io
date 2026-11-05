export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  href: string;
  kicker: string;
  linkLabel: string;
  secondary?: { href: string; label: string };
};

/** Public repos with their own descriptions, plus the demo named in the Claude post. */
export const projects: Project[] = [
  {
    name: 'wangxi-lab.github.io',
    blurb: '个人博客，也就是这个站。',
    stack: ['Astro'],
    href: 'https://github.com/wangxi-lab/wangxi-lab.github.io',
    kicker: '仓库',
    linkLabel: '打开仓库',
  },
  {
    name: 'picture',
    blurb: '图床。说明来自仓库简介。',
    stack: [],
    href: 'https://github.com/wangxi-lab/picture',
    kicker: '仓库',
    linkLabel: '打开仓库',
  },
  {
    name: 'yixi-android',
    blurb: '仓库没有写简介，主语言是 Kotlin。',
    stack: ['Kotlin'],
    href: 'https://github.com/wangxi-lab/yixi-android',
    kicker: '仓库',
    linkLabel: '打开仓库',
  },
  {
    name: '自律重构者',
    blurb: '《Claude使用体验》里的前端练习。文中的计划写的是 Vue 3 和 TypeScript。',
    stack: ['Vue 3', 'TypeScript'],
    href: 'http://47.94.5.222/',
    kicker: '文中演示',
    linkLabel: '打开演示',
    secondary: {
      href: '/posts/claude-experience/#25-实现效果',
      label: '原文',
    },
  },
];
