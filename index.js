
const express = require('express');
const bodyParser = require('body-parser');
//const testeController = require('./controllers/TestControllers');

//Mongodb config
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://Josefilo:Ibacpf17blYgQRnN@cluster0.kvg8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();


const userController = require('./controllers/UsuarioController');
  app.post('/Usuario',userController.store);
  app.get('/user',userController.show);
  app.get('/user/buscaemail/*',userController.index);


app.get('/', (req, res) => {
  res.send('Módulo 1 Sistema De Treinamento Basico');
});

app.listen(3000, () => {
  console.log('server started');
});
