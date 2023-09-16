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

sequelize
	.sync({ force: false })
	.then(() => {
		app.listen(port, () => {
			console.log(`Server listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.error(`error connecting to DB`, error);
	});

module.exports = app;
