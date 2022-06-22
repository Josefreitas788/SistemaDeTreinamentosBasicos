const express = require('express');
const router = express.Router()
const exercicioController = require('../controllers/ExercicioController');
const mongoose = require('mongoose');

var cors = require('cors');
mongoose.connect('mongodb+srv://Josefilo:Ibacpf17blYgQRnN@cluster0.kvg8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.post('/',exercicioController.store);
router.get('/', exercicioController.show);
router.get('/buscaemail/*', exercicioController.index);
router.put('/:id', exercicioController.update);
router.delete('/:id', exercicioController.destroy);


module.exports = router;