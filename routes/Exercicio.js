const express = require('express');
const router = express.Router('')
const exercicioController = require('../controllers/ExercicioController');

// router.get('/', exercicioController.show);
router.post('/', exercicioController.store);
router.get('/exercicio/:id', exercicioController.showById);
router.delete('/:id', exercicioController.destroy);
router.put('/:id', exercicioController.update);
router.put('/Avaliacao/:id', exercicioController.addAvaliacao);
router.put('/Avaliacao/:id', exercicioController.removeAvaliacao);
router.put('/Carga/:id', exercicioController.addCarga);
router.put('/Carga/:id', exercicioController.removeCarga);

module.exports = router;