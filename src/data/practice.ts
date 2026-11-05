export type Practice = {
  title: string;
  level: '入门' | '进阶';
  /** Minutes estimated from that section's text at about 450 characters per minute. */
  minutes: number;
  tags: string[];
  note: string;
  source: string;
  href: string;
};

/** Lessons mapped from the two existing Claude posts. Anchors match the rendered heading ids. */
export const practice: Practice[] = [
  {
    title: '认识 Claude 与 Claude Code',
    level: '入门',
    minutes: 1,
    tags: ['AI', 'Claude'],
    note: '原文第一节：Claude 能做什么，以及 Sonnet 和 Opus 的差别。',
    source: '《Claude使用体验》',
    href: '/posts/claude-experience/#1-claude-是什么',
  },
  {
    title: '在 Windows 上安装并配置',
    level: '入门',
    minutes: 3,
    tags: ['工具', 'Claude'],
    note: '安装 Node.js 和 Claude Code，再配上令牌与接口地址。',
    source: '《Claude使用体验》',
    href: '/posts/claude-experience/#22-claude-安装',
  },
  {
    title: '把需求写成可执行计划',
    level: '进阶',
    minutes: 5,
    tags: ['AI', '工程'],
    note: '用一份清单把产品需求收成下一步可以交给 AI 的提示。',
    source: '《Claude使用体验》',
    href: '/posts/claude-experience/#23-需求分析',
  },
  {
    title: '按清单小步写代码',
    level: '进阶',
    minutes: 2,
    tags: ['前端', 'Claude'],
    note: '一次只做一个小步骤，写完就检查，并看最后的实现效果。',
    source: '《Claude使用体验》',
    href: '/posts/claude-experience/#24-代码开发',
  },
  {
    title: '用 CLAUDE.md 记住项目规则',
    level: '入门',
    minutes: 2,
    tags: ['Claude', '工程'],
    note: '把常用命令、代码风格和仓库约定放进 Claude 每次都会读的文件。',
    source: '《Claude Code 最佳实践（官方）》',
    href: '/posts/claude-code-best-practices/#a-创建-claudemd-文件',
  },
  {
    title: '先探索和规划，再编码提交',
    level: '进阶',
    minutes: 2,
    tags: ['工程', 'Claude'],
    note: '先读相关文件并写出计划，确认之后再实现、提交。',
    source: '《Claude Code 最佳实践（官方）》',
    href: '/posts/claude-code-best-practices/#a-探索规划编码提交',
  },
];
