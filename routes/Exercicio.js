const express = require('express');
const router = express.Router('')
const exercicioController = require('../controllers/ExercicioController');

router.post('/exercicio/',exercicioController.store);
router.get('/exercicio/:id', exercicioController.showById);

router.put('/:id', exercicioController.update);
router.put('/adicionaCarga/:id', exercicioController.addCarga);
router.put('/removeCarga/:id', exercicioController.removeCarga);
router.put('/adicionaAvaliacao/:id', exercicioController.addAvaliacao);
router.put('/removeAvaliacao/:id', exercicioController.removeAvaliacao);

router.delete('/:id', exercicioController.destroy);

module.exports = router;