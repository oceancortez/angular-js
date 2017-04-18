angular.module('omc.product').controller('ProductModalController', ProductModalController);

    ProductModalController.$inject = ['$uibModalInstance' , 'ProductFacade', 'product', 'showUpdate', 'showDelete',
        'showCreate', '$filter'];

    function ProductModalController($uibModalInstance,  ProductFacade, product, showUpdate, showDelete, showCreate,
    $filter){

        var modal = this;
        modal.product = product;
        modal.showUpdate = showUpdate;
        modal.showDelete = showDelete;
        modal.showCreate = showCreate;
       //modal.labelView = labelView;

        
    modal.delete = function(product) {
            ProductFacade.deleteProduct(product).then(function(retorno) {
            modal.product = {};
            modal.closeModal(retorno);              
            }, function error(retorno) {
             modal.alertMsg = retorno;
         });       
    };

     modal.update = function(product) {
        var promise = ProductFacade.updateProduct(product);
        promise.then(function(retorno) {
            if(retorno.indexOf('Success') > 0){
                modal.product = {};
                 modal.closeModal(retorno);
              }else{
                 modal.alertMsg = retorno;
              }
        }, function error(retorno) {
            modal.alertMsg = retorno;
        });
    };

        modal.create = function(product) {
            product = modal.formatDate(product);
            var promise = ProductFacade.createProduct(product);
            promise.then(function(result) {
                if(result.indexOf('Success') > 0){
                    modal.product = {};
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

        modal.formatDate = function (product){
            if(product.dataCadastro){
                product.dataCadastro = $filter('date')(product.dataCadastro, 'dd-MM-yyyy HH:mm:ss');
            }
            return product;
        };



};