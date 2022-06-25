const mongoose = require("mongoose");
require("./FichaDeTreinamento")

const Exercicio = mongoose.model("Execicio", new mongoose.Schema({
		avaliacao: String,
		cargaIntensidade: String
}))

module.exports = Exercicio;