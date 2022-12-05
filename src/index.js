const express = require('express');
var mongoose = require('mongoose');
require("dotenv").config();

//Routes 
const userRouter = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000 ;

app.get("/", (req, res) => {
    res.send("Hola soy la api de OCEAN");
})

//middleware
app.use("/api",userRouter);

const password = process.env.PASSWORD
const uri = `mongodb+srv://ocean_emprendimientos:${password}@ocean.jfe3ji2.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

app.listen(port, () => console.log('servidor alto port', port));
