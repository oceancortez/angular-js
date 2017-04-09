angular.module('omc.produto')

.controller('ListProductController', ListProductController);

ListProductController.$inject = ["$scope", "$location", "ProdutoFacade", "$routeParams", "ngProgressFactory", "$rootScope"];

function ListProductController($scope, $location, ProdutoFacade, $routeParams, ngProgressFactory, $rootScope) {

    var controller = this;

    //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();

    controller.alertMsg;
    controller.produto = {
        codigo: $routeParams.id
    };

    controller.propertyName = 'codigo';
    controller.reverse = true;
    controller.products = new Array();

    controller.sortBy = function(propertyName) {
        controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
        controller.propertyName = propertyName;

    }

    function loadingListProducts() {
        controller.progressbar.start();

        var promise = ProdutoFacade.listarProdutos();
        promise.then(function(produtos) {
            console.log("Entrou no método = ListProductController.findAll " + produtos.length);
            controller.products = produtos;
            controller.progressbar.complete();
        }, function error(response) {
            controller.products = [{ "codigo": "MOCK", "codigoproduto": "MOCK", "codigoProduto": "MOCK", "dataCadastro": new Date(), "dataUltimaAlteracao": new Date() }];
            controller.error = "Não foi possível carregar os produtos .";
            controller.alertMsg = "Não foi possível carregar os produtos .o = ListProductController.findAll ";
        });


    };

    //TODO Terminar de refatorar    
    controller.deleteItem = function(id) {
        ProdutoFacade.deleteOne(id, result, error)
            .success(function(result) {
                if (result.data == "ok") {
                    alert("Registro removido.");
                    loadingListProducts();
                } else {
                    alert("Não foi possível remover o registro.");
                }
            })
            .error(function(error) {
                alert("Não foi possível remover o registro.");
            });
    };



    controller.loadingListProducts = function() {
        $location.path("/list-product");
    };

    controller.editItem = function editItem(product) {
        $rootScope.product = product;
        $location.path("/product/update");

    };

    loadingListProducts();


};