const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');

router.post('/',userController.store);
router.get('/buscarFichas/:id', userController.buscaFichasDoUsuario);
module.exports = router;