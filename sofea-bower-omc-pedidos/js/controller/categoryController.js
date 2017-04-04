    // angular.module('cliente')
    // .controller('categoryController', categoryController);

    // categoryController.$inject = ['$scope', '$routeParams', '$location', 'categoryFacade','$q'];


    // function categoryController($scope, $routeParams, $location, categoryFacade, $q){
    //     var vm = $scope;

    //     vm.listOfCategories = [];

    //     vm.category = {};


    //      vm.init = function(){
    //           console.log("Entrou no método = categoryController.init ");
    //           vm.listCategories();

    //      };   


    //         vm.saveCategory = function(){
    //             categoryFacade.saveCategory(vm.category).then(function(){
    //                 alert('A category' + vm.category.categoryName + ' foi salva com sucesso!');
    //                 vm.listCategories(); 
    //             }), function(error){
    //                   alert('Não foi possível Salvar a category = ' + vm.category.categoryName);
    //             }
    //         };

    //         vm.listCategories = function(){

    //             vm.listOfCategories = categoryFacade.obterListaCategorias()             
    //             .then(function(data){
    //               console.log("Entrou no método = categoryFacade.obterListaCategorias " + data);

    //                 if(data.error != undefined){
    //                      vm.error = "Não foi possível carregar as Categories.";
    //                      console.log("Não foi possível carregar os Categories = categoryFactory.obterListaCategoriasIn ");
    //                      alert("Não foi possível carregar as Categories.");   
    //                 }
    //                  vm.listOfCategories = ((data == null || data == "") ? [] : data);
    //             });
    //         } 


    //        vm.init();

    //        var promise 

    //      };