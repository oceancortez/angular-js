angular.module('omc.product')

.service('ProductFacade', ProductFacade);

ProductFacade.$inject = ['ProductService', 'ProductFactory', '$q'];


function ProductFacade(ProductService, ProductFactory, $q) {

    var facade = {
        listProducts: listProducts,
        createProduct: createProduct,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct,
        listProductsByCategoryId: listProductsByCategoryId
    };

    return facade;


    function listProducts() {
        return $q(function(resolve, reject) {
            ProductService.findAll().then(function(response) {

                resolve(ProductFactory.listProductsIn(response));

            }, function error(response) {
                reject(response);
            });
        });
    };


    function listProductsByCategoryId(categoryId){
        return $q(function(resolve, reject) {
            var out = ProductFactory.categoryIdOut(categoryId);
            ProductService.listByCategoryId(out).then(function(response) {

                resolve(ProductFactory.listProductsIn(response));

            }, function error(response) {
                reject(response);
            });
        });
    };

    function createProduct(produto) {
        return $q(function(resolve, reject) {
            var out = ProductFactory.createProductOut(produto);
            ProductService.createProduct(out).then(function(response) {
                resolve(ProductFactory.productIn(response));

            }, function error(response){
                reject(response);
            });
        });
    };

        function updateProduct(produto) {
        return $q(function(resolve, reject) {
            var out = ProductFactory.updateProductOut(produto);
            ProductService.updateProduct(out).then(function(response) {
                var retorno = ProductFactory.productIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            });
        });
    };

        function deleteProduct(product) {
        return $q(function(resolve, reject) {
            var out = ProductFactory.deleteProductOut(product);
            ProductService.deleteProduct(out).then(function(response) {
                var retorno = ProductFactory.productIn(response);
                if (retorno && (!(retorno.indexOf('REJECT') > 0))) {
                    resolve(retorno);
                } else {
                    reject(retorno);
                }
            }, function error(response){
                    reject(response.message);
             });
        });
    };

};