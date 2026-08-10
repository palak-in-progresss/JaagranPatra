const appModule = require('../src/app');
const app = appModule.default || appModule;

module.exports = (req: any, res: any) => {
  if (req.url && req.url.includes('debug=1')) {
    return res.status(200).json({
      url: req.url,
      originalUrl: req.originalUrl,
      headers: req.headers,
    });
  }

  return app(req, res);
};
