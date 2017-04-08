angular.module('omc.cliente')

.service('ClienteService', ClienteService);

ClienteService.$inject = ['$http'];

function ClienteService($http) {

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
        console.log("Entrou no método = ClienteService.findAll ");
        return $http.get("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/cliente/listar-clientes");
    };

    function cadastrarCliente(out) {
        console.log("Entrou no método = ClienteService.save() post ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/cliente/cadastrar", out, {
            headers: _headers
        });
    };


};