/**
 * Created by 579535 on 05/05/2017.
 */
    'use strict'
    angular.module('omc.util').directive('omcInputRequired',[function (){

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl, ngModel){

                var validate = function (){
                    var nome = element.val();
                    if(nome.length > 0){
                        element.css({'border-color':'green'});
                    }else{
                       // scope.CategoryModalCtrl.category.name
                        element.css({'border-color':'red'});
                    }
                    console.log('scope = ' + scope);
                    console.log(element);
                    console.log(attrs);
                    console.log(ctrl);
                    console.log('ngModel = ' + ngModel);
                };

                element.bind('keydown', validate);
                element.bind('keyup', validate);
                element.bind('blur', validate);
            }
        };

    }]);




