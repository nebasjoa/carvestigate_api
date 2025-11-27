// src/app.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';

const app = express();

// Global middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// API routes
app.use('/api', routes);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

export default app;
