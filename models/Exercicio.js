const mongoose = require("mongoose");

//require("./FichaDeTreinamento")
//require('./Usuario');

const Exercicio = mongoose.model("Execicio", new mongoose.Schema({
  /*nome: String,
	avaliacoes: [{
    data : Date,
    avaliacao : Number 
  }],
	cargas: [{
    data : Date,
    peso : Number
  }],
 usuario : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  }*/
   nome:{
      type: String,
      require: true,
  }
  
}))

module.exports = Exercicio;