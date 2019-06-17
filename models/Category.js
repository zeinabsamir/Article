var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var categorySchema = new mongoose.Schema({
   name: String,
});

mongoose.model('categories', categorySchema);