//importing all the required packages
const express = require('express')
require('dotenv').config()
var cookieParser = require('cookie-parser')

const crudRouter=require("./routes/crud")

//constants
const port = process.env.PORT


//initializing the express
const app = express()

//using middlewares
app.use(cookieParser())

//all the routes for the app
app.use("/",crudRouter);


//creating a server in the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})