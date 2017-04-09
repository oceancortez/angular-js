angular.module('omc.produto')

.controller('ProductController', ProductController);

ProductController.$inject = ["$scope", "$location", "ProdutoFacade", "$routeParams"];

function ProductController($scope, $location, ProdutoFacade, $routeParams) {

    var controller = this;
    controller.alertMsg = "";

    controller.showList = false;
    controller.showCreate = false;
    controller.showUpdate = false;
    controller.showDelete = false;
    controller.showViews;

    controller.produto = {
        codigo: $routeParams.id
    };


    controller.showViews = function(view) {
        switch (view) {
            case 'showList':
                controller.showList = true;
                controller.showCreate = false;
                controller.showUpdate = false;
                controller.showDelete = false;
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
            case 'showDelete':
                controller.showList = false;
                controller.showCreate = false;
                controller.showUpdate = false;
                controller.showDelete = true;
            default:
                break;
        }
    }

    controller.testMsg = function() {
        controller.alertMsg = "Teste OK";
    };

    function testMessage() {
        controller.alertMsg = "Teste OK";
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