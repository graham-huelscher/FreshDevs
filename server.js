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
app.get('/', (req, res) => {
  res.send("Online")
})
app.post('/user', async (req, res) => {
  const { result, err } = await DbController.addUser(req.body)
  if (result) console.log("\nUser successfully added")
  else console.log(err)
  res.send(result)
})

app.put('/user', async (req, res) => {
  res.json(await DbController.updateUser(req.body))
})

app.get('*', (req, res) => {
  res.send("This is not the path you are looking for.")
})


// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})