const axios = require('axios')
const locationService = require('./zipcode')
const {WEATHERSTACK_ACCESS_KEY} = require('../utils/config')

const baseUrl =  `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_ACCESS_KEY}`

const spoof = false
const ctof = (c) => c*(9/5)+32

async function getbyzipcode(zipcode) {    
    try {
        const location_req = await axios.get(`${baseUrl}&query=${zipcode}`)
        const {location, current} = location_req.data
        const time = new Date(location.localtime)
        return {
            temperature:Math.floor(ctof(current.temperature)),
            weatherCode:current.weather_code,
            time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            zipcode: zipcode,
            name: location.name
        }
    } catch (err) {
        throw err
    }
}

async function getbycoords(lat, lng) {    
    const zipcode = await locationService.getbycoords(lat, lng)    
    return await getbyzipcode(zipcode)
}

// eslint-disable-next-line import/no-anonymous -default-export
module.exports =  {
    getbycoords,
    getbyzipcode
}