'use strict'
var  express = require('express');
var ClienteController = require("../controllers/cliente");            
var api = express.Router();
                            //function(req,res)
api.get('/clientes',ClienteController.getClientes);
api.post('/cliente',ClienteController.saveCliente);
api.put('/cliente/:id',ClienteController.updateCliente);
api.delete('/cliente/:id',ClienteController.deleteCliente);
module.exports = api;