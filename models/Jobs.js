// Require Mongoose
var mongoose = require('mongoose');
// Create a Schema Class
var Schema = mongoose.Schema;

var JobsSchema = new Schema({
  
  title:{
  type: [String],
  required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  locations: {
    type: String,
    required: true
  },
  classification: {
    type: String,
    required: true
  },
  Recruiter:{
    type:String,
  },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Aplication' }]

});
JobsSchema.index({title: 'text'});
// Create the Recruiter  model with Mongoose
var Jobs  = mongoose.model('jobs', JobsSchema);

// Export the Model
module.exports = Jobs ;