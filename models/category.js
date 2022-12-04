const {Schema, model} = require('mongoose');

const categorySchema = new Schema({
  _id:long,
  name:  String,
});

// Crear el modelo
const category= model('category', categorySchema);

module.exports = category;