const mongoose = require('mongoose');
const Exercicio = require('./../routes/Exercicio');
const FichaDeTreinamento = require('./../routes/FichaDeTreinamento');
const Usuario = require('./../routes/Usuario');

module.exports = {
	/*
	* Armazena o dado no banco de dados
	*/
  async store(req, res){
    try{
      const dataExercicio = await Exercicio.create(req.body);
      //return res.json(dataExercicio);
      return res.status(200).send('Deu certo :)');
    }
    catch(error){
      return res.status(400).send({error: 'Erro!!'});
    }
  },
  /**
	* Mostra o conjunto de dados armazenados
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async show(req, res){ 
    let dataExercicio = await Exercicio.find({});
    return res.json(dataExercicio);
  },

	/**
	* Adiciona uma avaliaçao a um exercicio 
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
  async addAvaliacao(req, res){
    let avaliacao = await Exercicio.updateOne(
      {id: req.query.id},
      { 
        $push: 
        { 
          avaliacoes :
          {      
            data : req.avaliacoes.data, 
            avaliacao : req.avaliacoes.avaliacao
          }
        }
			}
    );
    return res.json(avaliacao);
  },
  	/**
	* Adiciona uma avaliaçao a um exercicio 
	* @param {Request} req
	* @param {Response} res
	* @returns 
	*/
    async addCarga(req, res){
    let carga = await Exercicio.updateOne(
      {id: req.query.id},
      { 
        $push: 
        { 
          carga :
          {      
            data : req.cargas.data, 
            peso : req.cargas.peso
          }
        }
			}
    );
    return res.json(carga);
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