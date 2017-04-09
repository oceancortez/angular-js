angular.module('omc.produto')

.factory('ProdutoFactory', ProdutoFactory);

ProdutoFactory.$inject = ['$log', '$q'];

function ProdutoFactory() {

    var factory = {
        listarProdutosIn: listarProdutosIn,
        cadastrarProdutoOut: cadastrarProdutoOut,
        cadastrarProdutoIn: cadastrarProdutoIn

    };

    return factory;



    function listarProdutosIn(response) {
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

        console.log("Saiu do método = ProdutoFactory.listarProdutosIn " + response);
        return lista;
    };

    function cadastrarProdutoOut(produto) {
        return {
            "nome": produto.nome,
            "valor": produto.valor,
            "quantidade": produto.quantidade,
            "dataCadastro": produto.dataCadastro,
            "dataUltimaAlteracao": produto.dataUltimaAlteracao
        }
    }

    function cadastrarProdutoIn(response) {
        var retorno;
        if (response.data != undefined) {
            retorno = response.data;
        }

        return retorno;
    }

};