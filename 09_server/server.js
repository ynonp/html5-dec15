var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());

var counter = 0;
var tagline = 'I am your father';

app.get('/hello', function(req, res) {
  res.send(
    {
      text: "hello world",
      counter: counter++,
      tagline: tagline
    });
});

app.post('/tagline', function(req, res) {
  var newTagline = req.body.tagline;
  console.log('got: ' + req.body.tagline);
  console.dir(req.body);
  if (newTagline) {
    tagline = newTagline;
  }

  res.sendStatus(200);
});









var port = 3100;
app.listen(port);