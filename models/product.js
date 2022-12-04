const {Schema, model} = require('mongoose');


const productSchema = new Schema({
  _id:long,
    category:[{
        type:Schema.Types.ObjectId,
        ref:'Category'
      }]
});

// Crear el modelo
const product= model('product', productSchema);

module.exports = product;