const express = require('express');
const passport = require('passport');
const exercicioController = require('../../controllers/ExercicioController');
const router = express.Router();

module.exports = app => {
	router.post('/', exercicioController.store);
	router.get('/:id', exercicioController.showById);
	router.delete('/:id', exercicioController.destroy);
	router.put('/:id', exercicioController.update);
	router.put('/Avaliacao/:id', exercicioController.addAvaliacao);
	router.put('/Avaliacao/:id', exercicioController.removeAvaliacao);
	router.put('/Carga/:id', exercicioController.addCarga);
	router.put('/Carga/:id', exercicioController.removeCarga);

	app.use('/exercicio', passport.authenticate('jwt', { session: false }), router)
}
