const  express = require('express'),
        router = express.Router(),
        Usuario = require('./model_Usuario');

module.exports = function(app){
    autentificar = function(req,res){
        Usuario.findById(req.params.id.toLowerCase()).then(function(usuario){
            var login = req.body.login;
            var pass = req.body.password;
            if(login === usuario.login && pass === usuario.password){
                res.send(true);
            }else{
                res.send(false);
            };
            }),function(error){
            res.status(500).send("Login no Validado "+error);
        };
    };
    
    app.post('/Login/autentificar/:id',autentificar);
};
