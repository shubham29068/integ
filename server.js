const express = require('express')
const app = express()
const http = require('http')
const port = process.env.port || 4500
const path = require('path')
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.dbUrl)
mongoose.connection.on('connected', () => {
    console.log("connected to db");
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send("kida")
    res.sendFile(path.join(__dirname, ('public/index.html')))
})

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`);
})