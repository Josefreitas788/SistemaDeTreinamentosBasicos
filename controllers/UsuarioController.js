
const mongoose = require('mongoose');
const Usuario = require('./../models/Usuario');

module.exports = {

  async store(req, res){
    try{
      const user = await Usuario.create(req.body);
      //return res.json({user});
      return res.status(200).send('Deu certo :)');
    }
    catch(error){
      return res.status(400).send({error: 'Erro!!'});
    }
  },

  async buscarFichas(req, res){
    let user = await Usuario.find(
      {fichaDeTreinamento: req.query.fichaDeTreinamento}
    );
    return res.json(user);
  }
 
};