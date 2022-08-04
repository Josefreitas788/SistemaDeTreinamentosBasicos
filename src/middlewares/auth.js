const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const Usuario = require('../database/models/Usuario')
const ObjectId = require('mongoose').ObjectId

const { secret_key } = require('../environment/vars')


passport.use( new LocalStrategy({
		usernameField:	'email',
		passwordField:	'password'
	},
	async function (email, password, done) {
  	await Usuario.findOne( { email: email} , (err, user) => {
			if(err) {
				return done(err)
			}
		
      if (!user) {
        return done(null, false, { 
					StatusCode: 404,
					msg: 'Usuário não encontrado' 
				})
      }
		
      user.compare(password, user.password).then(match => {
        if (!match) {
          return done(null, false, { 
						StatusCode: 401,
						msg: 'Senha invalida' })
        }
        return done(null, user)
      })
    }).clone()
	})
)

passport.serializeUser((user, done) => {
	done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
	await Usuario.findById({_id: ObjectId(id)}, (err, user) => {
		done(err, user)
	})
})

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret_key
}

passport.use(new JwtStrategy(opts, async (payload, done) => {
	await Usuario.findOne({_id: payload._id}, (err, user) => {
		if (err) {
			return done(err, false)
		}

		if(!user) {
			return done(null, false)
		}

		return done(null, {id: user._id})
	}).clone()
}))

module.exports = app => {
	app.use(passport.initialize())
}