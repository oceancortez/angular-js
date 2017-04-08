angular.module('omc.produto')

.service('ProdutoFacade', ProdutoFacade);

ProdutoFacade.$inject = ['ProdutoService', 'ProdutoFactory', '$q'];


function ProdutoFacade(ProdutoService, ProdutoFactory, $q) {

    var facade = {
        listarProdutos: listarProdutos,
        cadastrarProduto: cadastrarProduto
    }

    return facade;


    function listarProdutos() {
        return $q(function(resolve, reject) {
            ProdutoService.findAll().then(function(response) {

                var retorno = ProdutoFactory.listarProdutosIn(response);
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

    function cadastrarProduto(produto) {
        return $q(function(resolve, reject) {
            var out = ProdutoFactory.cadastrarProdutoOut(produto);
            ProdutoService.cadastrarProduto(out).then(function(response) {
                var retorno = ProdutoFactory.cadastrarProdutoIn(response);
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