angular.module('omc.produto')

.controller('CreateProductController', CreateProductController);

CreateProductController.$inject = ["$scope", "$location", "ProdutoFacade", "$routeParams", "ngProgressFactory"];

function CreateProductController($scope, $location, ProdutoFacade, $routeParams, ngProgressFactory) {

    var controller = this;
    //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();
    controller.alertMsg;

    controller.produto = {
        codigo: $routeParams.id
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
    if (path.indexOf('list') > 0) {
        refreshList();

    }


};