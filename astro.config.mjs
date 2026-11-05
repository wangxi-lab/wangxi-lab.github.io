import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wangxi-lab.github.io',
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'hover',
  },
  markdown: {
    gfm: true,
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
