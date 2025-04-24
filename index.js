var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Thetips4you ahahahahaha" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello Worldhahahah" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works hore!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
