
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

  async buscaFichasDoUsuario(req, res){
    let user = await Usuario.find(
      {fichaDeTreinamento: req.query.fichaDeTreinamento}
    );
    return res.json(user);
  },
	
  async destroy(req,res){
      let user = await Usuario.findByIdAndRemove(req.params.id);
         return res.json(user);
    },
	
  async update(req,res){
      let user = await Usuario.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
      return res.status(200).send(
				{
					"msg": "Atualizado com sucesso"
				}
			);
    }
 
};