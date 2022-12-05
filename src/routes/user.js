const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();


//GET - Devuelve todas las categories en la base de datos
router.get('/users', (req, res) => {

    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//POST - Inserta una nueva category en la base de datos
router.post('/user', (req, res) => {
    console.log("POST");
    console.log(req.body);

    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;