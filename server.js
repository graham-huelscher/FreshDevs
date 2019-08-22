require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || process.argv[2] || 8080
const mongoose = require('./backend/Config/MongoDBConnection')
const DbController = require('./backend/Controllers/DbController')
const UnsplashController = require('./backend/Controllers/UnsplashController')

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', async (req, res) => {
  res.json("Server online")
})

app.get('/unsplash', async (req, res) => {
  res.json(await UnsplashController.getRandImg())
})

app.get('/user', async (req, res) => {
  res.json(await DbController.getAll())
})
app.post('/user', async (req, res) => {
  const { result, err } = await DbController.addUser(req.body)
  if (result) console.log("\nUser successfully added")
  else console.log(err)
  res.json(result)
})

app.put('/user', async (req, res) => {
  const result = await DbController.updateUser(req.body)

  if (result) console.log('User succesfully updated')
  else console.log(`No user found under the name of ${req.body.oldName}`)
  res.json(result)
})

app.get('*', (req, res) => {
  res.json("This is not the path you are looking for.")
})


// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})