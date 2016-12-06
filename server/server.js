// Your server code here!
var express = require('express');
var app = express();
var data = require('./data');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Sets the header for EVERY request
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE');
  next();
});

app.post('/vehicles', function(req, res) {
  var vehicle = req.body;
  var counter = data[data.length-1].id + 1;
  vehicle.id = counter;
  vehicle.push(dog);
  res.send(data);
});

app.delete('/vehicles', function(req, res) {
  // determine what we're sending - through dog name or index? index
  var dogIndex = req.body.value;
  // access data and splice out the dog (index, how many to splice)
  var deletedDog = data.splice(dogIndex, 1);
  // send the deleted dog
  res.send(deletedDog);
});

app.get('/vehicles', function (req, res) {
  res.send(data);
});

app.all('*', function(req, res) {
  res.send('hello world');
});



app.listen(3000, function () {
  console.log('server is listening');
});