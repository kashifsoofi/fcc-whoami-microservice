const express = require("express");
const path = require("path");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    //res.sendFile('index.html');
    var appUrl = req.protocol + '://' + req.get('host') + '/';
    res.render('index', { appUrl: appUrl });
});

app.get('/api/whoami', function (req, res) {
    var ipaddress  = req.headers['x-forward-for'] || req.connection.remoteAddress;
    var lang = req.headers['accept-language'].split(',')[0];
    var software = req.headers['user-agent'].split(/[\(\)]/)[1];

    var result = {
        ipaddress: ipaddress,
        language: lang,
        software: software
    };
    res.send(result);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Timestamp microservice listening on port ' + port + '!');
});