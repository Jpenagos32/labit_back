/* 
Nombre Archivo = Users.js
Ubicacion = /src/models
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene el modelado de la tabla users de la base de datos
*/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

sequelize.define(
	'users',
	{
		id_users: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: {
			type: DataTypes.STRING,
		},
		last_name: {
			type: DataTypes.STRING,
		},
		birth: {
			type: DataTypes.DATE,
		},
		tel: {
			type: DataTypes.INTEGER,
		},
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		identification_number: {
			type: DataTypes.INTEGER,
		},
		affiliate_number: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	}
);
