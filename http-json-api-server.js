var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

  var time = new Date(url.parse(req.url, true).query.iso);

  var data = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };

  var unixData = { unixtime: time.getTime() };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (/^\/api\/parsetime/.test(req.url)) {
    res.end(JSON.stringify(data));
  } else if (/^\/api\/unixtime/.test(req.url)) {
    res.end(JSON.stringify(unixData));
  }
});

server.listen(process.argv[2]);
