angular.module('cliente').service('clienteFacade', clienteFacade);

clienteFacade.$inject = ['clienteService', 'clienteFactory', '$q'];


function clienteFacade(clienteService, clienteFactory, $q) {

    var facade = {
        listarClientes: listarClientes,
        cadastrarCliente: cadastrarCliente
    }

    return facade;


    function listarClientes() {
        return $q(function(resolve, reject) {
            clienteService.findAll().then(function(response) {

                var retorno = clienteFactory.listarClientesIn(response);
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

    function cadastrarCliente(cliente) {
        return $q(function(resolve, reject) {
            var out = clienteFactory.cadastrarClienteOut(cliente);
            clienteService.cadastrarCliente(out).then(function(response) {
                var retorno = clienteFactory.cadastrarClienteIn(response);
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