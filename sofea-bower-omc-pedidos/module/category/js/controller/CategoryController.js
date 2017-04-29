angular.module('omc.category')

.controller('CategoryController', CategoryController);

CategoryController.$inject = ["$scope", "$location", "CategoryFacade", "$routeParams", "ngProgressFactory", "$rootScope", "$anchorScroll",
'$filter', '$uibModal', '$log'];

function CategoryController($scope, $location, CategoryFacade, $routeParams, ngProgressFactory, $rootScope, $anchorScroll,
 $filter, $uibModal, $log) {

    var controller = this;
    controller.message = '';
    controller.showMessage = false;
    //Create a instance of progressbar
    controller.progressbar = ngProgressFactory.createInstance();

    controller.propertyName = 'codigo';
    controller.reverse = true;

    controller.categories = [];
    controller.anchor = "";
    controller.category = {};
    controller.isCategoryWasDeleted = false;
    controller.labelView = '';
    controller.cont = 0;

    controller.testMessage = function(){
        controller.cont++;
        if(controller.cont % 2 === 0){
            controller.message = "Teste ok";
            controller.showMessage = true;
        }else{
            controller.message = "Teste ok";
            controller.showMessage = false;
        }

    };

    controller.showViews = function(view) {
        switch (view) {
            case 'showList':
                controller.buildShowViews(true, false, false, false);
                controller.labelView = '';
                controller.buildListCategories();
                break;
            case 'showCreate':
                controller.buildShowViews(false, true, false, false);
                controller.labelView = 'CREATE';
                controller.buildCreateCategory();
                break;
            default:
                break;
        }
    };

    controller.buildCreateCategory = function() {
        controller.category = {};
        controller.message = "";
        controller.showModalCategory();
    };

    controller.buildListCategories = function() {
        controller.loadingListCategories();
        controller.sortBy = function(propertyName) {
            controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
            controller.propertyName = propertyName;
        }
    };

    controller.loadingListCategories = function() {
        controller.progressbar.start();
        var promise = CategoryFacade.listCategories();
        promise.then(function(result) {
            console.log("Entrou no método = ListCategoryController.findAll " + result.categories.length);
            controller.categories = result.categories;
            controller.progressbar.complete();
        }, function error(response) {
            var message = 'Dont possible loading the Categories >> ' + response.status + ' / ' + response.statusText;
            controller.createMessage(message);
        });
    };

    controller.getAllCategories = function(){
        return CategoryFacade.listCategories().then(function(categories) {
            controller.categories = categories;
            return controller.categories;
        }, function error(response) {
             return controller.categories = [];
            controller.createMessage(response);
        });
    };

    controller.listUpdate = function(category) {
        controller.category = category;
        controller.buildShowViews(true, false, true, false);
        controller.showModalCategory();
    };

    controller.listDelete = function(category) {
        controller.category = category;
        controller.buildShowViews(true, false, false, true);
        controller.showModalCategory();
    };

    //The $modal change for $uibModal
    controller.showModalCategory = function () {
        controller.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'sofea-bower-omc-pedidos/module/category/view/modalCategory.html',
                controller: 'CategoryModalController',
                controllerAs: 'CategoryModalCtrl',
                backdrop: 'static',
                size: 6,
                resolve: {
                    category: angular.copy(controller.category),
                    showDelete: controller.showDelete,
                    showUpdate: controller.showUpdate,
                    showCreate: controller.showCreate

                 }
            });

        return controller.modalInstance.result.then(function(result) {
             controller.buildListCategories();
             controller.createMessage(result);
             controller.showList = true;
             controller.modalInstance.close(result);
        }, function error(){
            $log.info('Modal dismissed at: ' + new Date());
        });        
    };

    controller.createMessage = function(message){
        controller.message = message;
        controller.showMessage = true;
        setTimeout(function(){
            controller.message = null;
            controller.showMessage = false;
        }, 3000);
    };


    controller.buildShowViews = function(showList, showCreate, showUpdate, showDelete) {
        controller.showList = showList;
        controller.showCreate = showCreate;
        controller.showUpdate = showUpdate;
        controller.showDelete = showDelete;
    };

    controller.buildListCategories();
    controller.buildShowViews(false, false, false, false);

};