       //@angular.module passamos o nome do modulo da aplicação e criamos o controller
       angular.module('omc.cliente')

        .controller('CadastrarClienteController', CadastrarClienteController);

       CadastrarClienteController.$inject = ['$scope', '$routeParams', '$location', 'ClienteFacade'];

       function CadastrarClienteController($scope, $routeParams, $location, ClienteFacade) {
           var vm = this;
           vm = $scope;

           vm.contato = {
               id: $routeParams.id
           };

           vm.labelCadastro = 'Cadastro de Cliente!';


           vm.save = function(cliente) {
               var promise = ClienteFacade.cadastrarCliente(cliente);
           };


           vm.refreshList = function() {
               $location.path("/listar-clientes");
           };

       };