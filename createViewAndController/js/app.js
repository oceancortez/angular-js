//@angular.module informar o nome do app principal exemplo "contato"
/**
@[] injeção de algum módulo, neste caso estamos injetando o módulo de rotas
que está nesta lib abaixo:
<script type="text/javascript" src="https://code.angularjs.org/1.5.8/angular-route.min.js"></script>
**/
angular.module("contato", ["ngRoute"])

    //@config invocamos o $routeProvider para tratar as rotas da aplicação
  .config(function($routeProvider){

   $routeProvider
   //@templateUrl Informar o diretório do arquivo dentro do projeto
   //@controller  Informar apens o nome do controller

   .when('/index', {
      templateUrl : 'index.html',
      controller  : 'indexController'
   }) 
   .when('/lista', {
      templateUrl : 'views/listaContato.html',
      controller  : 'listaContatoController'
   }) 
   .when('/contato', {
      templateUrl : 'views/contato.html',
      controller  : 'contatoController'
   })
   .otherwise ({ redirectTo: '/' });

});

