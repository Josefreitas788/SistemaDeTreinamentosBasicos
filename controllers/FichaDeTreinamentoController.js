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
	* Encontra os
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async index(req, res){
    let dataFicha = await FichaDeTreinamento.find(
      {email: req.query.email}
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
      let dataFicha = await FichaDeTreinamento.findByIdAndRemove(req.params.id);
         return res.json(dataFicha);
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