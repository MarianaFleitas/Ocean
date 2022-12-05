const mongoose = require("mongoose");

const entrepreneurshipSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    id_product:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        require: false
    }],
    id_service:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
        require: false
    }],
    id_user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
});

module.exports = mongoose.model('entrepreneurship', entrepreneurshipSchema);