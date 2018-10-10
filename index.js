const BlockParser = require('magellan-block-parser')
const config = require('./config.json')

async function main() {

    let blockParser = new BlockParser(config.rpcUrl, config.rpcPort, config.rpcUser, config.rpcPassword, config.rpcSslEn, config.mongoDbUrl, config.dbName, config.debugEn)
    
    try {
        await blockParser.parseBlocks()
    } catch (err) {
        throw Error(`[parseBlock] parseBlocks failed ${err}`)
    }

}

main()
