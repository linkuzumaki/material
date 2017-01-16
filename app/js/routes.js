angular.module('app.routes', [])
    .config(function($routeProvider) {
        $routeProvider

            .when('/inicio', {
                templateUrl : 'templates/main.html',
                controller  : 'mainController'
            })
            .when('/acerca', {
                templateUrl : 'templates/acerca.html',
                controller  : 'aboutController'
            })
            .when('/contacto', {
                templateUrl : 'templates/contacto.html',
                controller  : 'contactController'
            })
            .when('/hola', {
                templateUrl : 'templates/hola.html',
                controller  : 'contactController'
            })
            .when('/perfil', {
                templateUrl : 'templates/perfil.html',
                controller  : 'perfilController'
            })
            .when('/login', {
                templateUrl : 'templates/login.html',
                controller  : 'loginController'
            })
            .otherwise({
                redirectTo: '/login'
            });

    });
