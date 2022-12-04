require('dotenv').config();
const express = require('express');
const app = express();



//setings 
const port = process.env.PORT || 8080;



// conexión a la base de datos
const mongoose = require('mongoose');
const password = "8IXwNdsWyRGFllCv"
const uri = `mongodb+srv://ocean_emprendimientos:${password}@ocean.jfe3ji2.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

//rutas
app.use('/', require('./router/routes'))

app.listen(port, () => console.log("servidor andando en: 🔥", port));