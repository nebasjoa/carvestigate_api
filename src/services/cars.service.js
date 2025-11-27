// src/services/user.service.js
import * as carModel from '../models/cars.model.js';

export async function listCars() {
  return carModel.findAll();
}

export async function getCarById(id) {
  return carModel.findById(id);
}

export async function getCarByBrandModel(brand, model) {
  return carModel.findByBrandModel(brand, model);
}

export async function getCarByBrandModelYear(brand, model, year) {
  return carModel.findByBrandModelYear(brand, model, year);
}

export async function createCar(data) {
  // place for validation / business rules
  return carModel.insert(data);
}
