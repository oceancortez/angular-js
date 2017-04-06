angular.module('omc.cliente')
     .config(function($routeProvider) {
        $routeProvider.when('/home', {
                templateUrl: 'sofea-bower-omc-pedidos/module/cliente/view/home.html',
                controller: 'indexController'
            })
            .when('/listar-clientes', {
                templateUrl: 'sofea-bower-omc-pedidos/module/cliente/view/listarClientes.html',
                controller: 'ListarClienteController'
            })

        .when('/cadastar-cliente', {
            templateUrl: 'sofea-bower-omc-pedidos/module/cliente/view/cadastrarCliente.html',
            controller: 'CadastrarClienteController'
        })
            .otherwise({
                redirectTo: '/'
            })
    });