
const mongoose = require('mongoose');
const Usuario = require('./../models/Usuario');

module.exports = {
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
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
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async show(req, res){ 
    let user = await Usuario.find({});
    return res.json(user);
  },
	/**
	* Armazena o busca as fichas de um usuario
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async buscaFichasDoUsuario(req, res){
    let user = await Usuario.find(
      {fichaDeTreinamento: req.query.fichaDeTreinamento}
    );
    return res.json(user);
  },
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async destroy(req,res){
		console.log(req.params.id)
      let user = await Usuario.findByIdAndRemove(req.params.id);
         return res.json(user);
    },
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async update(req,res){
      let user = await Usuario.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(user);
    }
 
};