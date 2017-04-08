       //@angular.module passamos o nome do modulo da aplicação e criamos o controller
       angular.module('omc.pedido')
        
        .controller('CadastrarPedidoController', CadastrarPedidoController);

       CadastrarPedidoController.$inject = ['$scope', '$routeParams', '$location', 'pedidoFacade'];

       function CadastrarPedidoController($scope, $routeParams, $location, pedidoFacade) {
           var vm = this;
           vm = $scope;

           vm.contato = {
               id: $routeParams.id
           };

           vm.labelCadastro = 'Cadastro de pedido!';


           vm.save = function(pedido) {
               var promise = pedidoFacade.cadastrarPedido(pedido);
           };


           vm.refreshList = function() {
               $location.path("/listar-clientes");
           };

       };