var fileFilter = require('./file-filter');

var dir = process.argv[2];
var ext = process.argv[3];

fileFilter(dir, ext, function(err, list) {
  list.forEach(function(filename) {
    console.log(filename);
  });
});
