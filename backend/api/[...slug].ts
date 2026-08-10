module.exports = (req: any, res: any) => {
  try {
    const appModule = require('../src/app');
    const app = appModule.default || appModule;
    return app(req, res);
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: 'Express App Initialization Crash',
      message: error?.message || String(error),
      stack: error?.stack,
    });
  }
};
