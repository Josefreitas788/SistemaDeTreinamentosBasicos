
const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');

router.post('/usuario/',userController.store);
router.get('/usuario/', userController.show);
router.put('/usuario/:id', userController.update);
router.delete('/usuario/:id', userController.destroy);
router.get('/usuario/buscaFichasDoUsuario/*', userController.buscaFichasDoUsuario);


module.exports = router;