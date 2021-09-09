const express = require('express')
const cors = require('cors')
const weatherService = require('./services/weather')
const { request, response } = require('express')
const {DEFAULT_PORT} = require("./utils/config")

const app = express()

// redirect to https when off localhost
app.get('*',
  function(req,res,next) {    
    if(req.headers['x-forwarded-proto']!='https' && !/^localhost/.test(req.headers.host)) {    
      res.redirect('https://'+req.headers.host+req.url)
    } else {
      next() /* Continue to other routes if we're not redirecting */
    }
  }
)

app.use(cors())
app.use(express.static('build'))

app.get('/api/location', 
  async (request, response) => {
    try {
        if (request.query.lat && request.query.lng) {
          const location = await weatherService.getbycoords(request.query.lat, request.query.lng)
          response.json(location)
        } else if (request.query.zipcode) {          
          const location = await weatherService.getbyzipcode(request.query.zipcode)
          response.json(location)
        } else {
          throw Error('Missing query params for /api/location')
        }
    } 
    catch (err) {
      console.log(err)
      response.status(400).send()
    }
  }
)

app.listen(process.env.PORT || DEFAULT_PORT)

 