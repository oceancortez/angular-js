angular.module('omc.pedidos.cliente')

.service('clienteService', clienteService);

clienteService.$inject = ['$http'];

function clienteService($http) {

    var _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var service = {
        findAll: findAll,
        cadastrarCliente: cadastrarCliente
    }

    return service;

    function findAll() {
        console.log("Entrou no método = clienteService.findAll ");
        return $http.get("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/cliente/listar-clientes");
    };

    function cadastrarCliente(out) {
        console.log("Entrou no método = clienteService.save() post ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/cliente/cadastrar", out, {
            headers: _headers
        });
    };


};