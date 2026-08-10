const appModule = require('../src/app');
const app = appModule.default || appModule;

module.exports = (req: any, res: any) => {
  return app(req, res);
};
