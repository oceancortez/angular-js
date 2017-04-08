angular.module('omc.pedido')

.service('PedidoService', PedidoService);

PedidoService.$inject = ['$http'];

function PedidoService($http) {

    var _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var service = {
        findAll: findAll,
        cadastrarPedido: cadastrarPedido
    }

    return service;

    function findAll() {
        console.log("Entrou no método = PedidoService.findAll ");
        return $http.get("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/pedido/listar-pedidos");
    };

    function cadastrarPedido(out) {
        console.log("Entrou no método = PedidoService.save() post ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/pedido/cadastrar", out, {
            headers: _headers
        });
    };


};