
const express = require('express');
const router = express.Router()
const userController = require('../controllers/UsuarioController');
//const testeController = require('./controllers/TestControllers');

//Mongodb config
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://Josefilo:Ibacpf17blYgQRnN@cluster0.kvg8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.post('/',userController.store);
router.get('/', userController.show);
router.get('/buscaemail/*', userController.index);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);


module.exports = router;