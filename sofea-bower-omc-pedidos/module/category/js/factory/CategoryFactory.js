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
        var list = [];
        if (response.data != undefined) {
            response.data.forEach(function(category) {
                list.push({
                    "id": category.id,
                    "name": category.name,
                    "description": category.description,
                    "picture": category.picture,
                    "dateCreate": category.dateCreate,
                    "dateLastModification": category.dateLastModification
                });
            });
        }

       $log.info("Out of method = CategoryFactory.listarcategorysIn " + response);
        return list;
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
        var retorno;
        if (response.data != undefined) {
            retorno = response.data;
        }
        return retorno;
    };


};