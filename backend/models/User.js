const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  unsplashId: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema, 'User');

module.exports = User;