// src/controllers/user.controller.js
import * as carService from '../services/cars.service.js';

export async function listCars(req, res, next) {
  try {
    const users = await carService.listCars();
    res.json({ users });
  } catch (err) {
    next(err);
  }
}

export async function getCarById(req, res, next) {
  try {
    const user = await carService.getCarById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Car not found' });
    res.json({ user });
  } catch (err) {
    next(err);
  }
}

export async function createCar(req, res, next) {
  try {
    const user = await carService.createUser(req.body);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
}
