fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var text ="tmp" ;

fs.readFile("index.html", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
text=data;
  });
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
