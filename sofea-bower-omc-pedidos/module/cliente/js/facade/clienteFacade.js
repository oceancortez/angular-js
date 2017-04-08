angular.module('omc.cliente')

.service('ClienteFacade', ClienteFacade);

ClienteFacade.$inject = ['ClienteService', 'ClienteFactory', '$q'];


function ClienteFacade(ClienteService, ClienteFactory, $q) {

    var facade = {
        listarClientes: listarClientes,
        cadastrarCliente: cadastrarCliente
    }

    return facade;


    function listarClientes() {
        return $q(function(resolve, reject) {
            ClienteService.findAll().then(function(response) {

                var retorno = ClienteFactory.listarClientesIn(response);
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
            var out = ClienteFactory.cadastrarClienteOut(cliente);
            ClienteService.cadastrarCliente(out).then(function(response) {
                var retorno = ClienteFactory.cadastrarClienteIn(response);
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