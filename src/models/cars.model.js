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

export async function findByBrandModel(brand, model) {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      'SELECT * FROM cars WHERE brand = ? AND model = ?',
      [brand, model]
    );
    return rows || null;
  } finally {
    conn.release();
  }
}

export async function findByBrandModelYear(brand, model, year) {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      `
      SELECT *
      FROM cars
      WHERE brand = ?
        AND model = ?
        AND ? BETWEEN manufacture_year_from AND manufacture_year_to
      `,
      [brand, model, year]
    );
    return rows || null;
  } finally {
    conn.release();
  }
}
