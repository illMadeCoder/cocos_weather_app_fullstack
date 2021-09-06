const express = require('express')
const cors = require('cors')
const weatherService = require('./services/weather')

const app = express()
app.use(cors())
app.use(express.static('build'))

app.get('/location', async (request, response) => {
    location = await weatherService.get(request.query.lat, request.query.lng)
    response.json(location)
})

app.listen(3001)

