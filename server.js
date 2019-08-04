require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || process.argv[2] || 8080
//const mongoose = require('./backend/Config/MongoDBConnection')

//const MetadataController = require('./Metadata/MetadataController')

//MetadataController.getMetadata();

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res)=> {
    res.send("online")
})
app.post('/addUser', (req, res)=>{
    console.log(req.body)
    res.send("ok")
})
//app.put('/')

// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})