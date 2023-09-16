/* 
Nombre Archivo = Gender.js
Ubicacion = /src/models
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene el modelado de la tabla identification_types de la base de datos
*/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const identification_types = sequelize.define(
	'identification_types',
	{
		id_identification_types: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: true,
			autoIncrement: true,
		},
		identification_types_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);
module.exports = identification_types;
