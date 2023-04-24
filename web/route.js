const express = require('express')
const Route = express.Router()
const pageControl = require('../Controller/PageControl')

// Get Request
Route.get('/',pageControl.index)

// Post Request
Route.post('/',pageControl.search)


// Export in order to be used in other files
module.exports = Route