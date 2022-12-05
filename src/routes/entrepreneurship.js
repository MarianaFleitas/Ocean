const express = require('express');
const entrepreneurshipSchema = require('../models/entrepreneurship');
const serviceSchema = require('../models/service');
const userSchema = require('../models/user');
const router = express.Router();


//GET - Devuelve todas las entrepreneurship en la base de datos
router.get('/entrepreneurship', (req, res) => {

    entrepreneurshipSchema
        .find().populate("id_service").populate("id_user").populate("id_product")
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/entrepreneurship/:id', (req, res) => {

    console.log(req.params);

    entrepreneurshipSchema
        .findOne(req.params)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//POST - Inserta una nueva entrepreneurship en la base de datos
router.post('/entrepreneurship/:idCategory/:idUser', (req, res) => {

    console.log("POST");
    console.log(req.param);

    const entrepreneurship = entrepreneurshipSchema(req.body);

    serviceSchema
        .findOne(req.params)
        .then((data) => {
            const service = serviceSchema(data);
            entrepreneurship.id_service = service.id;
            console.log(entrepreneurship);
            userSchema
                .findOne(req.params)
                .then((data) => {
                    const user = userSchema(data);
                    entrepreneurship.id_user = user.id;
                    entrepreneurship
                        .save()
                        .then((data) => res.json(data))
                        .catch((error) => res.json({ message: error }));
                })
                .catch((error) => res.json({ message: error }));
        })
        .catch((error) => res.json({ message: error }));
});

module.exports = router;