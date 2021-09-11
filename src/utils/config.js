if (process.env.WeatherstackAccessKey) {
    const WEATHERSTACK_ACCESS_KEY = process.env.WeatherstackAccessKey
    const GEONAMES_USERNAME = process.env.GeonamesUsername
    
    module.exports = {
        WEATHERSTACK_ACCESS_KEY,
        GEONAMES_USERNAME
    }    
} else {
    const config = require('config')

    const WEATHERSTACK_ACCESS_KEY = config.get('WeatherstackAccessKey')
    const GEONAMES_USERNAME = config.get('GeonamesUsername')
    const DEFAULT_PORT = config.get('DefaultPort')
    
    module.exports = {
        WEATHERSTACK_ACCESS_KEY,
        GEONAMES_USERNAME,
        DEFAULT_PORT
    }    
}