const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowcaseSchema = new Schema({
    _type: {type: String, default: 'playlist'},
    title: {type: String, required: false},
    description: {type: String, required: false},
    variantId: {type: String, default: 0, required: true},
    playlists: [{type: String, required: true}]
});

module.exports = mongoose.model("PlaylistShowcase", ShowcaseSchema);