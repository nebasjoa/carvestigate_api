// src/config/db.js
import { createPool } from 'mariadb';
import { config } from './env.js';

export const pool = createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  port: config.db.port,
  connectionLimit: 10
});

// Test connection
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log('✅ Connected to DB:', config.db.name);
    conn.release();
  } catch (err) {
    console.error('❌ DB connection error:', err.message);
  }
})();
