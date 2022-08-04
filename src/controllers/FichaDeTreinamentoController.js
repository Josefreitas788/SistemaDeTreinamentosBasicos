const mongoose = require('mongoose');
const FichaDeTreinamento = require('../database/models/FichaDeTreinamento');

module.exports = {
  async store(req, res) {
    try {
			console.log(req.query)
      const dataFicha = await FichaDeTreinamento.create(req.query);
      return res.status(200).send(' deu certo :)');
    }
    catch (error) {
      return res.status(400).send({ error: 'Erro!!' });
    }
  },

  async destroy(req, res) {
    try {
      const dataFicha = await FichaDeTreinamento.findByIdAndRemove(req.params.id);
      return res.status(200).send(' deu certo :)');
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async addExercicio(req, res) {
    let carga = await FichaDeTreinamento.updateOne(
      { id: req.query.id },
      {
        //TODO
        $push: exercicio.id
      }

    )
    return res.json(dataFicha);
  },

  async DeleteExercicio(req, res) {
    let dataFicha = await FichaDeTreinamento.findByIdAndUpdate(
      { id: req.params.id },
      {
        //TODO
        $pull: exercicio.id
      }
    );
    return res.json(dataFicha);
  },

  async show(req, res) {
    const ficha = await FichaDeTreinamento.find(req.body);
    return res.json(ficha);
  },

};