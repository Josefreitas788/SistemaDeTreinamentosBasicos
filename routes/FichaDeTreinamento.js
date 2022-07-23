const express = require('express');
const router = express.Router();
const FichaDeTreinamentoController = require('../controllers/FichaDeTreinamentoController');


router.post('/',FichaDeTreinamentoController.store);
router.put('/:id', FichaDeTreinamentoController.update);
router.delete('/:id', FichaDeTreinamentoController.destroy);


module.exports = router;