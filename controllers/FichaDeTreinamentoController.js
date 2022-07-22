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

  async show(req, res){ 
    let dataFicha = await FichaDeTreinamento.find();
    return res.json(dataFicha);
  },

  async index(req, res){
    let dataFicha = await FichaDeTreinamento.find(
      {__id: req.query.id}
    );
    return res.json(dataFicha);
  },

  async destroy(req,res){
    try {
      let dataFicha = await FichaDeTreinamento.findByIdAndRemove(req.params.id);
      return res.status(200);
    } catch(error){
      return res.status(500).send(error);
    }
  },

  async update(req,res){
      let dataFicha = await FichaDeTreinamento.findByIdAndUpdate(
				req.params.id,
				req.body,
				{new:true}
			); 
        return res.json(dataFicha);
    }
 
};