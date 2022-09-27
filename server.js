const express = require('express')
const app = express()
//mongoose replaces MongoClient
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const connectDB = require("./config/database");
const cors = require('cors')

//Uses .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connects to database
connectDB();

// defines our routes
const mainRoutes = require('./routes/main')
const bookRoutes = require('./routes/books')

//allows forms to use 'put' and 'delete' methods
app.use(methodOverride("_method"));

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// sets our routes
app.use('/', mainRoutes)
app.use('/books', bookRoutes)


app.listen(process.env.PORT || PORT, ()=>{
 console.log(`Server running on port ${process.env.PORT}`)
})

