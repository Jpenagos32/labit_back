/* 
Nombre Archivo = Users.js
Ubicacion = /src/models
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene el modelado de la tabla users de la base de datos
*/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
const CoverageType = require('./CoverageType');
const Gender = require('./Gender');
const UserTypes = require('./UserTypes');
const IdentificationTypes = require('./IdentificationTypes');

const Users = sequelize.define(
	'users',
	{
		id_users: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		birth: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		tel: {
			type: DataTypes.INTEGER,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		identification_number: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
		},
		affiliate_number: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	}
);

// Deinir las relaciones de las tablas
Users.hasOne(Gender, {
	foreignKey: 'users_id',
});
Gender.belongsTo(Users, {
	foreignKey: 'users_id',
});

Users.hasOne(CoverageType, {
	foreignKey: 'users_id',
});
CoverageType.belongsTo(Users, {
	foreignKey: 'users_id',
});

Users.hasMany(UserTypes, {
	foreignKey: 'users_id',
});
UserTypes.belongsTo(Users, {
	foreignKey: 'users_id',
});

Users.hasOne(IdentificationTypes, {
	foreignKey: 'users_id',
});
IdentificationTypes.belongsTo(Users, {
	foreignKey: 'users_id',
});

module.exports = Users;
