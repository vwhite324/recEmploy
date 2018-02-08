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
    required: true,
    unique : true,
    validate: function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
  },
  Pwd: {
    type: String,
    required: true,
    minlength: 8
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
  },
  photo: {
  type: String,
  },
    about: {
  type: String,
  },
    experience: {
  type: String,
  },
    skills: {
  type: String,
  },
  video:{
    type: String,
  }
  
});

// Create the JobSeeker model with Mongoose
var user = mongoose.model('user', userschema);

// Export the Model
module.exports = user;