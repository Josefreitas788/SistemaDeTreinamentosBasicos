const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/Usuario');
const exercicio = require('./routes/Exercicio');
const fichaDeTreinamento = require('./routes/FichaDeTreinamento');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

//Mongodb config
const mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb+srv://Josefilo:Ibacpf17blYgQRnN@cluster0.kvg8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Módulo 1 Sistema De Treinamento Basico');
});

app.use('/usuario', user)
app.use('/fichadetreinamento', fichaDeTreinamento)
app.use('/exercicio', exercicio)

/*
app.use('/authenticate', async(req, res) => {
  const {email, password} = req.body;
  //const user = await user.findOne({email,password });
  //const user = await user.findOne({email}).select('+password'); 
   const userLogin = await user.findOne({ where: { email, password }});
  console.log(userLogin)
 
  if(!userLogin){
    return res.status(400).send({error: 'Usuário não encontrado'});
  }
  if(!await compare(password, userLogin.password))
    return res.status(400).send({error: 'Senha invalida'});

  res.send({userLogin});
});*/

app.listen(3000, () => {
  console.log('server started');
});
