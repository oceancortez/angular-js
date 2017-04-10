angular.module('omc.produto')

.controller('CreateProductController', CreateProductController);

CreateProductController.$inject = ["$scope", "$location", "ProductFacade", "$routeParams", "ngProgressFactory"];

function CreateProductController($scope, $location, ProductFacade, $routeParams, ngProgressFactory) {

    var controller = this;
    //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();
    controller.alertMsg;

    controller.produto = {
        codigo: $routeParams.id
    };

    controller.save = function(produto) {
        controller.progressbar.start();
        var promise = ProductFacade.createProduct(produto);
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
    if (path.indexOf('list') > 0) {
        refreshList();

    }


};