//  angular.module('cliente')
//      .service('categoryFacade', categoryFacade);

//  categoryFacade.$inject = ['categoryService', 'categoryFactory', '$q'];


//  function categoryFacade(categoryService, categoryFactory, $q) {

//      var facade = {
//          obterListaCategorias: obterListaCategorias,
//          saveCategory: saveCategory
//      };

//      return facade;


//      function obterListaCategorias() {
//          return $q(function(resolve, reject) {
//              categoryService.findAllCategories().then(function(response) {

//                  var retorno = categoryFactory.obterListaCategoriasIn(response);
//                  if (retorno) {
//                      resolve(retorno);
//                  } else {
//                      retorno.error = retorno.message;
//                      reject(retorno);
//                  }
//              });
//          });
//      };


//      function saveCategory(category) {
//          return $q(function(resolve, reject) {
//              var out = categoryFactory.saveCategoryOut(category);

//              categoryService.saveCategory(out).then(function(response) {

//                      resolve(categoryFactory.saveCategoryIn(response));

//                  }),
//                  function(error) {
//                      reject(error);
//                  };
//          });

//      };


//  };