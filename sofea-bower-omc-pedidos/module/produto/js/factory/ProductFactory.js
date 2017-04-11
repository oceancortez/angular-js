angular.module('omc.produto')

.factory('ProductFactory', ProductFactory);

ProductFactory.$inject = ['$log', '$httpParamSerializer'];

function ProductFactory($httpParamSerializer) {

    var factory = {
        listProductsIn: listProductsIn,
        productIn: productIn,
        createProductOut: createProductOut,    
        updateProductOut: updateProductOut,
        deleteProductOut: deleteProductOut
    };

    return factory;


    function listProductsIn(response) {
        var lista = [];
        if (response.data != undefined) {
            response.data.forEach(function(product) {
                lista.push({
                    "codigo": product.codigo,
                    "nome": product.nome,
                    "valor": product.valor,
                    "quantidade": product.quantidade,
                    "dataCadastro": product.dataCadastro,
                    "dataUltimaAlteracao": product.dataUltimaAlteracao
                });
            });
        }

        console.log("Saiu do método = ProductFactory.listarproductsIn " + response);
        return lista;
    };

    function createProductOut(product) {
        return {
            "nome": product.nome,
            "valor": product.valor,
            "quantidade": product.quantidade,
            "dataCadastro": product.dataCadastro,
            "dataUltimaAlteracao": product.dataUltimaAlteracao
        }
    };

    function updateProductOut(product) {
        return {
            "codigo": product.codigo,
            "nome": product.nome,
            "valor": product.valor,
            "quantidade": product.quantidade,
            "dataCadastro": product.dataCadastro,
            "dataUltimaAlteracao": product.dataUltimaAlteracao
        }
    };

    function deleteProductOut(product) {
        return {
             "codigo": product.codigo
            //,
            // "nome": product.nome,
            // "valor": product.valor,
            // "quantidade": product.quantidade,
            // "dataCadastro": product.dataCadastro,
            // "dataUltimaAlteracao": product.dataUltimaAlteracao
        }
    };

    function productIn(response) {
        var retorno;
        if (response.data != undefined) {
            retorno = response.data;
        }
        return retorno;
    };

};