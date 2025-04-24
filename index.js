var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Thetips4you k8s" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World k8s" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works k8s!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
