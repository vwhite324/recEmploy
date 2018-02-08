var mongoose = require('mongoose');
// Create a Schema Class
var Schema = mongoose.Schema;

var ApSchema = new Schema({

  Applicant_id:{ type: Schema.Types.ObjectId, ref: 'user' },
  URL_Video: {
  type: String
  }

});
// Create the Recruiter  model with Mongoose
var Aplication  = mongoose.model('Aplication', ApSchema);

// Export the Model
module.exports = Aplication ;