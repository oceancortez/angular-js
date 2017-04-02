var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Lista de pessoas
var contatos = [
    { id: 1, nome: "Manuel", email: "rua", dtNascimento: new Date("1979-09-28T00:00:00.000Z"), telefone: "99999999", sexo: "F" },
    { id: 2, nome: "Maria", email: "rua", dtNascimento: new Date("1979-09-28T00:00:00.000Z"), telefone: "99999999", sexo: "F" },
    { id: 3, nome: "Maria", email: "rua", dtNascimento: new Date("1979-09-28T00:00:00.000Z"), telefone: "99999999", sexo: "F" }
];

var lastId = 3;

// Obter pessoa
app.get("/api/contato/:id", function(req, res) {
    var id = req.params.id;
    var result = "not.found";
    for (var i = 0; i < contatos.length; i++) {
        if (contatos[i].id == id) {
            result = contatos[i];
            break;
        }
    }
    console.log(result);
    res.send(result);
});

// Apagar pessoa
app.delete("/api/contato/:id", function(req, res) {
    var id = req.params.id;
    var result = "not.found";
    for (var i = 0; i < contatos.length; i++) {
        if (contatos[i].id == id) {
            contatos.splice(i, 1);
            result = "ok";
            break;
        }
    }
    console.log(result);
    res.send(result);
});

// Criar novo registro
app.post("/api/contato", function(req, res) {
    var record = req.body;
    record.id = ++lastId;
    contatos.unshift(record);
    console.log("ok");
    res.send("ok");
});

// Atualizar registro
app.put("/api/contato", function(req, res) {
    var result = "not.found";
    for (var i = 0; i < contatos.length; i++) {
        if (contatos[i].id == req.body.id) {
            contatos[i] = req.body;
            result = "ok";
            break;
        }
    }
    console.log(result);
    res.send(result);
});

// Definir um endpoint da API
app.get("/api/contatos", function(req, res, next) {
    console.log(contatos);
    res.send(contatos);
});


// Definir a route principal
app.get('/api/', function(req, res) {
    res.send('Welcome to API');
    console.log('Entrou na raiz do host Welcome to API');
});


// Aplicação disponível em http://127.0.0.1:9000/
app.listen(9000);

console.log('Aplicação disponível em http://127.0.0.1:9000');