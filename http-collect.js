var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    var count = data.toString().split('').length
    console.log(count);
    console.log(data.toString());
  }));
});
