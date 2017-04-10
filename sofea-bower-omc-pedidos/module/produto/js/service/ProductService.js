angular.module('omc.produto')

.service('ProductService', ProductService);

ProductService.$inject = ['$http'];

function ProductService($http) {

    var _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var service = {
        findAll: findAll,
        createProduct: createProduct
    }

    return service;

    function findAll() {
        return $http.get("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/product/list-products");
    };

    function createProduct(out) {
        console.log("Entrou no método = productService.save() post ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/product/create", out, {
            headers: _headers
        });
    };

        function updateProduct(out) {
        console.log("Inside method = productService.updateProduct() @PUT ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/product/update", out, {
            headers: _headers
        });
    };

        function deleteProduct(out) {
        console.log("Inside method = productService.deleteProduct() @DELETE ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/product/delete", out, {
            headers: _headers
        });
    };

    
        function listBy(out) {
        console.log("Inside method = productService.deleteProduct() @DELETE ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/product/list-by", out, {
            headers: _headers
        });
    };


};