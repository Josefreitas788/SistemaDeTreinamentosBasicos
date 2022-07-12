const mongoose = require("mongoose");
require('./Exercicio');
require('./FichaDeTreinamento');
require('./Usuario');


const FichaDeTreinamento = mongoose.model("FichaDeTreinamento", new mongoose.Schema({
    nivel: String, //nivel da pessoa
		frequencia: String, //quant de dias por semana
		avaliacaoPosTreino: String,
    dataInicialDaFicha: Date,
    gruposMusculares: [String],
    exercicios: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercicio"
    }],
    usuario : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario"
    }
}))

module.exports = FichaDeTreinamento;