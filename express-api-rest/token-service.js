var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Lista de pessoas
var tokens = [
    {token: "", codigoErro: "1", mensagemErro: "error"},
    {token: 2, codigoErro: "0", mensagemErro: "success"}
];

var lastId = 2;

// Obter pessoa
app.get("/api/token/:id", function (req, res) {
    var id = req.params.id;
    var result = "not.found";
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].id == id) {
            result = tokens[i];
            break;
        }
    }
console.log(result);
    res.send(result);
});

// Criar novo registro
app.post("/api/gerarToken", function (req, res) {
    var record = req.body;
    console.log(record);
    record.token = ++lastId;
    record.codigoErro = 0;
    record.mensagemErro = 'success';
    tokens.unshift(record);
    console.log("ok");
    res.send(record);
});

// Apagar pessoa
app.delete("/api/token/:id", function (req, res) {
    var id = req.params.id;
    var result = "not.found";
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].id == id) {
            tokens.splice(i, 1);
            result = "ok";
            break;
        }
    }
   console.log(result);
    res.send(result);
});

// Criar novo registro
app.post("/api/token", function (req, res) {
    var record = req.body;
    record.id = ++lastId;
    tokens.unshift(record);
   console.log("ok");
    res.send("ok");
});

// Atualizar registro
app.put("/api/token", function (req, res) {
    var result = "not.found";
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].id == req.body.id) {
            tokens[i] = req.body;
            result = "ok";
            break;
        }
    }
console.log(result);	
    res.send(result);
});

// Definir um endpoint da API
app.get("/api/tokens", function (req, res, next) {
	console.log(tokens);	
    res.send(tokens);
});

    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('Welcome to API');
});


 console.log("Aplicação disponível em http://127.0.0.1:9000/");
app.listen(9000);
