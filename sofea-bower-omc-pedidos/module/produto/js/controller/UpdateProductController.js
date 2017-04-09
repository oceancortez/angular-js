angular.module('omc.produto')

.controller('UpdateProductController', UpdateProductController);

UpdateProductController.$inject = ["$scope", "$location", "ProdutoFacade", "$routeParams", "$rootScope"];

function UpdateProductController($scope, $location, ProdutoFacade, $routeParams, $rootScope) {

    var controller = this;
    controller.alertMsg = "";

    // controller.produto = {
    //     codigo: $routeParams.id
    // };

    controller.product = $rootScope.product;


    controller.testMsg = function() {
        controller.alertMsg = "Teste OK";
    };

    function testMessage() {
        controller.alertMsg = "Teste OK";
    };

    controller.save = function(produto) {
        controller.progressbar.start();
        var promise = ProdutoFacade.cadastrarProduto(produto);
        promise.then(function(retorno) {
            controller.alertMsg = retorno;
            controller.progressbar.complete();
        }, function error(retorno) {
            controller.alertMsg = retorno;
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