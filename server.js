var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var PORT = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.listen(PORT,function() {
  console.log("listening on port : " + PORT);
})

require('backend.js')(app);
require('frontend.js')(app);
