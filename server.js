////server.js
//Incluímos las dependencias que vamos a usar

const   express=require('express'),
        app= express(),
        bodyParser  = require("body-parser"),
        methodOverride = require("method-override");
        mongoose=require('mongoose'),
        log= require('./app/libs/log')(module),

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));


//routes = require('./model/modelCtrl.js')(app);
require('./model/grud_elementos.js')(app);
routes =require('./model/usuarioCtrl.js')(app);
// Conexión
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/proyectodb', function(err, database) {
    if (err) return console.log('erro de conexion bd'+err);
    db = database;
    var puerto = 3037;
    app.listen(puerto,function (){
        console.log('listening on'+ puerto);
    });
});


