var express = require('express');
var app = express();
var fs = require("fs");


var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/new', function (req, res){
  fs.readFile('./week41-day1.json', 'utf8', function(err,data){
    if (err) throw err;
    var training = JSON.parse(data);
    res.send(data);

  });

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
