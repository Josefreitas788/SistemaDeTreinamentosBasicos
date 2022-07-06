const mongoose = require('mongoose');
const FichaDeTreinamento = require('./../models/FichaDeTreinamento');

module.exports = {
	
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async store(req, res){
    const dataFicha = await FichaDeTreinamento.create(req.body);
    return res.json(dataFicha);
    },
	
  /**
	* Mostra os dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async show(req, res){ 
    let dataFicha = await FichaDeTreinamento.find();
    return res.json(dataFicha);
  },


	/**
	* 
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async index(req, res){
    let dataFicha = await FichaDeTreinamento.find(
      {email: req.query.email} // Alterar o find, realizar usando o nome do usuario
    );
    return res.json(dataFicha);
  },

	/**
	* Encontra pelo Id e Remove o dado da ficha
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async destroy(req,res){
    try {
      let dataFicha = await FichaDeTreinamento.findByIdAndRemove(req.params.id);
      //return res.status(200).json(dataFicha);
      return res.status(200);
    } catch(error){
      return res.status(500).send(error);
    }
  },

		/**
	* Encontra pelo ID e Atualiza a ficha
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async update(req,res){
      let dataFicha = await FichaDeTreinamento.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(dataFicha);
    }
 
};