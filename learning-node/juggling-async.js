var bl = require('bl');
var http = require('http');

var results = [];
var count = 0;

function getUrl(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        return console.log(err);
      } else {
        results[index] = data.toString();
        count++;

        if (count == 3) {
          results.forEach(function(result) {
            console.log(result);
          })
        }

      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  getUrl(i);
}


