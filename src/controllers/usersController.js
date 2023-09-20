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
const CoverageType = require('../models/CoverageType');
const Gender = require('../models/Gender');
const IdentificationTypes = require('../models/IdentificationTypes');
const UserTypes = require('../models/UserTypes');
const Users = require('../models/Users');

const getUsers = async (req, res) => {
	const { identification_number } = req.query;
	try {
		let usersFound;

		if (identification_number) {
			usersFound = await Users.findOne({
				where: {
					identification_number,
				},
				include: [
					{ model: Gender },
					{ model: IdentificationTypes },
					{ model: CoverageType },
					{ model: UserTypes },
				],
			});
		} else {
			usersFound = await Users.findAll({
				include: [
					{ model: Gender, attributes: ['gender_description'] },
					{ model: IdentificationTypes },
					{ model: CoverageType },
					{ model: UserTypes },
				],
			});
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
		gender_id,
		identification_types_id,
		coverage_type_id,
		user_types_id,
	} = req.body;

	let query = {
		first_name,
		last_name,
		birth,
		email,
		password,
		identification_number,
		gender_id,
		identification_types_id,
		coverage_type_id,
		user_types_id,
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
	const {
		identification_number,
		first_name,
		last_name,
		birth,
		tel,
		email,
		affiliate_number,
		password,
		gender_id,
		identification_types_id,
		coverage_type_id,
		user_types_id,
	} = req.body;
	try {
		if (!identification_number)
			throw new Error('Must provide an identification_number');

		const user = await Users.findOne({
			where: {
				identification_number,
			},
		});

		if (first_name) user.first_name = first_name;
		if (last_name) user.last_name = last_name;
		if (birth) user.birth = birth;
		if (tel) user.tel = tel;
		if (email) user.email = email;
		if (affiliate_number) user.affiliate_number = affiliate_number;
		if (password) user.password = password;
		if (gender_id) user.gender_id = gender_id;
		if (identification_types_id)
			user.identification_types_id = identification_types_id;
		if (coverage_type_id) user.coverage_type_id = coverage_type_id;
		if (user_types_id) user.user_types_id = user_types_id;

		await user.save();

		res.status(200).json({ message: 'User updated', user });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteUsers = async (req, res) => {
	const { identification_number } = req.query;
	try {
		if (!identification_number)
			throw new Error('Must provide an identification_number');

		const userDeleted = await Users.destroy({
			where: {
				identification_number,
			},
		});

		if (!userDeleted) {
			return res.status(404).json({
				message: `User ${identification_number} does not exist`,
			});
		}

		res.status(200).json({ message: 'User deleted', userDeleted });
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
