/* 
Nombre Archivo = Users.js
Ubicacion = /src/models
Autor = Julian Andres Penagos
Fecha de creación = 15 septiembre 2023
Descripción = Archivo que contiene el modelado de la tabla users de la base de datos
*/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
const coverage_type = require('./CoverageType');
const gender = require('./Gender');
const user_types = require('./UserTypes');
const identification_types = require('./IdentificationTypes');

const users = sequelize.define(
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

// Deinir las relaciones de las tablas
users.hasOne(gender, {
	foreignKey: 'users_id',
});
gender.belongsTo(users, {
	foreignKey: 'users_id',
});

users.hasOne(coverage_type, {
	foreignKey: 'users_id',
});
coverage_type.belongsTo(users, {
	foreignKey: 'users_id',
});

users.hasMany(user_types, {
	foreignKey: 'users_id',
});
user_types.belongsTo(users, {
	foreignKey: 'users_id',
});

users.hasOne(identification_types, {
	foreignKey: 'users_id',
});
identification_types.belongsTo(users, {
	foreignKey: 'users_id',
});

module.exports = users;
