module.exports = (req: any, res: any) => {
  // Direct health check response for Vercel
  const url = req.url || '/';
  if (url === '/' || url === '/api' || url === '/api/health' || url === '/health') {
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
    console.error('Serverless App Execution Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Serverless App Execution Error',
      message: error?.message || String(error),
      stack: error?.stack,
    });
  }
};
