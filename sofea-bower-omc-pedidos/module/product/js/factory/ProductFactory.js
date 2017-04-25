angular.module('omc.product')

.factory('ProductFactory', ProductFactory);

ProductFactory.$inject = ['$log', '$httpParamSerializer'];

function ProductFactory($httpParamSerializer) {

    var factory = {
        listProductsIn: listProductsIn,
        productIn: productIn,
        createProductOut: createProductOut,    
        updateProductOut: updateProductOut,
        deleteProductOut: deleteProductOut,
        categoryIdOut: categoryIdOut
    };

    return factory;


    function listProductsIn(response) {
        var result = {},
            products = [];
        if (response.data != undefined
            && response.data.body != undefined
            && response.data.body.productTypes != null) {

            response.data.body.productTypes.forEach(function(product) {
                products.push({
                    "codigo": product.codigo,
                    "nome": product.nome,
                    "valor": product.valor,
                    "quantidade": product.quantidade,
                    "dataCadastro": product.dataCadastro,
                    "dataUltimaAlteracao": product.dataUltimaAlteracao
                });
            });

            result.products = products;

        } else{
            result = {
                message: response.data.body.message
            };
        }

        console.log("Saiu do método = ProductFactory.listarproductsIn " + response);
        return result;
    };

    function createProductOut(product) {
        return {
            "nome": product.nome,
            "valor": product.valor,
            "quantidade": product.quantidade,
            "dataCadastro": product.dataCadastro,
            "dataUltimaAlteracao": product.dataUltimaAlteracao,
            "categoryId": product.category.id
        }
    };

    function updateProductOut(product) {
        return {
            "codigo": product.codigo,
            "nome": product.nome,
            "valor": product.valor,
            "quantidade": product.quantidade,
            "dataCadastro": product.dataCadastro,
            "dataUltimaAlteracao": product.dataUltimaAlteracao,
            "categoryId": product.categoryId
        }
    };

    function deleteProductOut(product) {
        return {
             "codigo": product.codigo
        }
    };

    function categoryIdOut(categoryId) {
        return {
            "categoryId": categoryId
        }
    };

    function productIn(response) {
        var result = {};

        if (response.data != undefined
            && response.data.body != undefined
            && response.data.body.productType != null) {
            result = response.data.body;
        }else{
            result.message = response.data.body.message;
        }
        return result;
    };


};