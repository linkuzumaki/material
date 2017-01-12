const  express = require('express'),
        router = express.Router(),
        Usuario = require('./model_Usuario');

module.exports = function(app){
    agregarUsuario = function(req,res){
        var usuario = Usuario({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            celular: req.body.celular,
            telefono: req.body.telefono,
            tipo: req.body.tipo,
            oficio: req.body.oficio,
            contacto: req.body.contacto,
            nContacto: req.body.nContacto,
            organizacion: req.body.organización,
            rol: req.body.rol,
            correo: req.body.correo,
            login: req.body.login,
            password: req.body.password,
            fechaCreacion: req.body.fechaCreacion,
            activo: req.body.activo,
            fechaModificacion: req.body.fechaModificacion
        });
        /* 
        var usuario = Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        celular: req.body.celular,
        telefono: req.body.telefono,
        tipo: req.body.tipo,
        contacto: req.body.contacto,
        nContacto: req.body.nContacto,
        oficio: req.body.oficio,
        organización: req.body.organización,
        roles: [{
                rTipo: req.body.tipo,
                rValor: req.body.valor
            }],
        correo: req.body.correo,
        password: req.body.password,
        login: req.body.login,
        fechaCreacion: req.body.fechaCreacion,
        activo: req.body.activo,
        fechaModificacion: [{
                fFecha: req.body.fecha,
                fUsuario: req.body.usuario
            }]
        });
        */
        usuario.save(function(error){
            if(error){
                //console.log('error al insertar '+error);
            }else
            {
                //console.log('datos guardados');
                res.redirect('/index.html');
            }
        });
    };
    
    cargarListaUsuario = function(req,res){
        //console.log("GET_/Usuario");
        return Usuario.find(function(error,data){
            if(!error){
                return res.json(data);
            }else{
                //console.log("usuarioCtrl cargarListaUsuario"+error);
         
            }
        });
    };
    cargarListaUsuarioID = function(reg,res){
        //console.log("GET_/Usuario");
        return Usuario.find(function(error,data){
            if(!error){
                //console.log("usuarioctrl data"+ data);
                return res.send(data);
            }else{
                //console.log("usuarioCtrl cargarListaUsuario"+error); 
      
            }
        });
    };
    eliminarUsuario = function(req,res){
        return Usuario.remove({
            login:req.params.id
        },function(error,data){
            if(!error){
                return res.json({mensaje:'eliminado'});
            }else{
                console.log("usuariocrtl " + error);
                return res.send(error);
            }
        });
    };
    actualizarUsuario = function(req,res){
        console.log('parametros '+req.params.id);
        console.log('nombre '+req.body.nombre);
        Usuario.find({
            login:req.params.id
        },function(error,usuario){
            if(error){
                //console.log('error al insertar '+error);
            } else
            {
                console.log(usuario);
                usuario[0].nombre = req.body.nombre;
                usuario[0].save(function (error) {
                    if (error) {
                        console.log('error al insertar '+error);
                    } else
                    {
                        //console.log('datos guardados');
                        //res.redirect('/index.html');
                    }
                });
            }
        });
    };
    app.post('/Usuario/:id',actualizarUsuario);
    app.post('/Usuario',agregarUsuario);
    app.delete('/Usuario/:id',eliminarUsuario);
    app.get('/Usuario', cargarListaUsuario);
    app.get('/Usuario/:id',cargarListaUsuarioID);
};