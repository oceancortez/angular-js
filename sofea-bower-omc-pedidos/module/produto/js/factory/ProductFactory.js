angular.module('omc.produto')

.factory('ProductFactory', ProductFactory);

ProductFactory.$inject = ['$log', '$q'];

function ProductFactory() {

    var factory = {
        listProductsIn: listProductsIn,
        createProductOut: createProductOut,
        createProductIn: createProductIn

    };

    return factory;



    function listProductsIn(response) {
        var lista = [];
        if (response.data != undefined) {
            response.data.forEach(function(produto) {
                lista.push({
                    "codigo": produto.codigo,
                    "nome": produto.nome,
                    "valor": produto.valor,
                    "quantidade": produto.quantidade,
                    "dataCadastro": produto.dataCadastro,
                    "dataUltimaAlteracao": produto.dataUltimaAlteracao
                });
            });
        }

        console.log("Saiu do método = ProductFactory.listarProdutosIn " + response);
        return lista;
    };

    function createProductOut(produto) {
        return {
            "nome": produto.nome,
            "valor": produto.valor,
            "quantidade": produto.quantidade,
            "dataCadastro": produto.dataCadastro,
            "dataUltimaAlteracao": produto.dataUltimaAlteracao
        }
    }

    function createProductIn(response) {
        var retorno;
        if (response.data != undefined) {
            retorno = response.data;
        }

        return retorno;
    }

};