const mongoose = require("mongoose");

const categoorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('category', categoorySchema);