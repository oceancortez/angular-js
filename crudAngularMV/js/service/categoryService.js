    angular.module('contato')

    .service('categoryService', categoryService);

    categoryService.$inject = ['$http'];

    function categoryService($http){

            var _headers = {
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            };

            var service = {
                findAllCategories: findAllCategories,
                saveCategory: saveCategory
            }

            return service;


            function findAllCategories(){
                var response = {};
                console.log('Entrou in categoryService.findAllCategories()');
                return $http.get('http://localhost/oxiproject-server-factory/category')
                .error(function(){
                   response.error = 'Erro ao acessar o endpoint http://localhost/oxiproject-server-factory/category'; 
                });
            };

            function saveCategory(out){
                 console.log('Entrou in categoryService.saveCategory()');
                 return $http.post('http://localhost/oxiproject-server-factory/category', out, {
                     headers : _headers
                 });
            };
            
    };