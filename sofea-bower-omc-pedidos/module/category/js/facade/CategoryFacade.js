angular.module('omc.category')

.service('CategoryFacade', CategoryFacade);

CategoryFacade.$inject = ['CategoryService', 'CategoryFactory', '$q'];


function CategoryFacade(CategoryService, CategoryFactory, $q) {

    var facade = {
        listCategories: listCategories,
        createCategory: createCategory,
        updateCategory: updateCategory,
        deleteCategory: deleteCategory
    }

    return facade;


    function listCategories() {
        return $q(function(resolve, reject) {
            CategoryService.findAll().then(function(response) {

                var retorno = CategoryFactory.listCategoriesIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            }, function error(response) {
                reject(response);
            });
        });
    };

    function createCategory(category) {
        return $q(function(resolve, reject) {
            var out = CategoryFactory.createCategoryOut(category);
            CategoryService.createCategory(out).then(function(response) {
                var result = CategoryFactory.categoryIn(response);
                if (result) {
                    resolve(result);
                } else {
                    result.error = result.message;
                    reject(result);
                }
            });
        });
    };

        function updateCategory(produto) {
        return $q(function(resolve, reject) {
            var out = CategoryFactory.updateCategoryOut(produto);
            CategoryService.updateCategory(out).then(function(response) {
                var retorno = CategoryFactory.categoryIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            });
        });
    };

        function deleteCategory(product) {
        return $q(function(resolve, reject) {
            var out = CategoryFactory.deleteCategoryOut(product);
            CategoryService.deleteCategory(out).then(function(response) {
                var retorno = CategoryFactory.categoryIn(response);
                if (retorno && (!(retorno.indexOf('REJECT') > 0))) {
                    resolve(retorno);
                } else {
                    reject(retorno);
                }
            }, function error(response){
                    reject(response.message);
             });
        });
    };


}