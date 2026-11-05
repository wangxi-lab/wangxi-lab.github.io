import { defineConfig } from 'astro/config';
import { rehypeLabCode, remarkShiftHeadings } from './src/plugins/markdown.mjs';

const slashRedirects = {
  '/about': '/about/',
  '/archives': '/archives/',
  '/tags': '/tags/',
  '/categories': '/categories/',
  '/posts': '/posts/',
};

function slashRedirectPlugin() {
  const handler = (req, res, next) => {
    const path = (req.url ?? '').split('?')[0];
    const target = slashRedirects[path];
    if (!target) return next();
    res.statusCode = 302;
    res.setHeader('Location', target);
    res.end();
  };
  return {
    name: 'slash-redirects',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

export default defineConfig({
  site: 'https://wangxi-lab.github.io',
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [slashRedirectPlugin()],
  },
  markdown: {
    gfm: true,
    remarkPlugins: [remarkShiftHeadings],
    rehypePlugins: [rehypeLabCode],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  redirects: {
    '/about/': '/#about',
    '/archives/': '/posts/',
    '/tags/': '/posts/',
    '/categories/': '/posts/',
  },
});
