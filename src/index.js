const express = require('express')
const cors = require('cors')
const weatherService = require('./services/weather')
const { request, response } = require('express')
const {DEFAULT_PORT} = require("./utils/config")
const logger = require("./utils/logger")

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
  async (request, response, next) => {
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
      next(err)
    }
  }
)

app.use(function (err, req, res, next) {
  logger.log('error', err.message)
  if (err.name === 'WEATHERSERVICE') {
    if (err.message === 'WEATHERSERVICE_EXCEPTION_ACCESS_KEY_EXPIRED') {
      res.status(500).send('The weather service we use has hit its use limit this month. Sorry for the inconvenience!')
    } else {
      res.status(400).send(err.message)
    }
  }
  res.status(500).send(err.message)  
})

app.listen(process.env.PORT || DEFAULT_PORT)

 