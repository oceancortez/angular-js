angular.module('omc.produto')

.controller('ProductController', ProductController);

ProductController.$inject = ["$scope", "$location", "ProductFacade", "$routeParams", "ngProgressFactory", "$rootScope", "$anchorScroll"];

function ProductController($scope, $location, ProductFacade, $routeParams, ngProgressFactory, $rootScope, $anchorScroll) {

    var controller = this;
    controller.alertMsg = "";
        //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();

    controller.showList = false;
    controller.showCreate = false;
    controller.showUpdate = false;
    controller.showDelete = false;


    
    controller.propertyName = 'codigo';
    controller.reverse = true;
    controller.products = new Array();

    if($routeParams.id){
         controller.product = {
            codigo: $routeParams.id
        };
    }else if($rootScope.product && controller.showUpdate){
        controller.product = $rootScope.product;
    }else if(controller.showCreate){
        controller.product = {};
    }

    controller.product = {
        codigo: $routeParams.id
    };


    controller.showViews = function(view) {
        switch (view) {
            case 'showList':
                controller.showList = true;
                controller.showCreate = false;
                controller.showUpdate = false;
                controller.showDelete = false;
                //controller.buildListProducts();
                break;
            case 'showCreate':
                controller.showList = false;
                controller.showCreate = true;
                controller.showUpdate = false;
                controller.showDelete = false;
                break;
            case 'showUpdate':
                controller.showList = false;
                controller.showCreate = false;
                controller.showUpdate = true;
                controller.showDelete = false;
                break;
            case 'showDelete':
                controller.showList = false;
                controller.showCreate = false;
                controller.showUpdate = false;
                controller.showDelete = true;
                break;
             case 'showDelete':
                controller.showList = false;
                controller.showCreate = false;
                controller.showUpdate = false;
                controller.showDelete = true;
                break;    
            default:
                break;
        }
    }

    controller.buildListProducts = function (){
        controller.loadingListProducts();

        controller.sortBy = function(propertyName) {
        controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
        controller.propertyName = propertyName;

    }
    }

    controller.testMsg = function() {
        controller.alertMsg = "Teste OK";
    };

    function testMessage() {
        controller.alertMsg = "Teste OK";
    };


    controller.loadingListProducts = function () {
        controller.progressbar.start();
        var promise = ProductFacade.listProducts();
        promise.then(function(produtos) {
            console.log("Entrou no método = ListProductController.findAll " + produtos.length);
            controller.products = produtos;
            controller.progressbar.complete();
             controller.gotoAnchor(0);
        }, function error(response) {
            controller.products = [{ "codigo": "MOCK", "codigoproduto": "MOCK", "codigoProduto": "MOCK", "dataCadastro": new Date(), "dataUltimaAlteracao": new Date() }];
            controller.error = "Não foi possível carregar os produtos .";
            controller.alertMsg = "Não foi possível carregar os produtos .o = ListProductController.findAll ";
        });
    };


    controller.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        //$location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        //$anchorScroll();
      }
    };

    controller.update = function (product) {
        $rootScope.product = product;
        controller.showUpdate = true;
        controller.showList = false;
        controller.gotoAnchor(1);
    };

    //TODO Terminar de refatorar    
    controller.delete = function(id) {
        ProductFacade.deleteOne(id, result, error)
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


    controller.save = function (product) {
        controller.progressbar.start();
        var promise = ProductFacade.createProduct(product);
        promise.then(function(retorno) {
            controller.alertMsg = retorno;
            controller.progressbar.complete();
        }, function error(retorno) {
            controller.alertMsg = retorno;
        });
    };

    controller.updateProduct = function (product) {
        controller.progressbar.start();
        var promise = ProductFacade.updateProduct(product);
        promise.then(function(retorno) {
            controller.alertMsg = retorno;
            controller.progressbar.complete();
            controller.showList = true;
            controller.showUpdate = false;
             $location.path("/product");
        }, function error(retorno) {
            controller.alertMsg = retorno;
        });
    };



    controller.refreshList = function() {
        $location.path("/listar-clientes");
    };

    var path = $location.$$path;
    // if (path.indexOf('list') > 0) {
    //     loadingListProducts();
    // }

    controller.buildListProducts();
    testMessage();

};