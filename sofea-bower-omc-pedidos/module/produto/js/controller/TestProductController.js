angular.module('omc.produto')

.controller('TestProductController', TestProductController);

TestProductController.$inject = ["$scope", "$location", "ProductFacade", "$routeParams"];

function TestProductController($scope, $location, ProductFacade, $routeParams) {

    var controller = this;
    controller.alertMsg = "";

    controller.produto = {
        codigo: $routeParams.id
    };

    controller.testMsg = function() {
        controller.alertMsg = "Teste OK";
    };

    function testMessage() {
        controller.alertMsg = "Teste OK";
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