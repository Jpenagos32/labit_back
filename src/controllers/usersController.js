/* 
Nombre Archivo = usersController.js
Ubicacion = /src/controllers
Autor = Julian Andres Penagos
Fecha de creación = 16 septiembre 2023
Descripción = Archivo que contiene el controlador para las rutas del CRUD de users
===================================================================================================================================
Funciones:
===================================================================================================================================
1-getUsers      = Funcion encargada de obtener usuarios, si se provee un ID por query string traerá solamente ese usuario, de lo contrario los obtendrá todos
2-postUsers     = Funcion encargada de agregar un nuevo usuario a la base de datos
3-putUsers      = Funcion encargada de actualizar un usuario de la base de datos, debe proveerse un numero de identificacion
4-deleteUsers   = Función encargada de eliminar un usuario de la base de datos, debe proveerse un numero de identificacion valido
===================================================================================================================================
*/
const Users = require('../models/Users');

const getUsers = async (req, res) => {
	const { id } = req.query;
	try {
		let usersFound;

		if (id) {
			usersFound = await Users.findOne({
				where: {
					identification_number: id,
				},
			});
		} else {
			usersFound = await Users.findAll();
		}

		if (!usersFound) {
			return res
				.status(404)
				.json({ error: `User ${id} Not found or does not exist` });
		}

		res.status(200).json(usersFound);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const postUsers = async (req, res) => {
	const {
		first_name,
		last_name,
		birth,
		email,
		password,
		identification_number,
		tel,
		affiliate_number,
	} = req.body;

	let query = {
		first_name,
		last_name,
		birth,
		email,
		password,
		identification_number,
	};
	try {
		if (!identification_number) {
			return res
				.status(400)
				.json({ error: 'Must provide an identification number' });
		}

		if (tel) query.tel = tel;
		if (affiliate_number) query.affiliate_number = affiliate_number;

		const newUser = await Users.create(query);

		res.status(200).json({ message: 'User created', newUser });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const putUsers = async (req, res) => {
	const { id } = req.params;
	try {
		res.status(200).send(`updating user ${id}`);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteUsers = async (req, res) => {
	const { id } = req.params;
	try {
		res.status(200).send(`deleting user ${id}`);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getUsers,
	postUsers,
	putUsers,
	deleteUsers,
};
