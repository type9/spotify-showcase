const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
    variantId: {type: String, default: 0, required: false},
    subtitle: {type: String, default: 'New SpotifyShowcase user!', required: false},
    description: {type: String, default: 'Enjoying the soundtrack of life...', required: false},
});

module.exports = mongoose.model("Header", HeaderSchema);