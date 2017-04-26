angular.module('omc.category')

.factory('CategoryFactory', CategoryFactory);

CategoryFactory.$inject = ['$log'];

function CategoryFactory($log) {

    var factory = {
        listCategoriesIn: listCategoriesIn,
        categoryIn: categoryIn,
        createCategoryOut: createCategoryOut,
        updateCategoryOut: updateCategoryOut,
        deleteCategoryOut: deleteCategoryOut
    };

    return factory;


    function listCategoriesIn(response) {
        var result = {},
            categories = [];
        if (response.data != undefined
            && response.data.body != undefined
            && response.data.body.categoryTypes != null) {

            response.data.body.categoryTypes.forEach(function(category) {
                categories.push({
                    "id": category.id,
                    "name": category.name,
                    "description": category.description,
                    "picture": category.picture,
                    "dateCreate": category.dateCreate,
                    "dateLastModification": category.dateLastModification
                });
            });
            result.categories = categories;
        }else{
            result = {
                message: response.data.body.message
            };
        }

       $log.info("Out of method = CategoryFactory.listarcategorysIn " + response);
        return result;
    };

    function createCategoryOut(category) {
        return {
            "name": category.name,
            "description": category.description,
            "picture": category.picture,
            "dateCreate": category.dateCreate,
            "dateLastModification": category.dateLastModification
        }
    };

    function updateCategoryOut(category) {
        return {
            "id": category.id,
            "name": category.name,
            "description": category.description,
            "picture": category.picture,
            "dateCreate": category.dateCreate,
            "dateLastModification": category.dateLastModification
        }
    };

    function deleteCategoryOut(category) {
        return {
            "id": category.id,
        }
    };

    function categoryIn(response) {
        var result = {};

        if (response.data != undefined
            && response.data.body != undefined
            && response.data.body.categoryType != null) {
            result = response.data.body;
        }else{
            result.message = response.data.body.message;
        }
        return result;
    };


};