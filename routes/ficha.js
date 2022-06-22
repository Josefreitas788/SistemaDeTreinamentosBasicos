const express = require('express');
const router = express.Router()
const FichaDeTreinamentoController = require('../controllers/FichaDeTreinamentoController');

//Mongodb config
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://Josefilo:Ibacpf17blYgQRnN@cluster0.kvg8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.post('/',FichaDeTreinamentoController.store);
router.get('/', FichaDeTreinamentoController.show);
router.get('/buscaemail/*', FichaDeTreinamentoController.index);
router.put('/:id', FichaDeTreinamentoController.update);
router.delete('/:id', FichaDeTreinamentoController.destroy);


module.exports = router;