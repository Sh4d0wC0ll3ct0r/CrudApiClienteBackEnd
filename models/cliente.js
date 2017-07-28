'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSChema = Schema({
    nombre : String,
    email: String,
    estado:Boolean
});

module.exports = mongoose.model('Cliente', ClienteSChema);