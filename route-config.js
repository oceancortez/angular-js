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
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/product.html',
            controller: 'ProductController',
            controllerAs: 'ProductCtrl'
        })

        .when('/product/create', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/createProduct.html',
            controller: 'CreateProductController',
            controllerAs: 'produtoCtrl'
        })

        .when('/product/list', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/listProduct.html',
            controller: 'ListProductController',
            controllerAs: 'ListProductCtrl'
        })

        .when('/product/delete', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/deleteProduct.html',
            controller: 'DeleteProductController',
            controllerAs: 'DeleteProductCtrl'
        })

        .when('/product/test', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/testProduct.html',
            controller: 'TestProductController',
            controllerAs: 'TestProductCtrl'
        })

        .when('/product/update', {
            templateUrl: 'sofea-bower-omc-pedidos/module/produto/view/updateProduct.html',
            controller: 'UpdateProductController',
            controllerAs: 'UpdateProductCtrl'
        })


        .otherwise({
            redirectTo: '/'
        })
    });