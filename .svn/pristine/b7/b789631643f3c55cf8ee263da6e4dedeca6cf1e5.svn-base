var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

var Usuario = new Schema({
  "nombre": "String",
  "apellido": "String",
  "celular": "String",
  "telefono": "Number",
  "tipo": "String",
  "oficio":"String",
  "contacto": "String",
  "nContacto": "Number",
  "organización": "String",
  "rol": "String",
  "correo": "String",
  "login": "String",
  "password": "String",
  "fechaCreacion": "Date",
  "activo": "Number",
  "fechaModificacion": "String"
});
/*
var Usuario = new Schema({
  "nombre": "String",
  "apellido": "String",
  "celular": "String",
  "telefono": "Number",
  "tipo": "String",
  "contacto": "String",
  "nContacto": "Number",
  "oficio": "String",
  "organización": "String",
  "correo": "String",
  "password": "String",
  "login": "String",
  "fechaCreacion": "Date",
  "activo": "Number",
  "roles": [
    {
      "rTipo": "String",
      "rValor": "String"
    }
  ],
  "fechaModificacion": [
    {
      "fFecha": "Date",
      "fUsuario": "String"
    }
  ]
});
*/
module.exports = mongoose.model('Usuario', Usuario);
