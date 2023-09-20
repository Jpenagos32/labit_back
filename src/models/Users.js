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
Gender.hasOne(Users, {
	foreignKey: 'gender_id',
});
Users.belongsTo(Gender, {
	foreignKey: 'gender_id',
});

CoverageType.hasOne(Users, {
	foreignKey: 'coverage_type_id',
});
Users.belongsTo(CoverageType, {
	foreignKey: 'coverage_type_id',
});

UserTypes.hasMany(Users, {
	foreignKey: 'user_types_id',
});
Users.belongsTo(UserTypes, {
	foreignKey: 'user_types_id',
});

IdentificationTypes.hasOne(Users, {
	foreignKey: 'identification_types_id',
});
Users.belongsTo(IdentificationTypes, {
	foreignKey: 'identification_types_id',
});

module.exports = Users;
