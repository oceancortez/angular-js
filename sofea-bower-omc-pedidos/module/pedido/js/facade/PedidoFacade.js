angular.module('omc.pedido')

.service('PedidoFacade', PedidoFacade);

PedidoFacade.$inject = ['PedidoService', 'PedidoFactory', '$q'];


function PedidoFacade(PedidoService, PedidoFactory, $q) {

    var facade = {
        listarPedidos: listarPedidos,
        cadastrarPedido: cadastrarPedido
    }

    return facade;


    function listarPedidos() {
        return $q(function(resolve, reject) {
            PedidoService.findAll().then(function(response) {

                var retorno = PedidoFactory.listarPedidosIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            }, function error(response){
                reject(reject);
            });
        });
    };

    function cadastrarPedido(pedido) {
        return $q(function(resolve, reject) {
            var out = PedidoFactory.cadastrarPedidoOut(pedido);
            PedidoService.cadastrarPedido(out).then(function(response) {
                var retorno = PedidoFactory.cadastrarPedidoIn(response);
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