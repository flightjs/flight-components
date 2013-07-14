var express = require('express');
var app = express();

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
