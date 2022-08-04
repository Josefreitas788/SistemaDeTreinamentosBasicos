const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema= new mongoose.Schema({
  nome:  {
		type: String,
		unique: true,
		required: true
	},
  email: {
		type: String,
		unique: true,
		required: true
	},
  password: {
		type: String,
		unique: true,
		required: true
	},
  fichaDeTreinamento: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "FichaDeTreinamento"
  }]
})

userSchema.method('compare', async (formPass, userPass) => {
  return bcrypt.compare(formPass, userPass)
})

const Usuario = mongoose.model("Usuario", userSchema)

module.exports = Usuario;