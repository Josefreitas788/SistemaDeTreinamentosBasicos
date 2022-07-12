const mongoose = require("mongoose");
require("./FichaDeTreinamento")

const Exercicio = mongoose.model("Execicio", new mongoose.Schema({
  nome: String,
	avaliacao: String,
	cargaIntensidade: String
}))

module.exports = Exercicio;