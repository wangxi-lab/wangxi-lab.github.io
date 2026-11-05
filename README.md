# 一课一练 · wangxi-lab

个人站点，地址 [https://wangxi-lab.github.io](https://wangxi-lab.github.io)。单页介绍加上两篇 Claude 笔记，用 [Astro](https://astro.build) 生成静态文件，由 GitHub Pages 托管。

## 本地运行

需要 Node.js 20 或更新版本。

```bash
npm ci
npm run dev
```

开发服务器默认在 [http://localhost:4321](http://localhost:4321)。

生产构建和本地预览：

```bash
npm run build
npm run preview
```

`npm run build` 会把站点输出到 `dist/`。

## 改内容

- 首页文案和公开链接：`src/data/site.ts`
- 文章：`src/content/posts/` 下的 Markdown。前置信息需要 `title`、`date`、`excerpt`，可选 `updated`、`tags`、`categories`
- 样式：`src/styles/global.css`

新文章保存后，首页写作区和 `/posts/<文件名>/` 会一起生成。

## 部署

推送到 `main` 后，GitHub Actions 工作流 `.github/workflows/buildBlog.yml` 会：

1. 用 Node.js 20 执行 `npm ci` 和 `npm run build`
2. 把 `dist/` 发布到 `gh-pages` 分支

Pull Request 只跑构建，不部署。GitHub Pages 需要继续使用 `gh-pages` 分支作为发布来源，和以前的 Hexo 站点一样。

`public/.nojekyll` 会进入 `dist/`，避免 Pages 再用 Jekyll 处理这些文件。

旧文章地址会跳到新页面：

- `/post/claude-experience-13bcx1.html` → `/posts/claude-experience/`
- `/post/claude-code-best-practices-official-qedrk.html` → `/posts/claude-code-best-practices/`
- `/about` 与 `/about/` → `/#about`
- `/archives`、`/tags`、`/categories` 会先补上结尾斜杠，再进 `/posts/`
- `/posts` → `/posts/`
