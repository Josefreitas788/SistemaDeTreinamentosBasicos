const mongoose = require("mongoose");
require('./Exercicio');
require('./FichaDeTreinamento');


const FichaDeTreinamento = mongoose.model("FichaDeTreinamento", new mongoose.Schema({
    nivel: String, //nivel da pessoa
		frequencia: String, //quant de dias por semana
		avaliacaoPosTreino: String,
    dataInicialDaFicha: Date,
    gruposMusculares: [String],
    exercicios: [{
      nome : String,
      avaliacao: String,
		  cargaIntensidade: String
    }],
    usuario : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario"
    }]
}))

module.exports = FichaDeTreinamento;