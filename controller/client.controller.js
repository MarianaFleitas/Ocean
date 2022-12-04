//REST CLIENTE 
var mongoose = require('mongoose');
var cliente = mongoose.model('client');

//GET - Devuelve todos los clientes en la base de datos
const findAllClientes = function (req, res) {
  cliente.find(function (err, cliente) {
    if (err) res.send(500, err.message);

    console.log("GET/cliente");
    res.status(200).jsonp(cliente);
  });
};

//GET - Devuelve todos los clientes por su ID en la base de datos

const findById = function(req, res) {

	cliente.findById(req.params.id, function(err, cliente){

    if (err) {
      return res.send(500 .err.message)
    }
    console.log('GET/cliente/' + req.params.id);
		res.status(200).jsonp(cliente);
	});
};

//POST - Inserta un nuevo cliente en la base de datos
const addCliente = function (req, res) {

  console.log("POST");
  console.log(req.body);

  const cliente = new cliente({
  _id:req.body._id,
  name:req.body.name,
  lastname:req.body.lastname,
  mail:req.body.mail,
  consultation:req.body.consultation,
  });

  cliente.save(function (err, cliente) {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(cliente);
  });
}

//PUT - Actualiza un cliente que ya existe
const updateCliente = function (req, res) {

  cliente.findById(req.params.id, function (err, cliente) {
    cliente._id = req.body._id,
    cliente.name= req.body.name,
    cliente.lastname= req.body.lastname, 
    cliente.mail= req.body.mail,
    cliente.consultation = req.body.consultation,

    cliente.save(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(cliente);
    });
  });
};

//DELETE - Elimina el cliente por su ID

const deleteCliente = function (req, res) {
  cliente.findById(req.params.id, function (err, cliente) {
    cliente.remove(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};

module.exports = {
  findAllClientes,
  addCliente,
  findById,
  updateCliente,
  deleteCliente,
}