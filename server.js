var express = require("express");
var app = express();

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