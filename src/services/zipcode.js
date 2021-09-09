const axios = require('axios')
const {GEONAMES_USERNAME} = require('../utils/config')

async function getbycoords(lat, lng) {
    const zipcode_req = await axios.get(`http://api.geonames.org/findNearbyPostalCodesJSON?lat=${lat}&lng=${lng}&username=${GEONAMES_USERNAME}`)
    const zipcode = zipcode_req.data.postalCodes[0].postalCode
    return zipcode
}

// eslint-disable-next-line import/no-anonymous -default-export
module.exports =  {
    getbycoords
}