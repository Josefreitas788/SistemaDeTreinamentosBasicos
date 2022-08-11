const PORT = process.env['PORT']
const SECRET_KEY = process.env['SECRET_KEY']
const CONNECTION_STRING = process.env['CONNECTION_STRING']

module.exports = {
	connection_string: CONNECTION_STRING,
	port: PORT,
	secret_key: SECRET_KEY
}