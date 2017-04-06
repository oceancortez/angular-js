angular.module('omc.pedido')

.factory('PedidoFactory', PedidoFactory);

PedidoFactory.$inject = ['$log', '$q'];

function PedidoFactory() {

    var factory = {
        listarPedidosIn: listarPedidosIn,
        cadastrarPedidoOut: cadastrarPedidoOut,
        cadastrarPedidoIn: cadastrarPedidoIn

    };

    return factory;



    function listarPedidosIn(response) {
        var lista = [];
        console.log("Entrou no método = PedidoFactory.listarPedidosIn " + response.data);
        if (response.data != undefined) {
            response.data.forEach(function(pedido) {
                lista.push({
                    "codigoPedido": pedido.codigo,
                    "codigoCliente": pedido.codigoCliente,
                    "codigoProduto": pedido.codigoProduto,
                    "dataCadastro": pedido.dataCadastro,
                    "dataUltimaAlteracao": pedido.dataUltimaAlteracao
                });
            });
        }

        console.log("Saiu do método = pedidoFactory.listarPedidosIn " + response);
        return lista;
    };

    function cadastrarPedidoOut(pedido) {
        return {
            "nome": pedido.nome,
            "dataCadastro": pedido.dataCadastro,
            "dataUltimaAlteracao": pedido.dataUltimaAlteracao
        }
    }

    function cadastrarPedidoIn(response) {
        var retorno;
        if (response.data != undefined) {
            retorno = response.data;
        }

        return retorno;
    }

};