/* 
Nombre Archivo = usersRouter.js
Ubicacion = /src/routers
Autor = Julian Andres Penagos
Fecha de creación = 16 septiembre 2023
Descripción = Archivo que contiene el enrutado para el CRUD de la tabla usuarios
*/
const express = require('express');
const {
	getUsers,
	postUsers,
	putUsers,
	deleteUsers,
} = require('../controllers/usersController');
const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', postUsers);
usersRouter.put('/', putUsers);
usersRouter.delete('/', deleteUsers);

module.exports = usersRouter;
