angular.module('omc.produto')

.controller('CreateProductController', CreateProductController);

CreateProductController.$inject = ["$scope", "$location", "ProdutoFacade", "$routeParams"];

function CreateProductController($scope, $location, ProdutoFacade, $routeParams) {

    var controller = this;
    controller.alertMsg;

    controller.produto = {
        codigo: $routeParams.id
    };

    $scope.list = new Array();

    function refreshList() {

        var promise = ProdutoFacade.listarProdutos();
        promise.then(function(produtos) {
            console.log("Entrou no método = CreateProductController.findAll " + produtos);
            $scope.list = produtos;
        }, function error(response) {
            $scope.list = [{ "codigo": "MOCK", "codigoproduto": "MOCK", "codigoProduto": "MOCK", "dataCadastro": new Date(), "dataUltimaAlteracao": new Date() }];
            $scope.error = "Não foi possível carregar os produtos .";
            controller.alertMsg = "Não foi possível carregar os produtos .o = CreateProductController.findAll ";
        });


    };

    //TODO Terminar de refatorar    
    $scope.deleteItem = function(id) {
        ProdutoFacade.deleteOne(id, result, error)
            .success(function(result) {
                if (result.data == "ok") {
                    alert("Registro removido.");
                    refreshList();
                } else {
                    alert("Não foi possível remover o registro.");
                }
            })
            .error(function(error) {
                alert("Não foi possível remover o registro.");
            });
    };


    controller.save = function(produto) {
        var promise = ProdutoFacade.cadastrarProduto(produto);
        promise.then(function(retorno) {
            controller.alertMsg = retorno;
        }, function error(retorno) {
            controller.alertMsg = retorno;
        });
    };


    controller.refreshList = function() {
        $location.path("/listar-clientes");
    };

    $scope.editItem = function editItem(id) {
        $location.path("/contato/" + id);
    };
    var path = $location.$$path;
    if (path.indexOf('list') > 0) {
        refreshList();

    }


};