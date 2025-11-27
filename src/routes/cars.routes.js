// src/routes/user.routes.js
import { Router } from 'express';
import * as carController from '../controllers/cars.controller.js';

const router = Router();

router.get('/', carController.listCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.createCar);

export default router;
