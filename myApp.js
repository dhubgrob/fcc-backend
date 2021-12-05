var express = require('express');
var app = express();

// app.METHOD(PATH, HANDLER)
app.get('/', function(req, res) {
    console.log(req)
    res.send('Response String');
  });




























 module.exports = app;
