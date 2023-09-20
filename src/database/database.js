/* 
Nombre Archivo = database.js
Ubicacion = /src/database
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene la instancia de sequelize para la conexion de la base de datos
*/
const { Sequelize } = require('sequelize');
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	dialect: 'mysql',
	host: DB_HOST,
	logging: false, // evita que salgan los queryes en la consola
});

module.exports = {
	sequelize,
};
