    angular.module('contato')
    .factory('categoryFactory', categoryFactory);

    categoryFactory.$inject = ['$log','$q'];
    
    function categoryFactory($log, $q){

         var factory = {
             obterListaCategoriasIn : obterListaCategoriasIn,
             saveCategoryIn : saveCategoryIn,
             saveCategoryOut : saveCategoryOut
         };

         return factory;

         
         function obterListaCategoriasIn(response){
                var lista = [];
                console.log("Entrou no método = categoryFactory.obterListaCategoriasIn " + response.data);
                  if(response.data != undefined){                    
                        response.data.forEach(function(category) {
                            lista.push({
                            "categoryId" : category.categoryId, 
                            "categoryName" : category.categoryName,
                            "description" : category.description,
                            "picture" : category.picture     
                            });  
                        });
                  }

                  console.log("Saiu do método = categoryFactory.obterListaCategoriasIn " + response);
                  return lista;                
                };


           function saveCategoryOut(category){
            return {
                    "categoryId": null,
                    "categoryName": category.categoryName,
                    "description": category.description,
                    "picture" : category.picture
                 }
           };  


            function saveCategoryIn(response){
                var category = {};
                if(response.categoryId == undefined || response.categoryId === ''){
                    category.errror = 'Aconteceu um erro ao salvar a category';

                    return category;
                }
              
                category = {
                        "categoryId": response.categoryId,
                        "categoryName": response.categoryName,
                        "description": response.description,
                        "picture" : response.picture
                    }

                  return category;
           };     

    }; 