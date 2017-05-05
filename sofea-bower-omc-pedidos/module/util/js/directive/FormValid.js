/**
 * Created by 579535 on 05/05/2017.
 */
    'use strict'
    angular.module('omc.util').directive('omcFormValid',[function (){

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl, ngModel){

                var validate = function (){
                    console.log('scope' + scope);
                    console.log('element' + element);
                    console.log('attrs' + attrs);
                    console.log('ctrl' + ctrl);
                    console.log('ngModel' + ngModel);
                };

                element.bind('keydown', validate);
                element.bind('keyup', validate);
            }
        };

    }]);




