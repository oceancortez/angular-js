//@angular.module informar o nome do app principal exemplo "contato"
/**
@[] injeção de algum módulo, neste caso estamos injetando o módulo de rotas
que está nesta lib abaixo:
<script type="text/javascript" src="https://code.angularjs.org/1.5.8/angular-route.min.js"></script>
**/
angular.module('contato', ['ngRoute'])
    //@config invocamos o $routeProvider para tratar as rotas da aplicação
.config(function($routeProvider){
   $routeProvider
   //@templateUrl Informar o diretório do arquivo dentro do projeto
   //@controller  Informar apens o nome do controller

   .when('/home', {
      templateUrl : 'view/home.html',
      controller  : 'indexController'
   }) 
  .when('/lista', {
      templateUrl : 'view/listaContato.html',
      controller  : 'listaController'
   })

      .when('/contato', {
      templateUrl : 'view/cadastroContato.html',
      controller  : 'contatoController'
   })

   .when('/contato/:id', {
      templateUrl : 'view/cadastroContato.html',
      controller  : 'contatoController'
   })
   .otherwise ({
     redirectTo: '/'
    
   })

})

.factory('contatoService', [
                "$http",
                function ($http) {
                    return {
                        findAll: function (success, fail) {
                            $http.get("http://localhost/express-api/contatos").then(success, fail);
                        },
                        findOne: function (id, success, fail) {
                            $http.get("http://localhost/express-api/contato/" + id).then(success, fail);
                        },
                        deleteOne: function (id, success, fail) {
                            $http.delete("http://localhost/express-api/contato/" + id).then(success, fail);
                        },
                        save: function (item, success, fail) {
                            if (item.id > 0) {
                                $http.put("http://localhost/express-api/contato", item).then(success, fail);
                            } else {
                                $http.post("http://localhost/express-api/contato", item).then(success, fail);
                            }
                        },
                        calcAge: function (item) {
                            if (item.dtNascimento) {
                                var now = new Date();
                                var birth = new Date(item.dtNascimento);
                                if ((now.getMonth() == birth.getMonth() && now.getDate() < birth.getDate()) || (now.getMonth() < birth.getMonth())) {
                                    return now.getFullYear() - birth.getFullYear() - 1;
                                } else {
                                    return now.getFullYear() - birth.getFullYear();
                                }
                            } else {
                                return "N/A";
                            }
                        }
                    };
                }])
                
                .controller("listaController", [
                "$scope", "$location", "contatoService",
                function ($scope, $location, contatoService) {
                    $scope.list = new Array();
                    $scope.getAge = function (contato) {
                        return contatoService.calcAge(contato);
                    };


                    $scope.refreshList = function () {
                        contatoService.findAll(function (result) {
                            $scope.list = result.data;
                        }, function (error) {
                            alert("Não foi possível atualizar a lista de registros.");
                        });
                    };


                    $scope.deleteItem = function (id) {
                        contatoService.deleteOne(id, function (result) {
                            if (result.data == "ok") {
                                alert("Registro removido.");
                                $scope.refreshList();
                            } else {
                                alert("Não foi possível remover o registro.");
                            }
                        }, function (error) {
                            alert("Não foi possível remover o registro.");
                        });
                    };


                    $scope.editItem = function (id) {
                        $location.path("/contato/" + id);
                    };
                    $scope.refreshList();
                }
            ])
            
            .controller("contatoController", [
                "$scope", "$routeParams", "$location", "contatoService",
                function ($scope, $routeParams, $location, contatoService) {
                    $scope.record = {
                        id: $routeParams.id
                    };


                    if ($scope.record.id > 0) {
                        contatoService.findOne($scope.record.id, function (result) {
                            $scope.record = result.data;
                            $scope.record.birthDate = new Date($scope.record.birthDate);
                            $scope.record.height = Number($scope.record.height);
                        }, function (error) {
                            alert("Não foi possível carregar o registro.");
                            $scope.record = {};
                        });
                    }
                    
                    $scope.save = function () {
                        contatoService.save($scope.record, function (result) {
                            if (result.data == "ok") {
                                if ($scope.id > 0) {
                                    alert("Registro alterarado.");
                                } else {
                                    alert("Registro inserido.");
                                }
                                $scope.refreshList();
                            } else {
                                if ($scope.record.id > 0) {
                                    alert("Não foi possível alterar o registro.");
                                } else {
                                    alert("Não foi possível inserir o registro.");
                                }
                            }
                        }, function (error) {
                            if ($scope.record.id > 0) {
                                alert("Não foi possível alterar o registro.");
                            } else {
                                alert("Não foi possível inserir o registro.");
                            }
                        });
                    };
                    $scope.refreshList = function () {
                        $location.path("/lista");
                    };
                }
            ]);



