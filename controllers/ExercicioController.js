const mongoose = require('mongoose');
const Exercicio = require('./../models/Exercicio');

module.exports = {
	/*
	* Armazena o dado no banco de dados
	*/
  async store(req, res){
    const dataExercicio = await Exercicio.create(req.body);
    return res.json(dataExercicio);
      
    },
  /**
	* Mostra o conjunto de dados armazenados
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async show(req, res){ 
    let dataExercicio = await Exercicio.find();
    return res.json(dataExercicio);
  },

	/**
	* Procura um dado do tipo Exercicio usando o campo email
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async index(req, res){
    let dataExercicio = await Exercicio.find(
      {email: req.query.email}
    );
    return res.json(dataExercicio);
  },

	/**
	* Armazena o dado no banco de dados
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async destroy(req,res){
      let dataExercicio = await Exercicio.findByIdAndRemove(req.params.id);
         return res.json(dataExercicio);
  },

	/**
	* Acha o Exercicio pelo campo ID e Atualiza
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async update(req,res){
      let dataExercicio = await Exercicio.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(dataExercicio);
    }
};