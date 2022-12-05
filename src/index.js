const express = require('express');
var mongoose = require('mongoose');
require("dotenv").config();

//Routes
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/user");
const serviceRouter = require("./routes/services");
const productRouter = require("./routes/products");
const entrepreneurshipRouter = require('./routes/entrepreneurship');

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola soy la api de OCEAN");
})

app.use(express.json());
//middleware
app.use("/api", categoriesRouter, usersRouter, serviceRouter, productRouter, entrepreneurshipRouter);

const password = process.env.PASSWORD
const uri = `mongodb+srv://ocean_emprendimientos:${password}@ocean.jfe3ji2.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('conectado a mongodb'))
  .catch(e => console.log('error de conexión', e))

app.listen(port, () => console.log('servidor alto port', port));
