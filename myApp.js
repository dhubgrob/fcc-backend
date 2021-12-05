var express = require('express');
var app = express();
var env = require('dotenv').config();

// app.METHOD(PATH, HANDLER)

/*
app.get('/', function(req, res) {
    console.log(req.body)
    res.send('Hello Express');
  });
*/

app.get("/json", (req, res) => {
    if(env.parsed.MESSAGE_STYLE === "uppercase"){
        res.json({"message" : "HELLO JSON"});
      }
      res.json({"message" : "Hello json"});
  });

  app.get(
    '/now',
    (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
   (req, res) => {
    res.send({
      time : req.time
      })

  })

  app.use(function (req, res, next){
    console.log(req.method + ' '  + req.path + ' - ' + req.ip);
    next();
  })
























 module.exports = app;
