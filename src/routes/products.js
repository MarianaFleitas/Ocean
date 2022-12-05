const express = require('express');
const productSchema = require('../models/product');
const categorySchema = require('../models/category');
const router = express.Router();


//GET - Devuelve todas las categories en la base de datos
router.get('/products', (req, res) => {

    productSchema
        .find().populate({path:"id_category" , model: "category" })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get('/product/:id', (req, res) => {

    console.log(req.params);

    productSchema
        .findOne(req.params)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//POST - Inserta una nueva category en la base de datos
router.post('/product/:idCategory', (req, res) => {

    console.log("POST");
    console.log(req.body);

    const product = productSchema(req.body);

    productSchema
        .findOne(req.params)
        .then((data) => {
            const category = categorySchema(data);
            product.id_category = category.id;
            console.log(product);
            product
                .save()
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }));
        })
        .catch((error) => res.json({ message: error }));
});

module.exports = router;