const request = require('request')
const express = require('express')
const config = require('../config')
const MongoClient = require('mongodb').MongoClient;
var router = express.Router()

router.get('/', function(req, res, next) {
    var apiDescription = {
        "AppName": config.appName,
        "Version": config.version
    }
    res.json(apiDescription);
})

router.get('/utxo', function(req, res, next) {
	MongoClient.connect(config.MongoDBURI)
	.then( (client) => {
		const db = client.db(config.client.mongodb.defaultDatabase)
		return db.collection('utxo').find({}).toArray()
	})
	.then( (docs) => {
		console.log('docs: ', docs)
		res.json(docs)
	})
})

router.get('/utxo/:address', function(req, res, next) {
	MongoClient.connect(config.MongoDBURI)
	.then( (client) => {
		const db = client.db(config.client.mongodb.defaultDatabase)
		return db.collection('utxo').find({"address":req.params.address}).toArray()
	})
	.then( (docs) => {
		console.log('docs: ', docs)
		res.json(docs)
	})
})

module.exports = router
