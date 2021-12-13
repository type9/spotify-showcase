const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
    subtitle: {type: String, required: false},
    description: {type: String, required: false},
});

module.exports = mongoose.model("header_1", HeaderSchema);