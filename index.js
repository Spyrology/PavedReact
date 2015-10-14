var express = require('express')
var morgan = require('morgan');
var serveStatic = require('serve-static')
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

// web app middleware
var app = express();
// console logger for server
app.use(morgan('short'));

// for serving json api (stub included below)
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// bootstrap public/index.html
app.use(methodOverride());
app.use(serveStatic(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var url = process.env.IP || '0.0.0.0'
var port = 3000;
app.set('port', process.env.PORT || port)

var server = app.listen(app.get('port'), url, function () {
    console.log('Static server listening url %s on port %s', url, server.address().port);
})