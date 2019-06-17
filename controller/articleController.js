var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");

require("../models/Category");
require("../models/Article");

var Category = mongoose.model("categories");
var Article = mongoose.model("Articles");


router.get('/', function(req, res, next) {

     Article.find({}).populate({"path":"category"}).then((result)=>{
        res.send(result);

    })
         
});

router.get('/:id', function(req, res, next) {
      Article.find({_id: req.params.id}).populate({"path":"category"}).then((result)=>{
        res.send(result);

    })
         
});

router.post('/add', function(req, res, next) {

        let article = new Article(req.body);
        article.save((error)=>{
            if(!error)
            return res.status(200).send({status: 'added sucessfully'});
        });
        
});

router.post('/edit/:id', function(req, res, next) {

    // Find the existing resource by ID
   Article.findByIdAndUpdate(req.params.id,req.body,
    {new: true},
    (err, article) => {
        if (err) return res.status(500).send(err);
        return res.send(article);
    })     
      
});


router.get('/delete/:id', function(req, res, next) {

    Article.findByIdAndRemove(req.params.id, (err, article) => {
        return res.status(200).send({status: 'removed sucessfully', article});
       

    });
        
      
});

module.exports = router;