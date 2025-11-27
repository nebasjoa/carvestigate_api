// src/models/user.model.js
import { pool } from '../config/db.js';

export async function findAll() {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query('SELECT * FROM cars');
    return rows;
  } finally {
    conn.release();
  }
}

export async function findById(id) {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      'SELECT * FROM cars WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  } finally {
    conn.release();
  }
}
