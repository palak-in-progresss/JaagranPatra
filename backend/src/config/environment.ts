import dotenv from 'dotenv';
dotenv.config();

// JWT secret: must be set explicitly in production. A missing secret would let
// anyone forge login tokens, so the server refuses to start without it.
function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET environment variable must be set in production');
  }
  console.warn('⚠️ JWT_SECRET not set. Using an insecure development-only secret.');
  return 'dev-only-insecure-secret';
}

// Allowed browser origins, e.g. "https://a.vercel.app,https://b.vercel.app".
// Spaces and trailing slashes are cleaned up so small typos don't break CORS.
function getAllowedOrigins(): string[] {
  const raw = process.env.ALLOWED_ORIGINS;
  if (!raw) return ['http://localhost:3000', 'http://localhost:5173'];
  return raw
    .split(',')
    .map((o) => o.trim().replace(/\/+$/, ''))
    .filter(Boolean);
}

export const config = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  allowedOrigins: getAllowedOrigins(),
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: getJwtSecret(),
  zoom: {
    masterUserId: process.env.ZOOM_MASTER_USER_ID || 'me', // Use 'me' for the account owner
  },
} as const;

export const isDevelopment = config.nodeEnv === 'development';
export const isProduction = config.nodeEnv === 'production';
