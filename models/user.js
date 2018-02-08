// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var userschema = new Schema({
  First: {
    type: String,
    required: true
  },
  Last: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Pwd: {
    type: String,
    required: true
  },
  Photo: {
   type: String,
  },
  Usertype:
  {
  type: String,
  required: true
  },
  resume: {
  type: String,
  }
});

// Create the JobSeeker model with Mongoose
var user = mongoose.model('user', userschema);

// Export the Model
module.exports = user;