const mongoose = require('mongoose');
const ficha = require('./../models/FichaDeTreinamento');

module.exports = {
  async store(req, res){
    const ficha = await ficha.create(req.body);

    return res.json(ficha);
      
    },
  
  async show(req, res){ 
    let ficha = await ficha.find();
    return res.json(ficha);
  },
  
  async index(req, res){
    let ficha = await ficha.find(
      {email: req.query.email}
    );
    return res.json(ficha);
  },
  
  async destroy(req,res){
      let ficha = await ficha.findByIdAndRemove(req.params.id);
         return res.json(ficha);
  },

  // altera usuario
  async update(req,res){
      let ficha = await ficha.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(ficha);
    }
 
};