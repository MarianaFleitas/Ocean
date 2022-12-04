const express = require('express');
const app = express()
const router = express.Router();

const clienteCtrl = require('../controller/client.controller');

// API routes
const cliente = express.Router();

cliente
  .route("/cliente")
  .get(clienteCtrl.findAllCliente)
  .post(clienteCtrl.addCliente);

cliente
  .route("/cliente/:id")
  .get(clienteCtrl.findById)
  .put(clienteCtrl.updateCliente)
  .delete(clienteCtrl.deleteCliente);



//HOME
app.get('/', (req,res)=>{
    res.send(console.log("Hello word"));
});

//EMPRENDIMIENTOS
app.get('/emprendimientos',(req,res)=>{
    res.send(console.log("emprendimientos"));
});


//SERVICIOS
app.get('/servicios',(req,res)=>{
    res.send(console.log("servicios"));
});


//PRODUCTOS
app.get('/productos',(req,res)=>{
    res.send({nombre: 'Mariana'});
});

module.exports = router;