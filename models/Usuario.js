const mongoose = require("mongoose");
require("./FichaDeTreinamento");


const userSchema= new mongoose.Schema({
  nome: String,
  email: String,
  password: String,
  fichaDeTreinamento: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "FichaDeTreinamento"
  }]
})

userSchema.method('compare', async (formPass, userPass) => {
  return Usuario.compare(formPass, userPass)
})

const Usuario = mongoose.model("Usuario", userSchema)

module.exports = Usuario;