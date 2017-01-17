const  express = require('express'),
        router = express.Router(),
        Usuario = require('./model_Usuario'),
        jwt = require('jwt-simple'),
        moment = require('moment'),
        config = require('./tokenLogin');
        token = 'fe1a1915a379f3be5394b64d14794932';

module.exports = function(app){
    //valida y crea tokens
    login = function(req,res){        
        var login = req.body.login;
        var pass = req.body.password;
        Usuario.find({"login":login}, function(err, user) {        
            if (err){            
                console.log("error buscar usuario "+err);
                throw err;
            };
            var usuario = user[0];
            var id = usuario._id;
            if(login === usuario.login && pass === usuario.password){                
                res.send(createToken(id));
            }else{
                res.send("");
            }
        });        
    };
    //tokens no visible para service y sin url
    createToken = function(id) {  
      var payload = {
          sub: id,
          iat: moment().unix(),
          exp: moment().add(1, "days").unix()
        };
      return jwt.encode(payload, Buffer.from(token, 'hex'));
    };
    
    //valida token
    autentificar = function(req, res, next) {  
      if(!req.headers.authorization) {
        return res
          .status(403)
          .send({message: "Tu petición no tiene cabecera de autorización"});
      }

      var cadena = req.headers.authorization.split(" ")[1];
      var payload = jwt.decode(token, Buffer.from(token, 'hex'));

      if(payload.exp <= moment().unix()){
         return res
         .status(401)
         .send({message: "El token ha expirado"});
      }
      req.user = payload.sub;
      console.log("id "+payload.sub);
      next();
    };
    
    usuarioID = function(login){
        Usuario.find({"login":login}, function(err, user) {        
            if (err){            
                console.log("error buscar usuario "+err);
                throw err;
            };
            res.json(user[0]);
        });
    };

    app.post('/Login/login/',login);
    app.post('/Login/autentificar/',autentificar);
};