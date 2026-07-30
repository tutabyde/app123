import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './authRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor en puerto ${process.env.PORT}`);
});