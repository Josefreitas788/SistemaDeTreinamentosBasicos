const mongoose = require("mongoose");
const FichaDeTreinamentoDao = require("/FichaDeTreinamentoDao")

const ExercicioDao = mongoose.model("Execicio", new mongoose.Schema({
    tempo: String,
		tipo: String,
		avaliacao: String,
		cargaIntensidade: String,
    fichaDeTreinamento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FichaDeTreinamentoDao"
      
    }
}))

modulo.exports = ExercicioDao;