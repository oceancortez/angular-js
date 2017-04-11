angular.module('omc.produto')

.controller('ProductController', ProductController);

ProductController.$inject = ["$scope", "$location", "ProductFacade", "$routeParams", "ngProgressFactory", "$rootScope", "$anchorScroll"];

function ProductController($scope, $location, ProductFacade, $routeParams, ngProgressFactory, $rootScope, $anchorScroll) {

    var controller = this;
    controller.alertMsg = "";
        //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();
 
    controller.propertyName = 'codigo';
    controller.reverse = true;
    controller.products = new Array();
    controller.productNew;

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
                controller.buildShowViews(true, false, false, false);
                break;
            case 'showCreate':
                 controller.buildShowViews(false, true, false, false);
                break;
            case 'showUpdate':
                controller.buildShowViews(false, false, true, false);
                break;
            case 'showDelete':
                controller.buildShowViews(false, false, false, true);
                break;
             case 'showDelete':
                 controller.buildShowViews(false, false, false, true);
                break;    
            default:
                break;
        }
    };

    controller.buildListProducts = function (){
        controller.loadingListProducts();
        controller.sortBy = function(propertyName) {
        controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
        controller.propertyName = propertyName;

    }
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
        controller.buildShowViews(false, false, true, false);
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


    controller.save = function (productNew) {
        controller.progressbar.start();
        var promise = ProductFacade.createProduct(productNew);
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
           // controller.product = {};
            $rootScope.product = {};  
            controller.buildShowViews(true, false, false, false);
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

    controller.buildShowViews = function (showList, showCreate, showUpdate, showDelete){
        controller.showList = showList;
        controller.showCreate = showCreate;
        controller.showUpdate = showUpdate;
        controller.showDelete = showDelete;   
            
    };

    controller.buildListProducts();
    controller.buildShowViews(false, false, false, false);

};