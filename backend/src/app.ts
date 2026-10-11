import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import { config } from './config/environment';

dotenv.config();

const app = express();

app.set('trust proxy', 1);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser clients (no origin) and the sites we trust.
      if (
        !origin ||
        config.allowedOrigins.includes(origin) ||
        config.allowedOrigins.includes('*')
      ) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Jaagran Patra API Server is running' });
});

app.use('/api', routes);
app.use('/', routes);

export default app;
