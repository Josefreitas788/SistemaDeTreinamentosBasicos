
const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');
//const testeController = require('./controllers/TestControllers');

router.post('/',userController.store);
router.get('/', userController.show);
router.get('/buscaemail/*', userController.index);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);


module.exports = router;