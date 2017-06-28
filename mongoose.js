var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfull');
  }
});

var MessageSchema = mongoose.Schema({
  checkbox: Boolean,
  description: String, 
  createdAt : {type: Date, default: Date.now}
});

var Message = mongoose.model('Message', MessageSchema);




module.exports = mongoose;