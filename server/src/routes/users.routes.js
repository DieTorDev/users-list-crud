const express = requiere('express');
const userRoutes = express.Router();

const controller = require('../controllers/users.controller');

userRoutes.get('/', controller.getUsers);
