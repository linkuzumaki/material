angular.module('app.service2', [])
        .service('usuariodb', ['$window', '$http', '$mdToast','$q', function ($window, $http, $mdToast,$q) {
            this.eliminarUsuario = function (id){
                $http.post('/Usuario/eliminar/'+id).then(function(data){
                    console.log("service2 delete "+id);
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Usuario Eliminado')
                            .hideDelay(1000)
                            .position('top left')
                    );
                })
            };
            this.horaServidor = function(){
                $http.get('/Usuario/hora').then(function(fecha){
                    console.log("fehca "+fecha.data);
                    return fecha.data;
                });
            };
            this.actualizarUsuario = function(id,data){
                console.log("service2 impremir datra "+ id+" "+data.nombre);
                var defered = $q.defer();
                var promise = defered.promise;
                $http.post('/Usuario/actualizar/'+id,(data))
                .then(function (datos) {
                    defered.resolve(datos);
                })
                .catch(function (err) {
                    defered.reject(err);
                })
            return promise;
            };
            this.guardarUsuario = function (data) {
                console.log("service.data "+ data);
                $http.post('/Usuario/agregar', (data)
                ).then(function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Usuario Guardado')
                            .hideDelay(1000)
                            .position('top left')
                    );
                })
                    .catch(function (exception) {
                        console.log("service2"+exception);
                    });
            };
            this.cargarListaUsuario = function (){
                
                var defered=$q.defer();
                var promise=defered.promise;
                
                $http.get('/Usuario/cargarLista/')
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