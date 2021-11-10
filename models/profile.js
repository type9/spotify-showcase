const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    spotifyId: {type: String, required: true},
    summary: {type: String, required: false},
    showcases: [{type: Schema.Types.ObjectID}]
})

module.exports = mongoose.model("Profile", ProfileSchema);