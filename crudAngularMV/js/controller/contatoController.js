       //@angular.module passamos o nome do modulo da aplicação e criamos o controller
       angular.module('contato')
       .controller('contatoController',contatoController);
       
        contatoController.$inject = ['$scope', '$routeParams', '$location', 'contatoService'];
                
                function contatoController($scope, $routeParams, $location, contatoService) {                    
                    var vm = this;
                    vm = $scope;

                    vm.listaContato = [];
                  
                    vm.contato = {   
                        id: $routeParams.id
                    };

                    vm.labelCadastro = 'Cadastre sua reclamação!';                  
                    findOne();
                                        
                    //TODO Terminar de refatorar
                    function findOne(){
                        if (vm.contato.id > 0) {
                            contatoService.findOne(vm.contato.id)
                            .success(function (result) {
                                console.log("Entrou no método controller.findOne " + vm.contato.id);
                                vm.contato = result;
                                vm.contato.dtNascimento = new Date(vm.contato.dtNascimento);
                                vm.contato.height = Number(vm.contato.height);
                            })
                            .error(function () {
                                alert("Não foi possível carregar o registro.");
                                vm.contato = {};
                            });
                        }
                 }

                 vm.findOneClick = function(){
                    if (vm.contatoOne.id > 0) {
                         contatoService.findOne(vm.contatoOne.id)
                        .success(function (result) {
                            console.log("Entrou no método controller.findOne " + vm.contatoOne.id);
                            vm.contatoOne = result;
                            vm.contatoOne.dtNascimento = new Date(vm.contatoOne.dtNascimento);
                            vm.contatoOne.height = Number(vm.contatoOne.height);
                            vm.listaContato = [];
                            vm.listaContato.unshift(vm.contatoOne);
                            showContato(true);
                        })
                        .error(function () {
                            alert("Não foi possível carregar o registro.");
                            vm.showContato = false;
                            vm.contatoOne = {};
                        });
                    }
                }

                function showContato(flag){
                    vm.showContato = flag;
                }

                vm.update = function(){
                        contatoService.saveOrUpdate(vm.contato)
                        .success(function(result){
                             console.log("Entrou no método = controller.update ");
                             if(result == "ok"){
                                    alert("Registro foi atualizado.");
                                    vm.refreshList();
                             }else{
                                   alert("Erro ao  atualizar.");
                             }

                        }).error(function (error) {
                                alert("Não foi possível alterar o registro.");
                            
                        });
                    }

                    vm.isUpdate = function(){
                        return vm.contato.id;
                    }

                     vm.editItem = function (id) {
                        $location.path("/contato/" + id);
                    };

                                        
                    vm.save =  function(){
                     contatoService.saveOrUpdate(vm.contato)
                     .success(function (result) {
                             console.log("Entrou no método = controller.save ");
                            if (result == "ok") {
                                if (vm.id > 0) {
                                    alert("Registro alterarado.");
                                } else {
                                    alert("Registro inserido.");
                                }
                                vm.refreshList();
                            } else {
                                if (vm.contato.id > 0) {
                                    alert("Não foi possível alterar o registro.");
                                } else {
                                    alert("Não foi possível inserir o registro.");
                                }
                            }
                        }).error(function (error) {
                            if (vm.contato.id > 0) {
                                alert("Não foi possível alterar o registro.");
                            } else {
                                alert("Não foi possível inserir o registro.");
                            }
                        });
                    };

                    
                    vm.refreshList = function () {
                        $location.path("/lista");
                    };

                }
        

	