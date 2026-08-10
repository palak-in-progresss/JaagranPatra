import app from '../src/app';

module.exports = (req: any, res: any) => {
  try {
    return app(req, res);
  } catch (error: any) {
    return res.status(500).json({
      error: 'Vercel Serverless Function Execution Error',
      message: error?.message || String(error),
      stack: error?.stack,
    });
  }
};
