const mongoose = require("mongoose");

const FichaDeTreinamento = mongoose.model("FichaDeTreinamento", new mongoose.Schema({

    nivel: String, //Nível de treinamento
		frequencia: String, //quant de dias por semana
		avaliacaoPosTreino: String,
    dataInicialDaFicha: Date,
    gruposMusculares: [String],
    exercicios: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercicio"
    }],
    Usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario"
    }
}))

module.exports = FichaDeTreinamento;