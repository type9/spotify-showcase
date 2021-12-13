const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    spotifyId: {type: String, required: true},
    spotifyProfile: {},
    mediaLinks: {
        facebook: {type: String, required: false},
        instagram: {type: String, required: false},
        twitter: {type: String, required: false},
    },
    header: {
        subtitle: {type: String, require: false},
        description: {type: String, require: false}
    },
    showcases: [{type: Schema.Types.ObjectID}],
})

module.exports = mongoose.model("Profile", ProfileSchema);