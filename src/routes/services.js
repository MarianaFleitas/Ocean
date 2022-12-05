const express = require('express');
const serviceSchema = require('../models/service');
const categorySchema = require('../models/category');
const router = express.Router();


//GET - Devuelve todas las categories en la base de datos
router.get('/services', (req, res) => {

    serviceSchema
        .find().populate({path:"id_category" , model: "category" })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/service/:id', (req, res) => {

    console.log(req.params);

    serviceSchema
        .findOne(req.params)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//POST - Inserta una nueva category en la base de datos
router.post('/service/:idCategory', (req, res) => {

    console.log("POST");
    console.log(req.body);

    const service = serviceSchema(req.body);

    categorySchema
        .findOne(req.params)
        .then((data) => {
            const category = categorySchema(data);
            service.id_category = category.id;
            console.log(service);
            service
                .save()
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }));
        })
        .catch((error) => res.json({ message: error }));
});

module.exports = router;