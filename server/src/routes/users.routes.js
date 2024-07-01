const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getAllUsers);
usersRoutes.get('/', usersController.postNewUser);
usersRoutes.get('/:id', usersController.patchUsers);
usersRoutes.get('/:id', usersController.deleteUsers);

module.exports = usersRoutes;
