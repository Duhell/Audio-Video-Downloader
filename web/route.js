const express = require('express')
const Route = express.Router()
const pageControl = require('../Controller/PageControl')

// middleware
Route.use((req,res,next)=>{
    res.locals.currentPath = req.path;
    next()
})

// Get Request
Route.get('/',pageControl.index)
Route.get('/guide',pageControl.guide)
Route.get('/about',pageControl.about)

// Post Request
Route.post('/',pageControl.search)


// Export in order to be used in other files
module.exports = Route