var config = {
	expressPort: 3000,
	client: {
		mongodb: {
			defaultDatabase: 'bitcoin_regtest',
			defaultCollection: 'utxo',
			defaultUri: 'mongodb://localhost:27017'
		},
	},
	MongoDBURI: 'mongodb://localhost:27017/bitcoin_regtest',
	checkinCollection: 'foursq',
	appName: 'Magellan',
	version: 'v1.0.0'
}

module.exports = config;
