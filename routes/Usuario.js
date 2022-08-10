const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');

router.post('/usuario/',userController.store);
router.get('/buscarFichas/:id', userController.buscarFichas);
module.exports = router;