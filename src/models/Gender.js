/* 
Nombre Archivo = Gender.js
Ubicacion = /src/models
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene el modelado de la tabla gender de la base de datos
*/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const Gender = sequelize.define(
	'gender',
	{
		id_gender: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		gender_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = Gender;
