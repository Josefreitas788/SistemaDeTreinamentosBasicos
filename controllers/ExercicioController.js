const mongoose = require('mongoose');
const exercicio = require('./../models/Exercicio');

module.exports = {
  async store(req, res){
    const exercicio = await exercicio.create(req.body);

    return res.json(exercicio);
      
    },
  
  async show(req, res){ 
    let exercicio = await exercicio.find();
    return res.json(exercicio);
  },
  
  async index(req, res){
    let exercicio = await exercicio.find(
      {email: req.query.email}
    );
    return res.json(exercicio);
  },
  
  async destroy(req,res){
      let exercicio = await exercicio.findByIdAndRemove(req.params.id);
         return res.json(exercicio);
  },

  // altera usuario
  async update(req,res){
      let exercicio = await exercicio.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(exercicio);
    }
 
};