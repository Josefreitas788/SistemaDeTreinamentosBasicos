const mongoose = require('mongoose');
const Usuario = require('../database/models/Usuario');
const passport = require('passport');
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");
const { secret_key } = require('../environment/vars');

const salt = 10

module.exports = {
  async store(req, res) {
    try {
			const { nome, email, password } = req.query
			bcrypt.hash(password, salt)
			.then( async (hash) => {
				Usuario.create({nome: nome, email: email, password: hash}, (err, newUser) => {
					if (err) {
						console.log(err)
						return res.status(400)
						.json({
							StatusCode: 400,
							msg:	"Erro"
						})
					}

		      return res.status(200).send('Deu certo :)');
				})
			})			
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
		console.log(req.params)
    let user = await Usuario.findByIdAndRemove(req.params.id);
    return res.json(user);
  },

	async auth(req, res, next) {
		passport.authenticate('local',
			{session: false},
			(err, user, info) => {
				if(err) {
					return res.status(500)
					.json({
							StatusCode: 500,
							msg: 'Usuario não encontrado'
						})
				}

				if (!user) {
					const { message } = info
					return res.status(401)
					.json({
						StatusCode: 401,
						msg: message
					})
				}

			const { _id } = user
			const token = jwt.sign({ _id }, secret_key, {expiresIn: '2h'})

			res.cookie('jwt', token, {
				httpOnly: false,
				secure: false
			}).status(200)
				.send({
					StatusCode: 200,
					msg: "Ok"
				})
			})(req, res, next)
	}
};