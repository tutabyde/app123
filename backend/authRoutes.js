import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import authRoutes from "./authRoutes.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const JWT_SECRET = process.env.JWT_SECRET || '2371dcbb34a3167d62a3fb9e01609421013845f4dad324bbfa72f03092fb5be9';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

// REGISTRO
router.post('/register', async (req, res) => {
  const { invitationCode, phone, password, withdrawPassword } = req.body;

  if (!invitationCode || !phone || !password || !withdrawPassword) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  if (phone.length !== 9) {
    return res.status(400).json({ message: 'Número de celular debe tener 9 números' });
  }

  if (password.length !== 6 || withdrawPassword.length !== 6) {
    return res.status(400).json({ message: 'Contraseñas deben tener 6 números' });
  }

  try {
    const userExists = await pool.query(
      'SELECT * FROM users WHERE phone = $1 OR invitation_code = $2',
      [phone, invitationCode]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'Número de celular ya registrado' });
    }

    const result = await pool.query(
      'INSERT INTO users (invitation_code, phone, password, withdrawal_password) VALUES ($1, $2, $3, $4) RETURNING id, invitation_code, phone',
      [invitationCode, phone, password, withdrawPassword]
    );

    const user = result.rows[0];
    const token = jwt.sign(
      { id: user.id, phone: user.phone },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        id: user.id,
        invitationCode: user.invitation_code,
        phone: user.phone
      }
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ message: 'Número de celular y contraseña son requeridos' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE phone = $1',
      [phone]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Número de celular o contraseña incorrectos' });
    }

    const user = result.rows[0];
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Número de celular o contraseña incorrectos' });
    }

    const token = jwt.sign(
      { id: user.id, phone: user.phone },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Sesión iniciada exitosamente',
      token,
      user: {
        id: user.id,
        invitationCode: user.invitation_code,
        phone: user.phone
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// GET PERFIL
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, invitation_code, phone FROM users WHERE id = $1',
      [req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const user = result.rows[0];

    res.json({
      user: {
        id: user.id,
        invitationCode: user.invitation_code,
        phone: user.phone
      }
    });
  } catch (error) {
    console.error('Error obteniendo perfil:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

export default router;