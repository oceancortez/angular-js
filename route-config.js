angular.module('omc')
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

        .when('/listar-pedidos', {
            templateUrl: 'sofea-bower-omc-pedidos/module/pedido/view/listarPedidos.html',
            controller: 'ListarPedidoController'
        })

        .when('/produto', {
                templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/produto.html',
                controller: 'ProdutoController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });