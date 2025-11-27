// src/controllers/user.controller.js
import * as userService from '../services/user.service.js';

export async function getAllUsers(req, res, next) {
  try {
    const users = await userService.listUsers();
    res.json({ users });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    next(err);
  }
}

export async function createUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
}
