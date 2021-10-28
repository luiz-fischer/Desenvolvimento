var http = require("http");
var express = require("express");
const app = express();
var path = require("path");
const porta = 8080;

app.listen(porta, () => {
    console.log("Conectado na porta: " + porta);
});

app.get("/", (req, res) => {
    res.send("<h1> HOME </h1>");
})

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/frontend/index.html'));
});

app.get('/somar', function (req, res) {
    let numero1 = parseInt(req.query.numero1);
    let numero2 = parseInt(req.query.numero2);
    let somar = numero1 + numero2;

    res.send("<h1> SOMA: " + somar + "</h1>");
});


