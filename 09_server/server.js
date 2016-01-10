var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));
app.use(bodyParser.json());

var counter = 0;
var tagline = 'I am your father';

app.get('/hello', function(req, res) {
  var data = {
    text: "hello world",
    counter: counter++,
    tagline: tagline
  };

  res.send(data);
  io.sockets.emit('counter',data );
});

app.post('/tagline', function(req, res) {
  var newTagline = req.body.tagline;
  console.log('got: ' + req.body.tagline);
  console.dir(req.body);
  if (newTagline) {
    tagline = newTagline;
    io.sockets().emit('tagline', {tagline: newTagline});
  }



  res.sendStatus(200);
});












var port = 3100;
server.listen(port);

console.log('start');














