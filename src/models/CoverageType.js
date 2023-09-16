/* 
Nombre Archivo = Gender.js
Ubicacion = /src/models
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene el modelado de la tabla coverage_type de la base de datos
*/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const coverage_type = sequelize.define(
	'coverage_type',
	{
		id_coverage_type: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		coverage_type_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = coverage_type;
