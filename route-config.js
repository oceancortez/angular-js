angular.module('omc.pedidos.cliente')
     .config(function($routeProvider) {
        $routeProvider.when('/home', {
                templateUrl: 'sofea-bower-omc-pedidos/module/cliente/view/home.html',
                controller: 'indexController'
            })
            .when('/listar-clientes', {
                templateUrl: 'sofea-bower-omc-pedidos/module/cliente/view/listarClientes.html',
                controller: 'listarClienteController'
            })

        .when('/cadastar-cliente', {
            templateUrl: 'sofea-bower-omc-pedidos/module/cliente/view/cadastrarCliente.html',
            controller: 'cadastrarClienteController'
        })
            .otherwise({
                redirectTo: '/'
            })
    });