//@angular.module informar o nome do app principal exemplo "contato"
/**
@[] injeção de algum módulo, neste caso estamos injetando o módulo de rotas
que está nesta lib abaixo:
<script type="text/javascript" src="https://code.angularjs.org/1.5.8/angular-route.min.js"></script>
**/
angular.module('contato', ['ngRoute'])
    //@config invocamos o $routeProvider para tratar as rotas da aplicação
.config(function($routeProvider){
   $routeProvider

   //TODO Separar o mudolo contato do route 
   //TODO criar alias para os controllers

   //@templateUrl Informar o diretório do arquivo dentro do projeto
   //@controller  Informar apens o nome do controller
   .when('/home', {
      templateUrl : 'view/home.html',
      controller  : 'indexController'
   }) 
  .when('/lista', {
      templateUrl : 'view/listaContato.html',
      controller  : 'listaController'
   })

      .when('/contato', {
      templateUrl : 'view/cadastroContato.html',
      controller  : 'contatoController'
   })

   .when('/contato/:id', {
      templateUrl : 'view/cadastroContato.html',
      controller  : 'contatoController'
   })

   .when('/procurarContato',{
       templateUrl : 'view/procurarContato.html',
       controller  : 'contatoController'
   })

   .when('/oxiprojectserverrest-category',{
       templateUrl : 'view/oxiprojectserverrest-category.html',
       controller : 'categoryController',
       controllerAs: 'categoryCtrl'
   })
   
   .otherwise ({
     redirectTo: '/'
    
   })
});


