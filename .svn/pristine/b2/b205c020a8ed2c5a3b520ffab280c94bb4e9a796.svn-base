angular.module('app.controllerLogin', [])
    
    .controller('loginController', ['$scope', '$mdDialog', 'logindb', function ($scope, $mdDialog, logindb){
        $scope.autentificar = function () {
            var user = $scope.login.usuario;
            var pass = $scope.login.password;
            logindb.autentificarUsuario(user,pass).then(function (data) {
                console.log(data);
                
            });
        };
    }]);