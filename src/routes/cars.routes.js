// src/routes/user.routes.js
import { Router } from 'express';
import * as carController from '../controllers/cars.controller.js';

const router = Router();

router.get('/', carController.listCars);
router.get('/:id', carController.getCarById);
router.get('/:brand/:model', carController.getCarByBrandModel);
router.get('/:brand/:model/:year', carController.getCarByBrandModelYear);
router.post('/', carController.createCar);

export default router;
