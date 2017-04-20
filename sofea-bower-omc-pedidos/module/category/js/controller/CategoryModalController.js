angular.module('omc.category').controller('CategoryModalController', CategoryModalController);

    CategoryModalController.$inject = ['$uibModalInstance' , 'CategoryFacade', 'category', 'showUpdate', 'showDelete',
        'showCreate', '$filter'];

    function CategoryModalController($uibModalInstance,  CategoryFacade, category, showUpdate, showDelete, showCreate,
    $filter){

        var modal = this;
        modal.category = category;
        modal.showUpdate = showUpdate;
        modal.showDelete = showDelete;
        modal.showCreate = showCreate;
        
    modal.delete = function(category) {
        CategoryFacade.deleteCategory(category).then(function(result) {
            modal.category = {};
            modal.closeModal(result);
            }, function error(result) {
             modal.alertMsg = result;
         });       
    };

     modal.update = function(category) {
        var promise = CategoryFacade.updateCategory(category);
        promise.then(function(result) {
            if(result.indexOf('Success') > 0){
                modal.category = {};
                 modal.closeModal(result);
              }else{
                 modal.alertMsg = result;
              }
        }, function error(result) {
            modal.alertMsg = result;
        });
    };

        modal.create = function(category) {
            category = modal.formatDate(category);
            var promise = CategoryFacade.createCategory(category);
            promise.then(function(result) {
                if(result.indexOf('Success') > 0){
                    modal.category = {};
                    modal.closeModal(result)
                }else{
                    modal.alertMsg = result;
                }

            }, function error(result) {
                modal.alertMsg = result;
            });
        };

        modal.closeModal = function(result){
            $uibModalInstance.close(result);
        };

        modal.formatDate = function (category){
            if(category.dataCadastro){
                category.dataCadastro = $filter('date')(category.dataCadastro, 'dd-MM-yyyy HH:mm:ss');
            }
            return category;
        };
};