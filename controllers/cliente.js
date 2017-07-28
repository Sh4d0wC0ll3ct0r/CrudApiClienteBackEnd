'use strict'

var Cliente = require('../models/cliente');

function getClientes(req,res){
    Cliente.find({},(err,clientes)=>{
        if(err){
            res.status(500).send({message: 'Error al devolver los marcadores'});
        } else {
                 if(!clientes){
                        res.status(404).send({message: 'Cliente no existe'});
                 } else {
                        res.status(200).send({clientes});
                 }
        }
      
    });
}
function saveCliente(req,res)
{
    var cliente = new Cliente();
    var params = req.body;
    cliente.nombre= params.nombre; 
    cliente.email=params.email;
    cliente.estado=params.estado;
    cliente.save((err,clienteStored)=>{
        if(err){
            console.log("Console0: "+clienteStored);
            res.status(500).send({message: 'Error al guardar el Cliente'});
        } else {
                 if(!clienteStored){
                        console.log("Console1: "+clienteStored);
                        res.status(404).send({message: 'Cliente no existe'});
                 } else {
                        console.log("Console2: "+clienteStored); 
                        res.status(200).send({cliente: clienteStored});
                 }
        }
      
    });


}
function updateCliente(req,res)
{
    var clienteId = req.params.id;
    var update = req.body;
    console.log("ID del servidor : "+req.params.id);
    Cliente.findByIdAndUpdate(clienteId,update, (err,clienteUpdated)=>{
        if(err){
            res.status(500).send({message: 'Error al actualizar cliente'});
        } else {
                 if(!clienteUpdated){
                        res.status(404).send({message: 'No se ha podido actualizar cliente'});
                 } else {
                        res.status(200).send({cliente:clienteUpdated});
                 }
        }
      
    });


}
function deleteCliente(req,res)
{
    var clienteId = req.params.id;
     console.log("Cliente Borrado: "+Cliente.nombre);
    Cliente.findByIdAndRemove(clienteId,(err,clienteRemoved)=>{
        if(err){
            res.status(500).send({message: 'Error al borrar Cliente'});
        } else {
                 if(!clienteRemoved){
                        res.status(404).send({message: 'No se ha podido borrar el  Cliente'});
                 } else {
                        res.status(200).send({cliente:clienteRemoved});
                 }
        }
      
    });


}
module.exports = {
    getClientes,
    saveCliente,
    updateCliente,
    deleteCliente
};