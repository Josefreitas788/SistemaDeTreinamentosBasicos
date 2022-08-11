const { port } = require('../environment/vars')
const conn = require('../database/connection')

module.exports = app => {
	conn()
	.then(async () => {
		console.log('Connected')
		
		app.listen(port, () => {
			console.log(`Serve is startin on port ${port}`)
		})
	})
	.catch( error => {
		console.log(error)
	})
}
