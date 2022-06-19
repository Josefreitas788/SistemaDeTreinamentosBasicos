const mongoose = require("mongoose");
require('./ExercicioDao');


const FichaDeTreinamentoDao = mongoose.model("FichaDeTreinamentoDao", new mongoose.Schema({
    objetivo: String,
		Frequencia: String,
		avaliacaoPosTreino: String,
		nome: String,
    tipoFicha: Strin,
    exercicio: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExercicioDao"
      
    }]
}))

modulo.exports = FichaDeTreinamentoDao;