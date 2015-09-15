var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    if (err)
      return console.log(err);
    var count = data.toString().length
    console.log(count);
    console.log(data.toString());
  }));
});
