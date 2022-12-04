const express = require('express');
const app = express()
const router = express.Router();


app.get('/', (req,res)=>{
    res.send(console.log("Hello word"));
});

app.get('/emprendimientos',(req,res)=>{
    res.send(console.log("emprendimientos"));
});

app.get('/cliente',(req,res)=>{
    res.send(console.log("cliente"));
});

app.get('/servicios',(req,res)=>{
    res.send(console.log("servicios"));
});

app.get('/productos',(req,res)=>{
    res.send({nombre: 'Mariana'});
});

module.exports = router;