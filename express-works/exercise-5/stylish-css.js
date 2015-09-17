var express = require('express');
var path = require('path');

var app = express();

app.use(require('stylus').middleware(path.join(__dirname, '/src')));
app.use(express.static(path.join(__dirname, '/src')));

app.listen(process.argv[2]);
