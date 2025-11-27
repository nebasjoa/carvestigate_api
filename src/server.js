// src/server.js
import http from 'http';
import app from './app.js';
import { config } from './config/env.js';

const PORT = config.port || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
