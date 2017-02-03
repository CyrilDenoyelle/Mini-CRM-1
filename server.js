var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.listen(8080)
console.log('yeah now on port 8080')