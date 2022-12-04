const {Schema, model} = require('mongoose');

const serviceSchema = new Schema({
  _id:long,
    category:[{
        type:Schema.Types.ObjectId,
        ref:'Category'
      }]
});

// Crear el modelo
const service= model('service', serviceSchema);

module.exports = service;