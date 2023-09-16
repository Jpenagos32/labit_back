/* 
Nombre Archivo = index.js
Ubicacion = /src/routers
Autor = Julian Andres Penagos
Fecha de creación = 16 septiembre 2023
Descripción = Archivo que contiene el index de los enrutadores
*/
const express = require('express');
const usersRouter = require('./usersRouter');
const router = express.Router();

router.use('/users', usersRouter);

module.exports = router;
