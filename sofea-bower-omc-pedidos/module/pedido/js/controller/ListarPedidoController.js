angular.module('omc.pedido')

.controller('ListarPedidoController', ListarPedidoController);

ListarPedidoController.$inject = ["$scope", "$location", "PedidoFacade"];

function ListarPedidoController($scope, $location, PedidoFacade) {

    var vm = this;

    $scope.list = new Array();

    function refreshList() {

        var promise = PedidoFacade.listarPedidos();
        promise.then(function(pedidos) {
            console.log("Entrou no método = listarClienteController.findAll " + pedidos);
            $scope.list = pedidos;
        }, function error(response) {
            $scope.list = 
            [{"codigo" : "MOCK", "codigoPedido" : "MOCK", "codigoProduto" : "MOCK", "dataCadastro" : new Date(), "dataUltimaAlteracao" : new Date()}];
            $scope.error = "Não foi possível carregar os pedidos .";
            console.log("Não foi possível carregar os pedidos .o = listarClienteController.findAll ");
        });


    };

    //TODO Terminar de refatorar    
    $scope.deleteItem = function(id) {
        PedidoFacade.deleteOne(id, result, error)
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