import prisma from '../src/config/database';

export default async function handler(req: any, res: any) {
  try {
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    return res.status(200).json({
      success: true,
      message: 'Database connection is live and healthy!',
      dbResult: result,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Database Connection Error',
      message: err?.message || String(err),
      stack: err?.stack,
    });
  }
}
