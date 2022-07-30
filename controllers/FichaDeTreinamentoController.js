const mongoose = require('mongoose');
const FichaDeTreinamento = require('./../models/FichaDeTreinamento');

module.exports = {
  async store(req, res){
    try{
      const dataFicha = await FichaDeTreinamento.create(req.body);
      return res.status(200).send(' deu certo :)');
    }
    catch(error){
       return res.status(400).send({error: 'Erro!!'});
    }
  },
  async destroy(req,res){
    try {
      let dataFicha = await FichaDeTreinamento.findByIdAndRemove(req.params.id);
      return res.status(200);
    } catch(error){
      return res.status(500).send(error);
    }
  },
  async addExercicio(req,res){
    let carga = await FichaDeTreinamento.updateOne(
      {id: req.query.id},
      { 
        //TODO
        $pull: exercicio.id
			}
      
    )
    return res.json(dataFicha);
    },
  async removeExercicio(req,res){
      let dataFicha = await FichaDeTreinamento.findByIdAndUpdate(
        {id: req.query.id},
        { 
          $pull: exercicio.id
        }
			); 
        return res.json(dataFicha);
    }
 
};