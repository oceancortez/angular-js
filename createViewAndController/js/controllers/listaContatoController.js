       //@angular.module passamos o nome do modulo da aplicação e criamos o controller
       angular.module("contato")

       .controller("listaContatoController", function ($scope, contato) {
         //como recuperar o contato que foi adicionado no controller do contato
         $scope.contatos = contato;
      });    


	