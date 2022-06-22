const mongoose = require("mongoose");
require('./Exercicio');


const FichaDeTreinamento = mongoose.model("FichaDeTreinamento", new mongoose.Schema({
    objetivo: String,
		Frequencia: String,
		avaliacaoPosTreino: String,
		nome: String,
    tipoFicha: String,
    exercicio: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercicio"
      
    }]
}))

module.exports = FichaDeTreinamento;