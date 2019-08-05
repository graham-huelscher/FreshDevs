const mongoose = require('mongoose');
const connectionString = `mongodb+srv://${process.env.MongoAtlasId}:${process.env.MongoAtlasPassword}@maincluster-zqwsp.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// Tell Mongoose to use ES6 Promises for its promises
mongoose.Promise = global.Promise;

// Log to console any errors or a successful connection.
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to db")
})

module.exports = mongoose;