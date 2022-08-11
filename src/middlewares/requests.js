const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express');

module.exports = app => {
	app.use(express.urlencoded({
		extended: true
	}))
	app.use(bodyParser.json())
	app.use(morgan('dev'))
}
