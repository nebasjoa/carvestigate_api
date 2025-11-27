// src/services/user.service.js
import * as carModel from '../models/cars.model.js';

export async function listCars() {
  return carModel.findAll();
}

export async function getCarById(id) {
  return carModel.findById(id);
}

export async function createCar(data) {
  // place for validation / business rules
  return carModel.insert(data);
}
