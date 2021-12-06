var express = require('express');
var app = express();
var env = require('dotenv').config();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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


app.use("/public", express.static(__dirname + "/public"));




app.use(function (req, res, next){
    console.log(req.method + ' '  + req.path + ' - ' + req.ip);
    next();
  })

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

app.get("/:word/echo", (req, res) => {
    const word = req.params.word;
    res.json({
       "echo" : word
    });
  });
  

  app.post("/name", function(req, res) {
    // Handle the data in the request
    let string = req.body.first + " " + req.body.last;
    res.json({ "name" : string });
  });






















 module.exports = app;
