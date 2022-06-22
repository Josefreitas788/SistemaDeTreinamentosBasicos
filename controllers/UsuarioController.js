const mongoose = require('mongoose');
const User = require('./../models/Usuario');

module.exports = {
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async store(req, res){
    const user = await User.create(req.body);
    return res.json(user);
  },
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async show(req, res){ 
    let user = await User.find();
    return res.json(user);
  },
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async index(req, res){
    let user = await User.find(
      {email: req.query.email}
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
      let user = await User.findByIdAndRemove(req.params.id);
         return res.json(user);
    },
	/**
	* Armazena o dados da ficha de treinamento
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async update(req,res){
      let user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(user);
    }
 
};