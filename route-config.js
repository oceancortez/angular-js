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

        .when('/product', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/product.html'
        })

        .when('/product/create', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/createProduct.html'
        })

        .when('/product/update', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/updateProduct.html'
        })

        .when('/product/list', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/listProduct.html'
        })

        .when('/product/delete', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/deleteProduct.html'
        })

        .when('/product/test', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/testProduct.html',
            controller: 'TestProductController',
            controllerAs: 'TestProductCtrl'
        })

        .otherwise({
            redirectTo: '/'
        })
    });