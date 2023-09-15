const express = require('express');
const router = express.Router();

router.get('/funcionando', (req, res) => {
	res.status(200).send('estoy funcionando');
});

module.exports = router;
