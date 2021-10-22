var http = require("http");
var express = require("express");
const app = express();


app.listen(8080, () => {
    console.log("Conectado");
});

app.get("/", (req, res) => {
    res.send("Ola Mundo");
})