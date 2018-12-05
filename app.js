var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port=process.env.PORT || 3000

app.get('/api/soma/:num1/:num2', function (req, res) {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let result = num1 + num2;
    res.send(result + "");
});

app.get('/api/sub/:num1/:num2', function (req, res) {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let result = num1 - num2;
    res.send(result + "");
});
app.get('/api/mult/:num1/:num2', function (req, res) {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let result = num1 * num2;
    res.send(result + "");
});
app.get('/api/div/:num1/:num2', function (req, res) {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let result = num1 / num2;
    res.send(result + "");
});
app.use(express.static('./public'));
app.listen(port, function () {
    console.log('Servidor rodando na porta ' +port+'.');
});