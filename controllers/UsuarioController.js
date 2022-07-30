
const mongoose = require('mongoose');
const Usuario = require('./../models/Usuario');

module.exports = {

  async store(req, res) {
    try {
      const user = await Usuario.create(req.body);
      //return res.json({user});
      return res.status(200).send('Deu certo :)');
    }
    catch (error) {
      return res.status(400).send({ error: 'Erro!!' });
    }
  },

  async buscarFichas(req, res) {
    let user = await Usuario.find(
      { fichaDeTreinamento: req.query.fichaDeTreinamento }
    );
    return res.json(user);
  },

  async show(req, res) {
    const user = await Usuario.find(req.body);
    return res.json(user);
  },

  async destroy(req, res) {
    let user = await Usuario.findByIdAndRemove(req.params.id);
    return res.json(user);
  },

  async authenticate(req, res) {
    
   const { email, password } = req.body;

    //ver se existe no banco de dados
    // const userLogin = await Usuario.findOne({ where: { email, password   
    //}});
   await Usuario.findOne({ email }, function(err, user)  {

      if (!err) {
        return res.status(400).send({ error: 'Usuário não encontrado' })
      }

      user.compare(password, user.password).then(match => {
        if (!match) {
          return res.status(400).send({ error: 'Senha invalida' })
        }
        return done(null, user)
      })
      
    })
    
    // return res.json(userLogin);
}
};