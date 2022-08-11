const express = require('express');
const passport = require('passport')
const userController = require('../../controllers/UsuarioController');

const router = express.Router()

module.exports = app => {
	router.get('/', userController.show);
	router.delete('/:id', userController.destroy);
	router.get('/buscarFichas/:id', userController.buscarFichas);
	
	app.use(
		'/usuario', passport.authenticate('jwt', { session: false }), router
	)
};  
