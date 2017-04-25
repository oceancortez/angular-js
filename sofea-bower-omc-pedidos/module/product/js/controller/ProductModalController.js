angular.module('omc.product').controller('ProductModalController', ProductModalController);

    ProductModalController.$inject = ['$uibModalInstance', '$filter', 'ProductFacade', 'product', 'showUpdate', 'showDelete',
        'showCreate','categoryId', 'categories'];

    function ProductModalController($uibModalInstance, $filter, ProductFacade, product, showUpdate, showDelete, showCreate, categoryId,
                                    categories){

        var modal = this;
        modal.product = product;
        modal.showUpdate = showUpdate;
        modal.showDelete = showDelete;
        modal.showCreate = showCreate;
        modal.categoryId = categoryId;
        modal.category;
        modal.categories = {
            list: categories.list,
            categoryId: categoryId
        };

        //modal.labelView = labelView;

        
    modal.delete = function(product) {
            ProductFacade.deleteProduct(product).then(function(retorno) {
            modal.product = {};
            modal.closeModal(retorno);              
            }, function error(retorno) {
             modal.message = retorno;
         });       
    };

     modal.update = function(product) {
        product.categoryId =  modal.categoryId;
        var promise = ProductFacade.updateProduct(product);
        promise.then(function(result) {

            if(result.productType){
                modal.product = {};
                result.categoryId = result.productType.categoryId;
                modal.closeModal(result)
            }else{
                modal.message = result.message;
                modal.showMessage = true;
            }
        }, function error(result) {
            modal.message = result;
        });
    };

        modal.create = function(product) {
            product = modal.formatDate(product);
            var promise = ProductFacade.createProduct(product);
            promise.then(function(result) {
                if(result.productType){
                    modal.product = {};
                    result.categoryId = result.productType.categoryId;
                    modal.closeModal(result)
                }else{
                    modal.message = result.message;
                    modal.showMessage = true;
                }

            }, function error(result) {
                modal.message = result;
            });
        };

        modal.closeModal = function(result){
            $uibModalInstance.close(result);
        };

        modal.formatDate = function (product){
            if(product.dataCadastro){
                product.dataCadastro = $filter('date')(product.dataCadastro, 'dd-MM-yyyy HH:mm:ss');
            }
            return product;
        };


        modal.buildCategory = function (){
            for(var i = 0, len = modal.categories.list.length; i < len; i++){
                if(modal.categories.list[i].id === modal.categoryId){
                    modal.category = modal.categories.list[i];
                    break;
                }
            }
        };

        modal.buildCategory();



};