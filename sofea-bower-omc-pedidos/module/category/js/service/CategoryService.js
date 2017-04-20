angular.module('omc.category')

.service('CategoryService', CategoryService);

CategoryService.$inject = ['$http'];

function CategoryService($http) {

    var _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var _headersDelete = {
        'Access-Control-Allow-Methods' : ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var service = {
        findAll: findAll,
        createCategory: createCategory,
        updateCategory: updateCategory,
        deleteCategory: deleteCategory,
        listBy: listBy
    }

    return service;

    function findAll() {
        return $http.get("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/category/list-categories");
    };

    function createCategory(out) {
        console.log("Entrou no método = categoryService.save() post ");
        return $http.post("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/category/create", out, {
            headers: _headers
        });
    };

        function updateCategory(out) {
        console.log("Inside method = categoryService.updatecategory() @PUT ");
        return $http.put("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/category/update", out, {
            headers: _headers
        });
    };

        function deleteCategory(out) {
        console.log("Inside method = categoryService.deletecategory() @DELETE ");
        return $http.delete("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/category/delete?categoryId=" + out.codigo, {
            headers: _headersDelete
        });
    };

    
        function listBy(out) {
        console.log("Inside method = categoryService.deletecategory() @DELETE ");
        return $http.get("http://localhost/omc-pedidos-multi-jta-jndi-jpa-h-jersey-test-backend/category/list-by", out, {
            headers: _headers
        });
    };

};