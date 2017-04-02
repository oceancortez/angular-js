       //@angular.module passamos o nome do modulo da aplicação e criamos o controller
       angular.module("contato")

       .controller("contatoController", ['$scope', function ($scope) {		   
				$scope.contato = [{}];
				$scope.contatos = [{}];

			var listContatos = $scope.contatos;

			$scope.adicionarContato = function(contato){

	 		$scope.contatos.push({
	 			nome: contato.nome, endereco: contato.endereco, data: contato.data
	 		});

	 		//$scope.contato = [{}];

	 	}
	}]);
	




	