angular.module('omc.cliente')

.factory('ClienteFactory', ClienteFactory);

ClienteFactory.$inject = ['$log', '$q'];

function ClienteFactory() {

    var factory = {
        listarClientesIn: listarClientesIn,
        cadastrarClienteOut: cadastrarClienteOut,
        cadastrarClienteIn: cadastrarClienteIn

    };

    return factory;



    function listarClientesIn(response) {
        var lista = [];
        console.log("Entrou no método = ClienteFactory.listarClientesIn " + response.data);
        if (response.data != undefined) {
            response.data.forEach(function(cliente) {
                lista.push({
                    "codigo": cliente.codigo,
                    "nome": cliente.nome,
                    "dataCadastro": cliente.dataCadastro,
                    "dataUltimaAlteracao": cliente.dataUltimaAlteracao
                });
            });
        }

        console.log("Saiu do método = ClienteFactory.listarClientesIn " + response);
        return lista;
    };

    function cadastrarClienteOut(cliente) {
        return {
            "nome": cliente.nome,
            "dataCadastro": cliente.dataCadastro,
            "dataUltimaAlteracao": cliente.dataUltimaAlteracao
        }
    }

    function cadastrarClienteIn(response) {
        var retorno;
        if (response.data != undefined) {
            retorno = response.data;
        }

        return retorno;
    }

};