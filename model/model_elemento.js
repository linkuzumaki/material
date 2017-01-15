var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Elemento = new Schema({
    "idform": {
        "type": "string",
        "required": true
    },
    "nameform": {
        "type": "string",
        "required": true
    },
    "elements": {
        "idelement": {
            "type": "string",
            "required": true
        },
        "element": {
            
        }
    }
})

module.exports = mongoose.model('Elemento', Elemento);
