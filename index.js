var bodyParser = require('body-parser')
var express = require("express");
var app = express();
app.use(express.logger());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app
    .get('/buy', function(req, res) {
        res.send(JSON.stringify(req.query));
    })
    .post('/buy', function(req, res) {
        res.send(JSON.stringify(req.body))
    });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
