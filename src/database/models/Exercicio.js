const mongoose = require("mongoose");

const Exercicio = mongoose.model("Execicio", new mongoose.Schema({
  nome: String,
  cargas: [{
    data: { type: Date, default: Date.now },
    peso: Number
  }],
  avaliacoes: [{
    data: { type: Date, default: Date.now },
    avaliacao: Number
  }],
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  }
}))

module.exports = Exercicio;