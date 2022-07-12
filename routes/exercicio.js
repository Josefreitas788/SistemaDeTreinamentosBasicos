const express = require('express');
const router = express.Router()
const exercicioController = require('../controllers/ExercicioController');


router.post('/exercicio/',exercicioController.store);
router.get('/exercicio/', exercicioController.show);
router.put('/exercicio/:id', exercicioController.update);
router.delete('/exercicio/:id', exercicioController.destroy);


module.exports = router;