const axios = require('axios')

const accessKey = '223eb5ead2f2f020ce1bfa262fbbc8a7'
const baseUrl =  `http://api.weatherstack.com/current?access_key=${accessKey}`

const spoof = false
const ctof = (c) => c*(9/5)+32

function get(lat, lng) { 
    return axios.get(`http://api.geonames.org/findNearbyPostalCodesJSON?lat=${lat}&lng=${lng}&username=bebo`)
    .then(r => {
        // console.log(r)
        const geozipcode =  r.data.postalCodes[0].postalCode    
        console.log(baseUrl + `&query=${geozipcode}`)        
        return axios.get(baseUrl + `&query=${geozipcode}`)
        .then(req => {
            console.log(req)
            var time = new Date();
            return {temperature:Math.floor(ctof(req.data.current.temperature)),
                    time:time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                    weatherCode:req.data.current.weather_code,
                    zipcode: geozipcode}
        })
    })
}                    
    

// eslint-disable-next-line import/no-anonymous-default-export
module.exports =  {
    get
}