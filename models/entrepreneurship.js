const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const entrepreneurshipSchema = new Schema({
  _id:long,
  name: {type: String, require: true},
  lastname: {type: String, require: true},
  mail: {type: String, require: true},
  mail_repeat:{type: String, require: true},
  description: {type: String, require: true},
  password:{ type:String, require: true},
});

// crear encriptación para la contraseña 
entrepreneurshipSchema.methods.encrypPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

entrepreneurshipSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

// Crear el modelo
const entrepreneurship= model('entrepreneurship', entrepreneurshipSchema);

module.exports = entrepreneurship;