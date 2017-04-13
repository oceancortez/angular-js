angular.module('omc.product')

.directive('productForm', function (){

return {
    // template: '<div>xxxxxxxxxxxxxxx</div>',
    templateUrl: 'sofea-bower-omc-pedidos/module/product/view/productForm.html',
    // replace: true,
    scope: {
        product: "=product"
    },

    transclude: true
};

});