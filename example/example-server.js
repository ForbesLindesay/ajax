var express = require('express');
var app = express();

app.use(express.static(require('path').join(__dirname, 'example')));
app.use(express.static(__dirname));

app.listen(3000);