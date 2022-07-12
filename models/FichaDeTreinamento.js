const mongoose = require("mongoose");
require('./Usuario');
require('./FichaDeTreinamento');


const FichaDeTreinamento = mongoose.model("FichaDeTreinamento", new mongoose.Schema({
    nivel: String, //nivel da pessoa
		frequencia: String, //quant de dias por semana
		avaliacaoPosTreino: String,
    GruposMusculares: [String],
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