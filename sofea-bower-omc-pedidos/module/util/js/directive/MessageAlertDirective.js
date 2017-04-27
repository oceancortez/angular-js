/**
 * Created by 579535 on 27/04/2017.
 */
'use strict';

angular.module('omc.util')

    .directive('messageAlertDirective',
        function messageAlertDirective (){
            return {
                require: 'ngModel',
                templateUrl: 'sofea-bower-omc-pedidos/module/util/view/messageAlert.html',
                replace: true,
                restrict: "AE",
                scope:{
                    message: "=",
                    showMessage: "="
                },
                transclude: true,
                link: function(scope, element, attrs, ctrl){
                    setTimeout(function(){
                        scope.message = null;
                        scope.showMessage = false;
                    }, 3000);
                }
            };
        });

/*
* restrict: "AE",
* A = atributo do html ex: <div> seria <message-alert-directive>
* E = elemento é dentro da tag da div por exemplo
* */

/*
* Em scope:
* "@"  serve para pegar o valor dor elemento da tag
* <message-alert-directive message="controller.message">
*   será imppresso a variavel como string "controller.message"
* </message-alert-directive>
*
* "="  serve para fazer um vínculo bi-direcional
*
* * <message-alert-directive message="controller.message">
 *  será impresso o valor da variavél   "sdijadijaijdiaj"
 * </message-alert-directive>
* */