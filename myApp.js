var express = require('express');
var app = express();

// app.METHOD(PATH, HANDLER)

/*
app.get('/', function(req, res) {
    console.log(req.body)
    res.send('Hello Express');
  });
*/


app.get( '/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  })

app.use('/public', express.static(__dirname + '/public'));


























 module.exports = app;
