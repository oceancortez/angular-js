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
            if(result.categoryType){
                modal.message = result.message;
                modal.showMessage = true;
            }else{
                modal.category = {};
                modal.closeModal(result);
            }
            }, function error(result) {
            modal.message = result;
            modal.showMessage = true;
         });       
    };

     modal.update = function(category) {
       CategoryFacade.updateCategory(category).then(function (result){
             if(result.productType){
                 modal.category = {};
                 modal.closeModal(result);
             }else{
                 modal.message = result.message;
                 modal.showMessage = true;
             }
         }, function error(result) {
            modal.message = result;
            modal.showMessage = true;
        });
    };

        modal.create = function(category) {
            category = modal.formatDate(category);
        CategoryFacade.createCategory(category).then(function (result){
                if(result.categoryType){
                    modal.category = {};
                    modal.closeModal(result);
                }else{
                    modal.message = result.message;
                    modal.showMessage = true;
                }

            }, function error(result) {
                modal.message = result;
                modal.showMessage = true;
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