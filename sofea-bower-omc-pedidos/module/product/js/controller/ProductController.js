angular.module('omc.product')

.controller('ProductController', ProductController);

ProductController.$inject = ["$scope", "$location", "ProductFacade", "$routeParams", "ngProgressFactory", "$rootScope", "$anchorScroll",
'$filter', '$uibModal', '$log', '$timeout', 'CategoryFacade'];

function ProductController($scope, $location, ProductFacade, $routeParams, ngProgressFactory, $rootScope, $anchorScroll,
 $filter, $uibModal, $log, $timeout, CategoryFacade) {

    var controller = this;
    controller.message = "";
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
        controller.message = "";
        controller.showModalProduct();
    };

    controller.buildListProducts = function() {
        controller.loadingListProducts();
        controller.sortBy = function(propertyName) {
            controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
            controller.propertyName = propertyName;
        }
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
                    showCreate: controller.showCreate,
                    categoryId: (controller.categoryId == undefined ? null : controller.categoryId),
                    categories: {
                        list: controller.listCategories
                    }
                 }
            });

        return controller.modalInstance.result.then(function(result) {
             controller.loadProductsByCategoryId(result);
             controller.showAlert(result, true);
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
        if(category == undefined){
            category = {
                id: controller.categoryId
            };
        }else if(category.categoryId) {
            category.id = category.categoryId;

        } else{
            category.id = controller.category.id;
        }
        controller.products = {};

        controller.categoryId = category.id;
        ProductFacade.listProductsByCategoryId(category.id).then(function(result){
            if(result.products){
                controller.showAlert(result.message, false);
                controller.products = result.products;
            }else{
                controller.showAlert(result.message, true);
            }
        }, function error(response){
            var message = 'Dont possible loading the categories >> ' + response.status + ' / ' + response.statusText;
             controller.showAlert(message, true);
        });
    };


    controller.getAllCategories = function () {
        CategoryFacade.listCategories().then(function(categories){
            controller.listCategories = categories;
            controller.buildCategory();
        }, function error(response){
            var message = 'Dont possible loading the categories >> ' + response.status + ' / ' + response.statusText;
            controller.showAlert(message, true);
        });
    };

    controller.showAlert = function (message, hide){
        controller.message = message;
        controller.showMessage = hide;
    };

    controller.buildCategory = function (){
        for(var i = 0, len = controller.listCategories.length; i < len; i++){
            if(controller.listCategories[i].id === controller.categoryId){
                controller.category = controller.listCategories[i];
                break;
            }
        }
    };

    controller.buildShowViews(false, false, false, false);

    controller.getAllCategories();

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