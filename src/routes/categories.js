const express = require('express');
const categorySchema = require('../models/category');

const router = express.Router();


//GET - Devuelve todas las categories en la base de datos
router.get('/categories', (req, res) => {

    categorySchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/category/:id', (req, res) => {

    console.log(req.params);

    categorySchema
        .findOne(req.params)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//POST - Inserta una nueva category en la base de datos
router.post('/category', (req, res) => {

    console.log("POST");
    console.log(req.body);

    const category = categorySchema(req.body);
    category
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
