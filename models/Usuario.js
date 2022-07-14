const mongoose = require("mongoose");
require('./FichaDeTreinamento');

const Usuario = mongoose.model("Usuario", new mongoose.Schema({
    nome: String,
		email: String,  
    password: String,
    /*fichaDeTreinamento: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "FichaDeTreinamento"
    }]*/
}))

module.exports = Usuario;