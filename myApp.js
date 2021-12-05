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

app.get( '/', (req, res) => {
    res.send(env.parsed.MESSAGE_STYLE);
})


app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message" : "HELLO JSON"});
      }
      res.json({"message" : "Hello json"});
  });


























 module.exports = app;
