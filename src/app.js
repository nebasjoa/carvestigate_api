// src/app.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import routes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';

const app = express();

// Behind Railway/other proxy
app.set('trust proxy', 1);

// Global middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// 🔹 Global limiter for /v1
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,               // max 100 requests per window per IP
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    message: 'Too many requests from this IP, please try again later.'
  },
  handler: (req, res, next, options) => {
    return res.status(options.statusCode).json({
      message: options.message.message || options.message || 'Too many requests',
      limit: req.rateLimit.limit,
      remaining: req.rateLimit.remaining,
      resetTime: req.rateLimit.resetTime,
    });
  },
});

// 🔹 API routes (limiter MUST come before routes on same path)
app.use('/v1', globalLimiter, routes);
// or:
// app.use('/v1', globalLimiter);
// app.use('/v1', routes);

// 404 handler must be AFTER all routes
app.use(notFound);

// Central error handler MUST be last
app.use(errorHandler);

export default app;
