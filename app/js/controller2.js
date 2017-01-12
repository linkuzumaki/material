angular.module('app.controller2', [])

        .controller('perfilController', ['$scope', '$mdDialog', 'usuariodb', function ($scope, $mdDialog, usuariodb) {
                $scope.opcion = "Nuevo";
                $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
                $scope.personanomb = "nombre persona";
                //$scope.lista =usuariodb.cargarListaUsuarioID();
                /*
                $scope.people = [
                    {name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true, rut: '11.111.111-1'},
                    {name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false, rut: '22.222.222-2'},
                    {name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false, rut: '33.333.333-3'}
                ];
                */
                $scope.goToPerson = function (person, event) {
                    $mdDialog.show(
                            $mdDialog.alert()
                            .title('Navigating')
                            .textContent('Inspect ' + person)
                            .ariaLabel('Person inspect demo')
                            .ok('ok!')
                            .targetEvent(event)
                            );
                };
                
                //$scope.user = {}
                
                //$scope.lista =usuariodb.cargarListaUsuario();
            }])
        .controller('usuarioController', ['$scope', '$mdDialog', 'usuariodb', function ($scope, $mdDialog, usuariodb) {
                $scope.opcion = "Nuevo";
                $scope.actualizar;
                $scope.usuario={};
                //$scope.user = {};
                $scope.Eliminar = function (person, event, $index) {
                    $mdDialog.show(
                            $mdDialog.confirm()
                            .title('Eliminar Usuario')
                            .textContent('¿Esta seguro de querer eliminar este Usuario? : ' + person.nombre + ' '+person.apellido+' ')
                            .ariaLabel('Primary click demo')
                            .ok('Eliminar!')
                            .cancel('Cancelar')
                            .targetEvent(event)
                            )
                            .then(function () {
                                usuariodb.eliminarUsuario(person.login);
                                console.log("eliminado");
                                $scope.cargarListaUsuario();
                            }, function () {
                                console.log("cancelar");
                    });
                };
                
                $scope.guardarUsuario = function () {
                    console.log($scope.actualizar);
                    if($scope.actualizar){
                        console.log("actualizar usuario controlador2 "+$scope.usuario.login);
                        usuariodb.actualizarUsuario($scope.usuario);
                        $scope.LimpiarUsuario();
                        $scope.cargarListaUsuario(); 
                        $scope.opcion = "Nuevo"; 
                        $scope.actualizar=false;
                        $scope.usuario={};
                        return;
                    }
                    if (!$scope.UsuarioVacio()) {
                        usuariodb.guardarUsuario($scope.user);
                        $scope.LimpiarUsuario();
                        $scope.cargarListaUsuario(); 
                        $scope.opcion = "Nuevo";
                    } else
                    {
                        console.log("no inserto");
                    };
                };
                $scope.Editar = function (id) {
                    console.log("editar controlador "+id);
                    $scope.opcion = "Editar Usuario " + id.nombre; 
                    $scope.user = {};
                    $scope.user.Nombre = id.nombre;
                    $scope.user.Apellido = id.apellido;
                    $scope.user.Celular = id.celular;
                    $scope.user.Telefono = id.telefono;
                    $scope.user.Tipo = id.tipo;
                    $scope.user.Oficio = id.oficio;
                    $scope.user.Contacto = id.contacto;
                    $scope.user.nContacto = id.nContacto;
                    $scope.user.Organizacion = id.organizacion;
                    $scope.user.Rol = id.rol;
                    $scope.user.Correo = id.correo;
                    $scope.user.Login = id.login;
                    $scope.user.Password = id.password;
                    console.log($scope.user.Nombre);
                    $scope.actualizar=true;
                    $scope.usuario=id;
                };
                
                $scope.cargarListaUsuario = function()
                {
                    console.log("entro cargarlista usuario");
                    usuariodb.cargarListaUsuario().then(function (data) {
                        $scope.img = 'img/100-0.jpeg';
                        $scope.people = data.data;
                       
                    });
                };
                $scope.cargarListaUsuario();
                $scope.limpiarCampos = function ()
                {
                    //$scope.LimpiarUsuario();
                    $scope.LimpiarUsuario();
                };
                $scope.UsuarioVacio = function ()
                {
                    if ($scope.user.Nombre === "") {
                        return true;
                    }
                    if ($scope.user.Apellido === "") {
                        return true;
                    }
                    if ($scope.user.Celular === "") {
                        return true;
                    }
                    if ($scope.user.Telefono === "") {
                        return true;
                    }
                    if ($scope.user.Tipo === "") {
                        return true;
                    }
                    if ($scope.user.Oficio === "") {
                        return true;
                    }
                    if ($scope.user.Contacto === "") {
                        return true;
                    }
                    if ($scope.user.nContacto === "") {
                        return true;
                    }
                    if ($scope.user.Organizacion === "") {
                        return true;
                    }
                    if ($scope.user.Rol === "") {
                        return true;
                    }
                    if ($scope.user.Correo === "") {
                        return true;
                    }
                    if ($scope.user.Login === "") {
                        return true;
                    }
                    if ($scope.user.Password === "") {
                        return true;
                    }
                    return false;
                };
                $scope.LimpiarUsuario = function ()
                {
                    $scope.user.Nombre = "";
                    $scope.user.Apellido = "";
                    $scope.user.Celular = "";
                    $scope.user.Telefono = "";
                    $scope.user.Tipo = "";
                    $scope.user.Oficio = "";
                    $scope.user.Contacto = "";
                    $scope.user.nContacto = "";
                    $scope.user.Organizacion = "";
                    $scope.user.Rol = "";
                    $scope.user.Correo = "";
                    $scope.user.Login = "";
                    $scope.user.Password = "";
                    $scope.opcion = "Nuevo";
                    $scope.actualizar=false;
                };
            }])
