angular.module('app.controllerLogin', [])
    
    .controller('loginController', ['$scope', '$mdDialog', 'logindb', function ($scope, $mdDialog, logindb){
        $scope.autentificar = function () {
            var user = $scope.login.usuario;
            var pass = $scope.login.password;
            var data = logindb.autentificarUsuario(user,pass);
            console.log(data);
        };
    }]);