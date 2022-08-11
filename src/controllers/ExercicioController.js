const mongoose = require('mongoose');

const Exercicio = require('../database/models/Exercicio');
const FichaDeTreinamento = require('../database/models/FichaDeTreinamento');
const Usuario = require('../database/models/Usuario');

module.exports = {

  async store(req, res){
    try{
			console.log(req.body)
      const dataExercicio = await Exercicio.create(req.body);
      return res.status(200).send('Deu certo :)');
    }
    catch(error){
      return res.status(400).send({error: 'Erro!!'});
    }
  },
  async showById(req, res){
    try{
      const dataExercicio = await Exercicio.findById(req.params.id);
      return res.status(200).send(dataExercicio);
    }
    catch(error){
      return res.status(400).send({error: 'Erro!!'});
    }
  },
  
  async showById(req, res){
    try{
      const dataExercicio = await Exercicio.findById(req.params.id);
      return res.status(200).send(dataExercicio);
    }
    catch(error){
      return res.status(400).send({error: 'Erro!!'});
    }
  },
  
  async addAvaliacao(req, res){
    let avaliacao = await Exercicio.updateOne(
      {id: req.query.id},
      { 
        $push: 
        { 
          avaliacoes :
          {      
            data : req.avaliacoes.data, 
            avaliacao : req.avaliacoes.avaliacao
          }
        }
			}
    );
    return res.json(avaliacao);
  },

  async removeAvaliacao(req, res){
    let avaliacao = await Exercicio.updateOne(
      {id: req.query.id},
      { 
        $pull: 
        { 
          avaliacoes :
          {      
            data : req.avaliacoes.data, 
            avaliacao : req.avaliacoes.avaliacao
          }
        }
      }
    );
    return res.json(avaliacao);
  },

    async addCarga(req, res){
    let carga = await Exercicio.updateOne(
      {id: req.query.id},
      { 
        $push: 
        { 
          carga :
          {      
            data : req.cargas.data, 
            peso : req.cargas.peso
          }
        }
			}
    );
    return res.json(carga);
  },

  async removeCarga(req, res){
    let carga = await Exercicio.updateOne(
      {id: req.query.id},
      { 
        $pull: 
        { 
          carga :
          {      
            data : req.cargas.data, 
            peso : req.cargas.peso
          }
        }
      }
    );
    return res.json(carga);
  },


  async destroy(req,res){
      let dataExercicio = await Exercicio.findByIdAndRemove(req.params.id);
         return res.json(dataExercicio);
  },

  async update(req,res){
      let dataExercicio = await Exercicio.findByIdAndUpdate(
				req.params.id,
				req.body,
				{new:true}
			); 
      return res.json(dataExercicio);
    }
};