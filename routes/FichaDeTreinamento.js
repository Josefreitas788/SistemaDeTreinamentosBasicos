const express = require('express');
const router = express.Router();
const FichaDeTreinamentoController = require('../controllers/FichaDeTreinamentoController');


router.post('/fichaDeTreinamento/',FichaDeTreinamentoController.store);
router.get('/fichaDeTreinamento/', FichaDeTreinamentoController.show);
router.get('/fichaDeTreinamento/usuarioFicha/*', FichaDeTreinamentoController.index);
router.put('/fichaDeTreinamento/:id', FichaDeTreinamentoController.update);
router.delete('/fichaDeTreinamento/:id', FichaDeTreinamentoController.destroy);


module.exports = router;