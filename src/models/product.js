const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    id_category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoty'
    }
});

module.exports = mongoose.model('product', productSchema);