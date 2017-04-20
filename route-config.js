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
            templateUrl: 'sofea-bower-omc-pedidos/module/product/view/product.html'
        })

        .when('/product/create', {
            templateUrl: 'sofea-bower-omc-pedidos/module/product/view/createProduct.html'
        })

        .when('/product/update', {
            templateUrl: 'sofea-bower-omc-pedidos/module/product/view/updateProduct.html'
        })

        .when('/product/list', {
            templateUrl: 'sofea-bower-omc-pedidos/module/product/view/listProduct.html'
        })

        .when('/category', {
            templateUrl: 'sofea-bower-omc-pedidos/module/category/view/category.html'
        })

        .when('/product/test', {
            templateUrl: 'sofea-bower-omc-pedidos/module/product/view/testProduct.html',
            controller: 'TestProductController',
            controllerAs: 'TestProductCtrl'
        })

        .otherwise({
            redirectTo: '/'
        })
    });