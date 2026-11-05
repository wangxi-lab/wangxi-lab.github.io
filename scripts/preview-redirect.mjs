import http from 'node:http';

/** astro preview 在 trailingSlash=always 时会直接返回英文 404，进不了站点跳转页。 */
const slashRedirects = new Map([
  ['/about', '/about/'],
  ['/archives', '/archives/'],
  ['/tags', '/tags/'],
  ['/categories', '/categories/'],
  ['/posts', '/posts/'],
]);

const emit = http.Server.prototype.emit;
http.Server.prototype.emit = function emitWithSlashRedirect(event, ...args) {
  if (event === 'request') {
    const req = args[0];
    const res = args[1];
    const url = req?.url;
    if (typeof url === 'string' && res && !res.headersSent) {
      const queryAt = url.indexOf('?');
      const path = queryAt === -1 ? url : url.slice(0, queryAt);
      const target = slashRedirects.get(path);
      if (target) {
        const query = queryAt === -1 ? '' : url.slice(queryAt);
        res.statusCode = 302;
        res.setHeader('Location', `${target}${query}`);
        res.end();
        return true;
      }
    }
  }
  return emit.call(this, event, ...args);
};
