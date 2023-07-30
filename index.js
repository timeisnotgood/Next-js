const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const path = require("path")
const port = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.set("view engine", "ejs")
app.set("public", path.resolve("../client/public") )

app.get('/home', (req, res)=>{
   return  res.render('index')
})
app.get("/test", (req, res)=>{
    res.end("<h3>Hello There</h3>")
})

app.listen(port, (req, res) => console.log("Server Started in Port :", port) )