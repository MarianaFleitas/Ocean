const {Schema, model} = require('mongoose');

const clientSchema = new Schema({
  _id:long,
  name:  String,
  lastname: String,
  mail: String,
  consultation: String,
});



// Crear el modelo
const client = model('client' , clientSchema);

module.exports = client;