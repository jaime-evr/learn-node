var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    var obj = JSON.parse(data.toString());
    res.send(obj);
  });
});

app.listen(process.argv[2]);
