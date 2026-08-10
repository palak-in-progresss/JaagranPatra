import app from '../src/app';

export default function handler(req: any, res: any) {
  try {
    return app(req, res);
  } catch (err: any) {
    return res.status(500).json({
      error: 'Vercel Function Execution Error',
      message: err?.message || String(err),
      stack: err?.stack,
    });
  }
}
