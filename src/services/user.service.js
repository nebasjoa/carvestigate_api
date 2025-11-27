// src/services/user.service.js
import * as userModel from '../models/user.model.js';

export async function listUsers() {
  return userModel.findAll();
}

export async function getUserById(id) {
  return userModel.findById(id);
}

export async function createUser(data) {
  // place for validation / business rules
  return userModel.insert(data);
}
