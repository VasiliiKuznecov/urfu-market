var express = require("express");
var app = express();
app.use(express.logger());

app
    .get('/buy', function(req, res) {
        res.send(JSON.stringify(req.query));
    })
    .post('/buy', function(req, res) {
        res.send(JSON.stringify(req.query))
    });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
