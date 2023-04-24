const dotenv = require('dotenv')
const express = require('express')
const webRoute = require('./web/route')
dotenv.config()
const app = express()

// Configuration
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','views')
app.use(express.json())
app.use('/',webRoute)

// Run and Listen to events
app.listen(process.env.PORT,()=>console.log(`Server Running on port ${process.env.PORT}`))

// Export in order to be used in other files
module.exports = app