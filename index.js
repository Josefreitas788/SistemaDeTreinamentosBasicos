const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/Usuario');
const exercicio = require('./routes/Exercicio');
const fichaDeTreinamento = require('./routes/FichaDeTreinamento');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

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


app.listen(3000, () => {
  console.log('server started');
});
