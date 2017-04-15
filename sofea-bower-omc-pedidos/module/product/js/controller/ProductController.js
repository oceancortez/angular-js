angular.module('omc.product')

.controller('ProductController', ProductController);

ProductController.$inject = ["$scope", "$location", "ProductFacade", "$routeParams", "ngProgressFactory", "$rootScope", "$anchorScroll",
'$filter', '$uibModal'];

function ProductController($scope, $location, ProductFacade, $routeParams, ngProgressFactory, $rootScope, $anchorScroll,
 $filter, $uibModal ) {

    var controller = this;
    controller.alertMsg = "";
    //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();

    controller.propertyName = 'codigo';
    controller.reverse = true;

    controller.products = [];
    controller.anchor = "";
    controller.product = {};
    controller.isProductWasDeleted = false;

    if ($routeParams.id) {
        controller.product = {
            codigo: $routeParams.id
        };
    } 

    controller.gotoDiv = function(anchor) {
        $location.hash(anchor);
        $anchorScroll();
    };

    controller.showViews = function(view) {
        switch (view) {
            case 'showList':
                controller.buildShowViews(true, false, false, false);
                controller.buildListProducts();
                break;
            case 'showCreate':
                controller.buildShowViews(false, true, false, false);
                controller.buildCreateProduct();
                controller.labelView = "CREATE";
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

    controller.buildCreateProduct = function() {
        controller.product = {};
        $rootScope.product = controller.product;
    };

    controller.buildListProducts = function() {
        controller.loadingListProducts();
        controller.sortBy = function(propertyName) {
            controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
            controller.propertyName = propertyName;
        }
    };

    controller.loadingListProducts = function() {
        controller.progressbar.start();
        var promise = ProductFacade.listProducts();
        promise.then(function(produtos) {
            console.log("Entrou no método = ListProductController.findAll " + produtos.length);
            controller.products = produtos;
            controller.progressbar.complete();
            controller.gotoAnchor(0);
        }, function error(response) {
            controller.alertMsg = 'Dont possible loading the products >> ' + response.status + ' / ' + response.statusText;
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

    controller.listUpdate = function(product, anchor) {
        $rootScope.product = product;
        controller.labelView = "UPDATE";
        controller.buildShowViews(false, false, true, false);
        controller.gotoAnchor(anchor);
    };


    controller.listDelete = function(product) {
        $rootScope.product = product;
    };

    //The $modal change for $uibModal
    controller.showModalDelete = function () {
    $rootScope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'sofea-bower-omc-pedidos/module/product/view/deleteProduct.html',
            controller: 'ProductController',
            controllerAs: 'ProductCtrl',
            backdrop: 'static',
            size: 6,
            resolve: {
                 products: function() {
                     console.log('showModalDelete total of products =' + controller.products.length);
                    return controller.products;
                }
            }
        });
    };

    controller.closeModal = function(){
        $rootScope.modalInstance.close(controller.buildListProducts());            
    };


    // controller.delete = function(product) {
    //     controller.progressbar.start();
    //     var promise = ProductFacade.deleteProduct(product);
    //     promise.then(function(retorno) {
    //         $scope;
    //         controller.alertMsg = retorno;     
    //         $rootScope.product = {};              
    //         $rootScope.modalInstance.close(controller.buildListProducts());
    //         controller.progressbar.complete();
    //     }, function error(retorno) {
    //         controller.alertMsg = retorno;
    //     });
    // };

    //TODO FIX AFTER DELETED ONE REGISTER , HAVE THAN RENDERED THIS TABLE
    controller.delete = function(product) {
        controller.progressbar.start();
      var promise = ProductFacade.deleteProduct(product);

        if(promise.indexOf('Success') > 0){
            controller.buildListProducts();
            controller.alertMsg = promise;     
            $rootScope.product = {};              
            $rootScope.modalInstance.close(controller.buildListProducts());
            controller.progressbar.complete();
      }else{
        controller.alertMsg = promise.error;
      }
    };


    controller.formatDate = function (product){
        if(product.dataCadastro){
             product.dataCadastro = $filter('date')(product.dataCadastro, 'dd-MM-yyyy HH:mm:ss');
        }
        return product;
    };

    controller.save = function(product) {
        product = controller.formatDate(product);
        controller.progressbar.start();
        var promise = ProductFacade.createProduct(product);
        promise.then(function(retorno) {
            if(retorno.indexOf('Success') > 0){
            controller.alertMsg = retorno;
            controller.progressbar.complete();
            controller.buildListProducts();
            controller.buildShowViews(true, false, false, false);
            controller.product = {};
            controller.alertMsg = "";
            }else{
            controller.alertMsg = retorno;
            controller.progressbar.complete();
            }

        }, function error(retorno) {
            controller.alertMsg = retorno;
        });
    };

    controller.update = function(product) {
        controller.progressbar.start();
        var promise = ProductFacade.updateProduct(product);
        promise.then(function(retorno) {
            if(retorno.indexOf('Success') > 0){
                controller.alertMsg = retorno;
                controller.progressbar.complete();
                controller.alertMsg = "";
                $rootScope.product = {};
                controller.buildShowViews(true, false, false, false);
              }else{
                 controller.alertMsg = retorno;
                 controller.progressbar.complete();
              }
        }, function error(retorno) {
            controller.alertMsg = retorno;
        });
    };

    controller.cancel = function(anchor) {
        controller.buildShowViews(true, false, false, false);
        controller.gotoAnchor(anchor);
    };

    controller.refreshList = function() {
        $location.path("/listar-clientes");
    };

    var path = $location.$$path;
    // if (path.indexOf('list') > 0) {
    //     loadingListProducts();
    // }

    controller.buildShowViews = function(showList, showCreate, showUpdate, showDelete) {
        controller.showList = showList;
        controller.showCreate = showCreate;
        controller.showUpdate = showUpdate;
        controller.showDelete = showDelete;

    };

   
    controller.gotoDiv(controller.anchor);
    controller.buildListProducts();
    controller.buildShowViews(false, false, false, false);

};