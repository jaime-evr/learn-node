var fs = require('fs');
var file = process.argv[2];

var buffer = fs.readFile(file, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    var count = data.toString().split('\n').length;
    console.log(count - 1);
  }
});
