// src/controllers/user.controller.js
import * as carService from '../services/cars.service.js';

export async function listCars(req, res, next) {
  try {
    const cars = await carService.listCars();
    res.json({ cars });
  } catch (err) {
    next(err);
  }
}

export async function getCarById(req, res, next) {
  try {
    const car = await carService.getCarById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json({ car });
  } catch (err) {
    next(err);
  }
}

export async function createCar(req, res, next) {
  try {
    const car = await carService.createUser(req.body);
    res.status(201).json({ car });
  } catch (err) {
    next(err);
  }
}
