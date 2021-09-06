const express = require('express')
const cors = require('cors')
const weatherService = require('./services/weather')

const app = express()
app.use(cors())
app.use(express.static('build'))

app.get('/api/location', async (request, response) => {
    try {
        if (request.query.lat && request.query.lng) {
            response.json(await weatherService.getbycoords(request.query.lat, request.query.lng))
        } else if (request.query.zipcode) {
            response.json(await weatherService.getbyzipcode(request.query.zipcode))
        }
    } 
    catch (err) {
        console.log(err)
    }
})

app.listen(process.env.PORT || 3001)

