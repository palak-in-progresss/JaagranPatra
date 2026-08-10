export default function handler(req: any, res: any) {
  return res.status(200).json({
    success: true,
    message: 'Jaagran Patra API is healthy and active!',
    timestamp: new Date().toISOString(),
  });
}
