var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./config');

exports.createToken = function(user) {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(7, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

exports.ensureAuthenticated = function(req, res, next) {  
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if(payload.exp <= moment().unix()) {
     return res
         .status(401)
        .send({message: "El token ha expirado"});
  }

  req.user = payload.sub;
  next();
}

angular.module('app.serviceLogin', [])
        .service('logindb', ['$window', '$http', '$mdToast','$q', function ($window, $http, $mdToast,$q) {
            this.autentificarUsuario = function(id,pass){
                $http.post('/Login/autentificar/'+id,pass).then(function(data){
                    console.log("serviceLogin: "+data);
                    return data;
                });
            };
        }]);

