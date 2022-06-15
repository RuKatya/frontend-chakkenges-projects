"use strict";

//EXPRESS
var express = require('express');

var app = express(); //express
//PATH

var path = require('path'); //Colors


var color = require('colors'); //PORT


var PORT = process.env.PORT || 6565; //connect to port 6565

app.use(express["static"](path.resolve(__dirname, 'public'))); //static
//ROUTER

var index = require('./router');

app.use('/', index);
app.get('/blabla', express["static"]('priview-card/build'));
app.get('*', function (req, res) {
  res.status(404).sendFile(__dirname, '/404.html');
});

try {
  app.listen(PORT, function () {
    console.log(color.bgBlue.black("Server listen on", color.bgBlue.white("http://localhost:".concat(PORT))));
  });
} catch (err) {
  console.log(color.bgRed.black(err));
}