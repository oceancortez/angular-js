'use strict'
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
                resolve(CategoryFactory.listCategoriesIn(response));
            }, function error(response) {
                reject(response);
            });
        });
    };

    function createCategory(category) {
        return $q(function(resolve, reject) {
            var out = CategoryFactory.createCategoryOut(category);
            CategoryService.createCategory(out).then(function(response) {
                resolve(CategoryFactory.categoryIn(response));
            }, function error(response){
                reject(response);
            });
        });
    };

        function updateCategory(produto) {
        return $q(function(resolve, reject) {
            var out = CategoryFactory.updateCategoryOut(produto);
            CategoryService.updateCategory(out).then(function(response) {
                resolve(CategoryFactory.categoryIn(response));
            }, function error(response){
                reject(response);
            });
        });
    };

        function deleteCategory(product) {
        return $q(function(resolve, reject) {
            var out = CategoryFactory.deleteCategoryOut(product);
            CategoryService.deleteCategory(out).then(function(response) {
                resolve(CategoryFactory.categoryIn(response));
            }, function error(response){
                    reject(response);
             });
        });
    };


};