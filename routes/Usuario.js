
const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');
//const testeController = require('./controllers/TestControllers');

router.post('/usuario/',userController.store);
router.get('/usuario/', userController.show);
router.get('/usuario/buscaFichasDoUsuario/*', userController.buscaFichasDoUsuario);
router.put('/usuario/:id', userController.update);
router.delete('/usuario/:id', userController.destroy);


module.exports = router;