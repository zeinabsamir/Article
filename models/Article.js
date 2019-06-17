let mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

let articleSchema = new mongoose.Schema({
   title: String, 
   body: String,
   category: { type: Schema.Types.ObjectId, ref: 'categories' } 
});


mongoose.model('Articles', articleSchema);