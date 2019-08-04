const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Users = mongoose.model('Users', UserSchema, 'Users');

module.exports = Users;