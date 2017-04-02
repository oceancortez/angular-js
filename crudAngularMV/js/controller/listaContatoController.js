angular.module('contato')

.controller('listaController',listaController);

listaController.$inject = ["$scope", "$location", "contatoService"];

                function listaController($scope, $location, contatoService) {

                    var vm = this;
                    vm.listaController = listaController;
                   

                     $scope.list = new Array();                    

                    function refreshList() {
                        contatoService.findAll()
                        .success(function(contatos){
                             console.log("Entrou no método = listaContatoController.findAll " + contatos);
                            $scope.list = contatos;
                        })
                        .error(function(){
                            $scope.error = "Não foi possível carregar os Contatos.";
                             console.log("Não foi possível carregar os Contatos.o = listaContatoController.findAll ");
                            alert("Não foi possível carregar os Contatos.");
                        });
                    };

                    //TODO Terminar de refatorar    
                    $scope.deleteItem = function (id) {
                        contatoService.deleteOne(id,result, error)
                        .success(function (result) {
                            if (result.data == "ok") {
                                alert("Registro removido.");
                                refreshList();
                            } else {
                                alert("Não foi possível remover o registro.");
                            }
                        })
                        .error(function (error) {
                            alert("Não foi possível remover o registro.");
                        });
                    };

                   

                    $scope.editItem = function editItem(id) {
                        $location.path("/contato/" + id);
                    };

                    
                    
                    refreshList();               
                   

                };