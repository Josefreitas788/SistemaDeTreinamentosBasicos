const mongoose = require("mongoose");
require('./FichaTreinamentoDao');

const UsuarioDao = mongoose.model("UsuarioDao", new mongoose.Schema({
    nome: String,
		email: String,  
    fichaDeTreinamento: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "FichaDeTreinamentoDao"
    }]
}))

modulo.exports = FichaDeTreinamentoDao;