angular.module('omc.produto')

.controller('DeleteProductController', DeleteProductController);

DeleteProductController.$inject = ["$scope", "$location", "ProdutoFacade", "$routeParams"];

function DeleteProductController($scope, $location, ProdutoFacade, $routeParams) {

    var controller = this;
    controller.alertMsg = "";

    controller.produto = {
        codigo: $routeParams.id
    };

    $scope.list = new Array();

    controller.testMsg = function() {
        controller.alertMsg = "Teste OK";
    };

    function testMessage() {
        controller.alertMsg = "Teste OK";
    };


    //TODO Terminar de refatorar    
    $scope.deleteItem = function(id) {
        ProdutoFacade.deleteOne(id, result, error)
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

    controller.refreshList = function() {
        $location.path("/listar-clientes");
    };

    var path = $location.$$path;
    if (path.indexOf('listar-produto') > 0) {
        refreshList();
    }
    testMessage();

};