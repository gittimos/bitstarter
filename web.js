var express = require('express');
var fs = require('filesystem');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html',function(data){
    var buf = new Buffer(data);
    response.send(buf.toString());
  });
  // response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
