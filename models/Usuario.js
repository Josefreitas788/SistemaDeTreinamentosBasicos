const mongoose = require("mongoose");
require("./FichaDeTreinamento");


const Usuario = mongoose.model("Usuario", new mongoose.Schema({
  nome: String,
  email: String,
  password: String,
  avaliacoes: [{
    data: { type: Date, default: Date.now },
    avaliacao: Number,
    exercicio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercicio"
    }
  }],
  fichaDeTreinamento: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "FichaDeTreinamento"
  }]
}))

module.exports = Usuario;