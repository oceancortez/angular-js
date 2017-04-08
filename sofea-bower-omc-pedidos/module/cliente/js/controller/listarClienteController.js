angular.module('omc.cliente')

.controller('ListarClienteController', ListarClienteController);

ListarClienteController.$inject = ["$scope", "$location", "ClienteFacade"];

function ListarClienteController($scope, $location, ClienteFacade) {

    var vm = this;

    $scope.list = new Array();

    function refreshList() {

        var promise = ClienteFacade.listarClientes();
        promise.then(function(clientes) {
            console.log("Entrou no método = ListarClienteController.findAll " + clientes);
            $scope.list = clientes;
        }, function error(response) {
            $scope.list = 
            [{"codigo" : "MOCK", "nome" : "MOCK", "dataCadastro" : new Date(), "dataUltimaAlteracao" : new Date()}];
            $scope.error = "Não foi possível carregar os clientes .";
            console.log("Não foi possível carregar os clientes .o = ListarClienteController.findAll ");
        });


    };

    //TODO Terminar de refatorar    
    $scope.deleteItem = function(id) {
        ClienteFacade.deleteOne(id, result, error)
            .success(function(result) {
                if (result.data == "ok") {
                    alert("Registro removido.");
                    refreshList();
                } else {
                    alert("Não foi possível remover o registro.");
                }
            })
            .error(function(error) {
                alert("Não foi possível remover o registro.");
            });
    };



    $scope.editItem = function editItem(id) {
        $location.path("/contato/" + id);
    };


    refreshList();


};