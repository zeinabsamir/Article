const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

const Article = require('./controller/articleController');
const Category = require('./controller/categoryController');


app.set('port', (process.env.PORT || 8080));

mongoose.connect("mongodb://localhost:27017/Article");

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/articles', Article);
app.use('/category', Category);


app.listen(app.get('port'), () => console.log(`App listening on port ${app.get('port')}`));