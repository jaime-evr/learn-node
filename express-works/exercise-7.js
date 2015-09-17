var express = require('express');

var app = express();

app.get('/search', function(req, res) {
  var obj = req.query;
  res.send(obj);
});

app.listen(process.argv[2]);
