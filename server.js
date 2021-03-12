const express = require('express')
const ffmpeg = require('ffmpeg')
var compression = require('compression')

const htmlRouter = require('./routes/html-routes.js')

// Sets up the Express App
const app = express()
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// compress all responses
app.use(compression())

// Static directory
app.use(express.static('public'))

// Invoke routes
htmlRouter(app)

// Starts our Express app
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))