angular.module('cliente')

.controller('listarClienteController', listarClienteController);

listarClienteController.$inject = ["$scope", "$location", "clienteFacade"];

function listarClienteController($scope, $location, clienteFacade) {

    var vm = this;

    $scope.list = new Array();

    function refreshList() {

        var promise = clienteFacade.listarClientes();
        promise.then(function(clientes) {
            console.log("Entrou no método = listarClienteController.findAll " + clientes);
            $scope.list = clientes;
        }, function error(response) {
            $scope.error = "Não foi possível carregar os clientes .";
            console.log("Não foi possível carregar os clientes .o = listarClienteController.findAll ");
        });


    };

    //TODO Terminar de refatorar    
    $scope.deleteItem = function(id) {
        clienteFacade.deleteOne(id, result, error)
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