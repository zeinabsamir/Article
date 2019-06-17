var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");

require("../models/Category");
require("../models/Article");

var Category = mongoose.model("categories");
var Article = mongoose.model("Articles");


router.get('/', function(req, res, next) {

     Category.find({}).then((result)=>{
        res.send(result);

    })
         
});

router.get('/:id', function(req, res, next) {
      Category.find({_id: req.params.id}).then((result)=>{
        res.send(result);

    })
         
});

router.post('/add', function(req, res, next) {

        let category = new Category(req.body);
        category.save((error)=>{
            if(!error)
            return res.status(200).send({status: 'added sucessfully'});
        });
        
});

router.post('/edit/:id', function(req, res, next) {

    // Find the existing resource by ID
   Category.findByIdAndUpdate(req.params.id,req.body,
    {new: true},
    (err, category) => {
        if (err) return res.status(500).send(err);
        return res.send(category);
    })     
      
});


router.get('/delete/:id', function(req, res, next) {

    Category.findByIdAndRemove(req.params.id, (err, category) => {
       Article.remove({category: req.params.id}, (err, article) => {
        if(!err)
         return res.status(200).send({status: 'removed sucessfully'});
       })  

    });
        
      
});

module.exports = router;