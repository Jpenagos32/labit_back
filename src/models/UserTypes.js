/* 
Nombre Archivo = Gender.js
Ubicacion = /src/models
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene el modelado de la tabla user_types de la base de datos
*/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const UserTypes = sequelize.define(
	'user_types',
	{
		id_user_types: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		user_types_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = UserTypes;
