const express = require('express')
const cors = require('cors')
const weatherService = require('./services/weather')
const { request, response } = require('express')

const app = express()
app.use(cors())
app.use(express.static('build'))

app.get('*',function(req,res,next) {
    if(req.headers['x-forwarded-proto']!='https') {
      console.log('https://'+req.headers.host+req.url)
      res.redirect('https://'+req.headers.host+req.url)
    } else
      next() /* Continue to other routes if we're not redirecting */
  })
  

app.get('/api/location', async (request, response) => {
    try {
        if (request.query.lat && request.query.lng) {
            response.json(await weatherService.getbycoords(request.query.lat, request.query.lng))
        } else if (request.query.zipcode) {
            response.json(await weatherService.getbyzipcode(request.query.zipcode))
        }
    } 
    catch (err) {
        console.error(err)
    }
})

app.listen(process.env.PORT || 3001)

 