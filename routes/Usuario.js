const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');

router.post('/',userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);
//router.get('/buscaFichasDoUsuario/*', userController.buscaFichasDoUsuario);
module.exports = router;