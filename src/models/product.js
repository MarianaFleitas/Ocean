const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    id_category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        require: true
    }
});

module.exports = mongoose.model('product', productSchema);