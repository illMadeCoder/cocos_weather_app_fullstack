const axios = require('axios')

const accessKey = '223eb5ead2f2f020ce1bfa262fbbc8a7'
const baseUrl =  `http://api.weatherstack.com/current?access_key=${accessKey}`

const spoof = false
const ctof = (c) => c*(9/5)+32

function getbycoords(lat, lng) { 
    return axios.get(`http://api.geonames.org/findNearbyPostalCodesJSON?lat=${lat}&lng=${lng}&username=bebo`)
    .then(r => {
        // console.log(r)
        const zipcode =  r.data.postalCodes[0].postalCode    
             
        return axios.get(baseUrl + `&query=${zipcode}`)
        .then(req => {        
            return {temperature:Math.floor(ctof(req.data.current.temperature)),
                    weatherCode:req.data.current.weather_code,
                    zipcode: zipcode}
        })
    })
}

function getbyzipcode(zipcode) {              
    return axios.get(baseUrl + `&query=${zipcode}`)
    .then(req => {
        var time = new Date();
        return {temperature:Math.floor(ctof(req.data.current.temperature)),
                weatherCode:req.data.current.weather_code,
                zipcode: zipcode}
    })
    
}                    
    
    

// eslint-disable-next-line import/no-anonymous-default-export
module.exports =  {
    getbycoords,
    getbyzipcode
}