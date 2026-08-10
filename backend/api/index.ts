module.exports = (req: any, res: any) => {
  if (req.url === '/api/health' || req.url === '/health' || req.url === '/') {
    return res.status(200).json({
      success: true,
      message: 'Jaagran Patra Vercel Serverless API is healthy!',
      timestamp: new Date().toISOString(),
    });
  }

  try {
    const app = require('../src/app').default || require('../src/app');
    return app(req, res);
  } catch (error: any) {
    return res.status(500).json({
      error: 'Module Load Exception',
      message: error?.message || String(error),
      stack: error?.stack,
    });
  }
};
