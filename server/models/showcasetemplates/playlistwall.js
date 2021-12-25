const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
    playlists: [{type: String, required: true}]
});

module.exports = mongoose.model("playlistwall", TemplateSchema);