var express = require('express');
var app = express();
// var fs = require('fs');
// var url = require('url');

app.use(express.static('www'));

app.listen(80, function(){
    console.log("on port 80");
});