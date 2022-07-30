const express = require('express');
const router = express.Router();
const FichaDeTreinamentoController = require('../controllers/FichaDeTreinamentoController');


router.post('/', FichaDeTreinamentoController.store);
router.get('/', FichaDeTreinamentoController.show);
router.delete('/:id', FichaDeTreinamentoController.destroy);
router.put('/:id', FichaDeTreinamentoController.addExercicio);
router.put('/:id', FichaDeTreinamentoController.DeleteExercicio);

module.exports = router;