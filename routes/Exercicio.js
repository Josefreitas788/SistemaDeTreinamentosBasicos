const express = require('express');
const router = express.Router('')
const exercicioController = require('../controllers/ExercicioController');

router.post('/',exercicioController.store);
router.get('/', exercicioController.show);
router.put('/:id', exercicioController.update);
router.delete('/:id', exercicioController.destroy);

router.put('/adicionarCarga/:id', exercicioController.addCarga);
router.put('/adicionarAvaliacao/:id', exercicioController.addAvaliacao);


module.exports = router;