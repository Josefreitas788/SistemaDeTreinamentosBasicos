
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/Usuario');
// const exercicio = require('./routes/exercicio.js');
const fichaDeTreinamento = require('./routes/FichaDeTreinamento');

//Mongodb config
const mongoose = require('mongoose');
var cors = require('cors');
const FichaDeTreinamento = require('./models/FichaDeTreinamento.js');
mongoose.connect('mongodb+srv://Josefilo:Ibacpf17blYgQRnN@cluster0.kvg8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

/**
* Adcionar a rota usando a pasta routes
*/
app.use('/usuario', user)
app.use('/fichadetreinamento', fichaDeTreinamento)
// app.use('/exercicio', exercicio)

app.get('/', (req, res) => {
  res.send('Módulo 1 Sistema De Treinamento Basico');
});


app.listen(3000, () => {
  console.log('server started');
});
