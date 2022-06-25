const mongoose = require("mongoose");
require('./Exercicio');


const FichaDeTreinamento = mongoose.model("FichaDeTreinamento", new mongoose.Schema({
    id_user: String,
    nivel: String, //nivel da pessoa
		frequencia: String, //quant de dias por semana
		avaliacaoPosTreino: String,
    idGrupoMuscular: [Number],
    exercicio: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercicio"
    }]
}))

module.exports = FichaDeTreinamento;