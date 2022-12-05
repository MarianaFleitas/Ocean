const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    id_category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoty'
    }
});

module.exports = mongoose.model('service', serviceSchema);