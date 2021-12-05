var express = require('express');
var app = express();

// app.METHOD(PATH, HANDLER)
app.get('/', function(req, res) {
    console.log(req.body)
    res.send('Hello Express');
  });

  console.log('hellooooo');



























 module.exports = app;
