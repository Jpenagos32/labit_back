/* 
Nombre Archivo = index.js
Ubicacion = /src
Autor = Julian Andres Penagos
Fecha de creación = 14 septiembre 2023
Descripción = Archivo que sirve como punto de entrada para la aplicación, se encarga de levantar el servidor y la conexión a la base de datos
*/
require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3001;
const { sequelize } = require('./database/database.js');
const CoverageType = require('./models/CoverageType');
const Gender = require('./models/Gender');
const IdentificationTypes = require('./models/IdentificationTypes');
const UserTypes = require('./models/UserTypes');

sequelize
	.sync({ force: false })
	.then(() => {
		app.listen(port, () => {
			console.log(`Server listening on port ${port}`);
		});
	})
	.then(() => {
		// Guardar todas las descripciones de genero al cargar el script
		const genderDescriptions = ['Hombre', 'Mujer', 'No Binario', 'Otro'];
		return Promise.all(
			genderDescriptions.map((description) => {
				return Gender.create({ gender_description: description });
			})
		);
	})
	.then(() => {
		// Guardar todos los tipos de identificacion al cargar el script
		// ! ingresar los tipos de identificación válidos
		const identifications = ['DNI', 'Tarjeta profesional', 'Cedula'];
		return Promise.all(
			identifications.map((identification) => {
				return IdentificationTypes.create({
					identification_types_description: identification,
				});
			})
		);
	})
	.then(() => {
		// Guardar todos los tipos de usuarios al cargar el script
		// ! verificar si están todos los tipos de usuarios, o si faltan o si sobran
		const userTypes = ['Admin', 'Medico', 'Usuario', 'Paciente'];
		return Promise.all(
			userTypes.map((user) => {
				return UserTypes.create({
					user_types_description: user,
				});
			})
		);
	})
	.then(() => {
		// Guarda todos los tipos de coberturas al cargar el script
		const coverageTypes = [
			'Obra Social',
			'Medicina Prepagada',
			'Sin Cobertura',
		];
		return Promise.all(
			coverageTypes.map((coverage) => {
				return CoverageType.create({
					coverage_type_description: coverage,
				});
			})
		);
	})
	.catch((error) => {
		console.error(`error connecting to DB`, error);
	});

module.exports = app;
