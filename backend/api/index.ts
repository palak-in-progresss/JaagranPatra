module.exports = (req: any, res: any) => {
  const rawUrl = (req.url || '/').split('?')[0].replace(/\/$/, '');

  // Direct health check response for Vercel
  if (
    rawUrl === '' ||
    rawUrl === '/' ||
    rawUrl === '/api' ||
    rawUrl === '/health' ||
    rawUrl === '/api/health'
  ) {
    return res.status(200).json({
      success: true,
      message: 'Jaagran Patra Vercel Serverless API is healthy!',
      timestamp: new Date().toISOString(),
    });
  }

  try {
    const appModule = require('../src/app');
    const app = appModule.default || appModule;
    return app(req, res);
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: 'Serverless App Execution Error',
      message: error?.message || String(error),
      stack: error?.stack,
    });
  }
};
