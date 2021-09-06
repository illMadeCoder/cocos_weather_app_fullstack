const axios = require('axios')

const accessKey = '1c5ae1381f1f8a243b7b8a46317aab98'
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
            const time = new Date(req.data.location.localtime)
            return {
                temperature:Math.floor(ctof(req.data.current.temperature)),
                weatherCode:req.data.current.weather_code,
                time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                zipcode: zipcode
            }
        })
    })
}

function getbyzipcode(zipcode) {
    return axios.get(baseUrl + `&query=${zipcode}`)
    .then(req => {
        var time = new Date(req.data.location.localtime);
        return {
                temperature:Math.floor(ctof(req.data.current.temperature)),
                weatherCode:req.data.current.weather_code,
                zipcode: zipcode,
                time:time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            }
    })
    .catch(err => {
        console.error(err)
    })

}



// eslint-disable-next-line import/no-anonymous-default-export
module.exports =  {
    getbycoords,
    getbyzipcode
}