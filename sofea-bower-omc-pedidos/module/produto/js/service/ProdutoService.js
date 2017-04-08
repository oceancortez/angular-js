angular.module('omc.produto')

.service('ProdutoService', ProdutoService);

ProdutoService.$inject = ['$http'];

function ProdutoService($http) {

    var _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var service = {
        findAll: findAll,
        cadastrarProduto: cadastrarProduto
    }

    return service;

    function findAll() {
        console.log("Entrou no método = produtoService.findAll ");
        return $http.get("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/produto/listar-produtos");
    };

    function cadastrarProduto(out) {
        console.log("Entrou no método = produtoService.save() post ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/produto/cadastrar", out, {
            headers: _headers
        });
    };


};