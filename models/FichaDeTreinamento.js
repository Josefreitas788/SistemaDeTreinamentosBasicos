const mongoose = require("mongoose");
require('./Exercicio');
require('./FichaDeTreinamento');
require('./Usuario');


const FichaDeTreinamento = mongoose.model("FichaDeTreinamento", new mongoose.Schema({
    nivel: String,
		frequencia: String, 
		avaliacaoPosTreino: String,
    dataInicialDaFicha: Date,
    gruposMusculares: [String],
    exercicios: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercicio"
    }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario"
    }
}))

module.exports = FichaDeTreinamento;