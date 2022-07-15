const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", new mongoose.Schema({
    nome:{
      type: String,
      require: true,
    },
     email:{
      type: String,  
      require: true,
    },
     password:{
      type: String,
      require: true,
    },
}))

module.exports = Usuario;