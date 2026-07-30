import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './authRoutes.js';

dotenv.config();

const app = express();


app.use(cors({
  origin: "https://expert-winner-vppr794wr69wfx5qg-5174.app.github.dev",
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "ngrok-skip-browser-warning"
  ]
}));


app.use(express.json());


app.use('/api/auth', authRoutes);


app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor en puerto ${process.env.PORT}`);
});