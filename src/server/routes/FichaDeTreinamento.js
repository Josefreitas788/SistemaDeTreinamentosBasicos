const express = require('express');
const passport = require('passport');
const FichaDeTreinamentoController = require('../../controllers/FichaDeTreinamentoController');

const router = express.Router();

module.exports = app => {
	router.post('/', FichaDeTreinamentoController.store);
	router.get('/', FichaDeTreinamentoController.show);
	router.delete('/:id', FichaDeTreinamentoController.destroy);
	router.put('/:id', FichaDeTreinamentoController.addExercicio);
	router.put('/:id', FichaDeTreinamentoController.DeleteExercicio);

	app.use('/fichadetreinamento', passport.authenticate('jwt', { session: false }), router);
}