const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');

router.post('/', userController.store);
router.get('/', userController.show);
router.delete('/:id', userController.destroy);
router.get('/buscarFichas/:id', userController.buscarFichas);
router.post('/authenticate', userController.authenticate);


module.exports = router;