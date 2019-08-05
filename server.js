require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || process.argv[2] || 8080
const mongoose = require('./backend/Config/MongoDBConnection')
const DbController = require('./backend/Controllers/DbController')

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res)=> {
    res.send("Online")
})
app.post('/addUser', async (req, res)=>{
    console.log(await DbController.addUser(req.body))
    res.send("ok")
})

app.get('*', (req, res) => {
  res.send("This is not the path you are looking for.")
})
//app.put('/')

// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})