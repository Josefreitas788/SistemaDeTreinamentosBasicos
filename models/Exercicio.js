const mongoose = require("mongoose");
require("./FichaDeTreinamento")

const Exercicio = mongoose.model("Execicio", new mongoose.Schema({
    tempo: String,
		tipo: String,
		avaliacao: String,
		cargaIntensidade: String,
    fichaDeTreinamento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FichaDeTreinamento"
      
    }
}))

module.exports = Exercicio;