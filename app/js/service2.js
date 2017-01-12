angular.module('app.service2', [])
        .service('usuariodb', ['$window', '$http', '$mdToast','$q', function ($window, $http, $mdToast,$q) {
            this.eliminarUsuario = function (id){
                $http.delete('/Usuario/'+id).then(function(data){
                    console.log("service2 delete "+id);
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('eliminarUsuario')
                            .hideDelay(1000)
                            .position('top rigth')
                    );
                })
            };
            this.actualizarUsuario = function(data){
                console.log("actualizar usuario service2 "+data.login);
                $http.post('/Usuario/'+data.login,({
                    nombre: data.Nombre,
                    apellido: data.Apellido,
                    celular: data.Celular,
                    telefono: data.Telefono,
                    tipo: data.Tipo,
                    oficio: data.Oficio,
                    contacto: data.Contacto,
                    nContacto: data.nContacto,
                    organizacion: data.Organizacion,
                    rol: data.Rol,
                    correo: data.Correo,
                    password: data.Password,
                    activo: '0',
                    fechaModificacion: new Date()
                }),true).then(function(){
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('actualizarUsuario')
                            .hideDelay(1000)
                            .position('top rigth')
                    );
                })
                        .catch(function(exe){
                            console.log("service2 actualizarUser error "+exe);
                });
            };
            this.guardarUsuario = function (data) {
                //console.log(data); 
                $http.post('/Usuario', ({                    
                    nombre: data.Nombre,
                    apellido: data.Apellido,
                    celular: data.Celular,
                    telefono: data.Telefono,
                    tipo: data.Tipo,
                    oficio: data.Oficio,
                    contacto: data.Contacto,
                    nContacto: data.nContacto,
                    organizacion: data.Organizacion,
                    rol: data.Rol,
                    correo: data.Correo,
                    login: data.Login,
                    password: data.Password,
                    fechaCreacion: new Date(),
                    activo: '0',
                    fechaModificacion: new Date()

                })).then(function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('guardarUsuario')
                            .hideDelay(1000)
                            .position('top rigth')
                    );
                })
                    .catch(function (exception) {
                        console.log("service2"+exception);
                    });
            };
            this.cargarListaUsuario = function (){
                
                var defered=$q.defer();
                var promise=defered.promise;
                
                $http.get('/Usuario')
                .then(function (data) {
                    defered.resolve(data);
                })
                .catch(function (err) {
                   defered.reject(err);
                })
              return promise;
            };
            this.cargarListaUsuarioID = function (){
                $http.get('/usuario/:id',({ login: '*' })).then(function (response) {
                    return response.data;
                });
                /*
                $http.get('/usuario') //$http.get('/usuario/:id',{ login: '*' }) //$http.get('/usuario')  $http.get('/elemento/:id',{ idform: 'f1' })
                    .then(function(response){
                        console.log("service2 "+ response.data.records);
                        return response.data.records;

                    })
                    .catch(function(error){
                        console.log("service2 cargarListaUsuario"+ error);

                    });
                    */
            };
        }]);