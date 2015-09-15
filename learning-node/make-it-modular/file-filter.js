var fs = require('fs');
var path = require('path');

var filter = function(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      var filteredList = [];
      list.forEach(function(filename) {
        if (path.extname(filename) ==  '.' + ext) {
          filteredList.push(filename);
        }
      });
      callback(null, filteredList);
    }
  });
};

module.exports = filter;
