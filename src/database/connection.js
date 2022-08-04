const mongoose = require('mongoose');

const { connection_string } = require('../environment/vars');

const conn = () => {
	return mongoose.connect(connection_string,{
	  useNewUrlParser: true,
	  useUnifiedTopology: true
	})
};

module.exports = conn