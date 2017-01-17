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
                $scope.FechaServidor = function(data,event){
                    return usuariodb.horaServidor();
                    /*
                    usuariodb.horaServidor().then(function(datos){
                            console.log(datos);
                            return datos;
                        });*/
                };
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
                                usuariodb.eliminarUsuario(person._id);
                                console.log("eliminado");
                                $scope.cargarListaUsuario();
                            }, function () {
                                console.log("cancelar");
                    });
                };
                //boton guardar
                $scope.guardarUsuario = function () {
                    console.log($scope.actualizar);
                    if($scope.actualizar){
                        $scope.user.fechaModificacion=$scope.FechaServidor();
                        console.log("user: "+JSON.stringify($scope.user));
                        console.log("usuario: "+JSON.stringify($scope.usuario));
                        usuariodb.actualizarUsuario($scope.usuario._id,JSON.stringify($scope.user)).then(function(datos){
                            console.log("promesa controlador "+datos);
                        });                        
                        $scope.LimpiarUsuario(); 
                        $scope.cargarListaUsuario();
                        $scope.opcion = "Nuevo"; 
                        $scope.actualizar=false;
                        $scope.usuario={}; 
                        return;
                    }
                    if (!$scope.UsuarioVacio()) {
                        console.log("fecha : "+$scope.FechaServidor());
                        $scope.user.fechaModificacion=$scope.FechaServidor();
                        $scope.user.activo= '0';
                        $scope.user.fechaModificacion= $scope.FechaServidor();
                        usuariodb.guardarUsuario(JSON.stringify($scope.user)); 
                        $scope.LimpiarUsuario();
                        $scope.cargarListaUsuario(); 
                        $scope.opcion = "Nuevo";
                    } else
                    {
                        console.log("no inserto");
                    }
                };
                $scope.Editar = function (id) {
                    console.log("editar controlador "+id);
                    $scope.opcion = "Editar Usuario " + id.nombre; 
                    $scope.user = {};
                    $scope.user.nombre = id.nombre;
                    $scope.user.apellido = id.apellido;
                    $scope.user.celular = id.celular;
                    $scope.user.telefono = id.telefono;
                    $scope.user.tipo = id.tipo;
                    $scope.user.oficio = id.oficio;
                    $scope.user.contacto = id.contacto;
                    $scope.user.nContacto = id.nContacto;
                    $scope.user.organizacion = id.organizacion;
                    $scope.user.rol = id.rol;
                    $scope.user.correo = id.correo;
                    $scope.user.login = id.login;
                    $scope.user.password = id.password;
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
                    if ($scope.user.nombre === "") {
                        return true;
                    }
                    if ($scope.user.apellido === "") {
                        return true;
                    }
                    if ($scope.user.celular === "") {
                        return true;
                    }
                    if ($scope.user.telefono === "") {
                        return true;
                    }
                    if ($scope.user.tipo === "") {
                        return true;
                    }
                    if ($scope.user.oficio === "") {
                        return true;
                    }
                    if ($scope.user.contacto === "") {
                        return true;
                    }
                    if ($scope.user.nContacto === "") {
                        return true;
                    }
                    if ($scope.user.organizacion === "") {
                        return true;
                    }
                    if ($scope.user.rol === "") {
                        return true;
                    }
                    if ($scope.user.correo === "") {
                        return true;
                    }
                    if ($scope.user.login === "") {
                        return true;
                    }
                    if ($scope.user.password === "") {
                        return true;
                    }
                    return false;
                };
                $scope.LimpiarUsuario = function ()
                {
                    $scope.user.nombre = "";
                    $scope.user.apellido = "";
                    $scope.user.celular = "";
                    $scope.user.telefono = "";
                    $scope.user.tipo = "";
                    $scope.user.oficio = "";
                    $scope.user.contacto = "";
                    $scope.user.nContacto = "";
                    $scope.user.organizacion = "";
                    $scope.user.rol = "";
                    $scope.user.correo = "";
                    $scope.user.login = "";
                    $scope.user.password = "";
                    $scope.opcion = "Nuevo";
                    $scope.actualizar=false;
                };
            }]);
