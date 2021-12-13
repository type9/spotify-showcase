const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowcaseSchema = new Schema({
    title: {type: String, required: false},
    description: {type: String, required: false},
    style: {type: Number, required: true},
    variant: {type: String, default: "3x2", required: true},
    slotCenter: {type: String, required: false},
    slot1: {type: String, required: false},
    slot2: {type: String, required: false},
    slot3: {type: String, required: false},
    slot4: {type: String, required: false},
    slot5: {type: String, required: false},
    slot6: {type: String, required: false},
});

module.exports = mongoose.model("showcase_1", ShowcaseSchema);