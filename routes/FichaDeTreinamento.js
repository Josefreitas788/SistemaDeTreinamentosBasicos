const express = require('express');
const router = express.Router();
const FichaDeTreinamentoController = require('../controllers/FichaDeTreinamentoController');


router.post('/ficha/',FichaDeTreinamentoController.store);
router.put('/adicionaExercicioFicha/:id', FichaDeTreinamentoController.addExercicio);
router.put('/removeExercicioFicha/', FichaDeTreinamentoController.removeExercicio);
router.delete('/deletarFicha/:id', FichaDeTreinamentoController.destroy);


module.exports = router;