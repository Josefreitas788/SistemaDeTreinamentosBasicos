const express = require('express');
const passport = require('passport')
const userController = require('../../controllers/UsuarioController');

const router = express.Router()


module.exports = app => {
	router.post('/login', userController.auth);
	router.post('/register', userController.store);
	app.use(
		'/auth', router
	)
};  
