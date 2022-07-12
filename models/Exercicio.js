const mongoose = require("mongoose");
require("./FichaDeTreinamento")
require('./Usuario');

const Exercicio = mongoose.model("Execicio", new mongoose.Schema({
  nome: String,
	avaliacoes: [{
    date : Date,
    avaliacao : String 
  }],
	cargas: [{
    data : Date,
    peso : String
  }],
  usuario : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  }
  
}))

module.exports = Exercicio;