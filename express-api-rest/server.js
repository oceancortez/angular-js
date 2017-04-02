var express = require('express');
var app = express();
    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('Welcome to API');
});

// Lista de Utilizadores
var users = [
  { id: 1, username: 'Manuel', email: 'manuel@examplo.com' },
  { id: 2, username: 'Maria', email: 'maria@examplo.com' }
];

// Definir um endpoint da API
app.get('/api/get_users', function(req, res, next) {
  res.send(users);
})

// Aplica��o dispon�vel em http://127.0.0.1:9000/
app.listen(9000);