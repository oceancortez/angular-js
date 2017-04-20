angular.module('omc.product')

.controller('ProductController', ProductController);

ProductController.$inject = ["$scope", "$location", "ProductFacade", "$routeParams", "ngProgressFactory", "$rootScope", "$anchorScroll",
'$filter', '$uibModal', '$log', '$timeout', 'CategoryFacade'];

function ProductController($scope, $location, ProductFacade, $routeParams, ngProgressFactory, $rootScope, $anchorScroll,
 $filter, $uibModal, $log, $timeout, CategoryFacade) {

    var controller = this;
    controller.alertMsg = "";
    controller.showMessage = false;
    //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();

    controller.propertyName = 'codigo';
    controller.reverse = true;

    controller.products = [];
    controller.anchor = "";
    controller.product = {};
    controller.isProductWasDeleted = false;
    controller.labelView = '';
    controller.listCategories = [];
    controller.category = {};

    controller.gotoDiv = function(anchor) {
        $location.hash(anchor);
        $anchorScroll();
    };

    controller.showViews = function(view) {
        switch (view) {
            case 'showList':
                controller.buildShowViews(true, false, false, false);
                controller.labelView = '';
                controller.getAllCategories();
                break;
            case 'showCreate':
                controller.buildShowViews(false, true, false, false);
                controller.labelView = 'CREATE';
                controller.buildCreateProduct();
                break;
            default:
                break;
        }
    };

    controller.buildCreateProduct = function() {
        controller.product = {};
        controller.alertMsg = "";
        controller.showModalProduct();
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
        }, function error(response) {
            controller.alertMsg = 'Dont possible loading the products >> ' + response.status + ' / ' + response.statusText;
        });
    };

    controller.getAllProducts = function(){
        return ProductFacade.listProducts().then(function(produtos) {
            controller.products = produtos;
            return controller.products; 
        }, function error(response) {
             return controller.products = []; 
        });
    };

    controller.listUpdate = function(product) {
        controller.product = product;
        controller.buildShowViews(true, false, true, false);
        controller.showModalProduct();
    };

    controller.listDelete = function(product) {
        controller.product = product;
        controller.buildShowViews(true, false, false, true);
        controller.showModalProduct();
    };

    //The $modal change for $uibModal
    controller.showModalProduct = function () {
        controller.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'sofea-bower-omc-pedidos/module/product/view/template/modalProduct.html',
                controller: 'ProductModalController',
                controllerAs: 'ProductModalCtrl',
                backdrop: 'static',
                size: 6,
                resolve: {
                    product: angular.copy(controller.product),
                    showDelete: controller.showDelete,
                    showUpdate: controller.showUpdate,
                    showCreate: controller.showCreate

                 }
            });

        return controller.modalInstance.result.then(function(result) {
             controller.buildListProducts();
             controller.alertMsg = result;
            controller.createMessage();
             controller.showList = true;
             controller.modalInstance.close(result);
        }, function error(){
            $log.info('Modal dismissed at: ' + new Date());
        });        
    };

    controller.createMessage = function(){
        controller.showMessage = true;
        setTimeout(function(){
            controller.showMessage = false;
        }, 3000);
    };


    controller.buildShowViews = function(showList, showCreate, showUpdate, showDelete) {
        controller.showList = showList;
        controller.showCreate = showCreate;
        controller.showUpdate = showUpdate;
        controller.showDelete = showDelete;
    };

    controller.loadProductsByCategoryId = function(category){
        controller.products = {};
        ProductFacade.listProductsByCategoryId(category.id).then(function(products){
            controller.products = products;
        }, function error(){
            controller.alertMsg = 'Dont possible loading the categories >> ' + response.status + ' / ' + response.statusText;
        });
    };


    controller.getAllCategories = function () {
        CategoryFacade.listCategories().then(function(categories){
            controller.listCategories = categories;
        }, function error(){
            controller.alertMsg = 'Dont possible loading the categories >> ' + response.status + ' / ' + response.statusText;
        });
    };

    controller.gotoDiv(controller.anchor);
    controller.buildShowViews(false, false, false, false);


    //if ($routeParams.id) {
    //    controller.product = {
    //        codigo: $routeParams.id
    //    };
    //}

    // controller.refreshList = function() {
    //     $location.path("/listar-clientes");
    // };

    var path = $location.$$path;
    // if (path.indexOf('list') > 0) {
    //     loadingListProducts();
    // }


};