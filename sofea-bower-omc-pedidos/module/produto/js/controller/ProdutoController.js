angular.module('omc.produto')

.controller('ProdutoController', ProdutoController);

ProdutoController.$inject = ["$scope", "$location", "ProdutoFacade"];

function ProdutoController($scope, $location, ProdutoFacade) {

    var vm = this;

    $scope.list = new Array();

    function refreshList() {

        var promise = ProdutoFacade.listarProdutos();
        promise.then(function(produtos) {
            console.log("Entrou no método = ProdutoController.findAll " + produtos);
            $scope.list = produtos;
        }, function error(response) {
            $scope.list = [{ "codigo": "MOCK", "codigoproduto": "MOCK", "codigoProduto": "MOCK", "dataCadastro": new Date(), "dataUltimaAlteracao": new Date() }];
            $scope.error = "Não foi possível carregar os produtos .";
            console.log("Não foi possível carregar os produtos .o = ProdutoController.findAll ");
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



    $scope.editItem = function editItem(id) {
        $location.path("/contato/" + id);
    };


    refreshList();


};