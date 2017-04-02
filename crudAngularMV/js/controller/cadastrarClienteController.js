       //@angular.module passamos o nome do modulo da aplicação e criamos o controller
       angular.module('cliente')
           .controller('cadastrarClienteController', cadastrarClienteController);

       cadastrarClienteController.$inject = ['$scope', '$routeParams', '$location', 'clienteFacade'];

       function cadastrarClienteController($scope, $routeParams, $location, clienteFacade) {
           var vm = this;
           vm = $scope;

           vm.contato = {
               id: $routeParams.id
           };

           vm.labelCadastro = 'Cadastro de Cliente!';


           vm.save = function(cliente) {
               var promise = clienteFacade.cadastrarCliente(cliente);
           };


           vm.refreshList = function() {
               $location.path("/listar-clientes");
           };

       };