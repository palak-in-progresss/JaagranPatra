const appModule = require('../src/app');
const app = appModule.default || appModule;

module.exports = (req: any, res: any) => {
  // Restore original request URL from Vercel edge header if Vercel rewrite stripped it
  const realPath = req.headers['x-matched-path'] || req.headers['x-forwarded-uri'] || req.headers['x-now-route-matches'];
  if (realPath && (req.url === '/api' || req.url === '/' || req.url === '')) {
    req.url = realPath;
  }
  return app(req, res);
};
