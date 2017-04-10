angular.module('omc.produto')

.service('ProductFacade', ProductFacade);

ProductFacade.$inject = ['ProductService', 'ProductFactory', '$q'];


function ProductFacade(ProductService, ProductFactory, $q) {

    var facade = {
        listProducts: listProducts,
        createProduct: createProduct
    }

    return facade;


    function listProducts() {
        return $q(function(resolve, reject) {
            ProductService.findAll().then(function(response) {

                var retorno = ProductFactory.listProductsIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            }, function error(response) {
                reject(reject);
            });
        });
    };

    function createProduct(produto) {
        return $q(function(resolve, reject) {
            var out = ProductFactory.createProductOut(produto);
            ProductService.createProduct(out).then(function(response) {
                var retorno = ProductFactory.createProductIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            });
        });
    };



}