//CRUD de CLIENTE
const cliente = require('../models/client');

//OBTENER CLIENTE
app.get('/cliente', function (req, res) {
    res.send('GET request to cliente')
  })

  //CREAR CLIENTE

  app.post('/cliente', function (req, res) {
    res.send('POST request to cliente')
  })

  //ACTUALIZAR CLIENTE

  app.put('/cliente', function (req, res) {
    res.send('PUT request to cliente')
  })

  //ELIMINAR CLIENTE

  app.delete('/cliente', function (req, res) {
    res.send('DELETE request to cliente')
  })