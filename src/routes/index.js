// src/routes/index.js
import { Router } from 'express';
import userRoutes from './user.routes.js';
import carRoutes from './cars.routes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/cars', carRoutes);
// router.use('/posts', postRoutes); // later

export default router;
