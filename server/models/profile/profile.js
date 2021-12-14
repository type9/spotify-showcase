const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Header = require("./header");
const PlaylistShowcase = require("../showcases/PlaylistShowcase");

const ProfileSchema = new Schema({
    spotifyId: {type: String, required: true},
    spotifyProfile: {},
    mediaLinks: {
        facebook: {type: String, required: false},
        instagram: {type: String, required: false},
        twitter: {type: String, required: false},
    },
    header: {type: Schema.Types.ObjectID, required: false, ref: 'Header'},
    showcases: [{type: Schema.Types.ObjectID, required: true}],
})

//Creates default header and showcase
ProfileSchema.post('findOneAndUpdate', async function(result){
    if(!result.header) {
        const newHeader = await Header.create({});
        const newShowcase = await PlaylistShowcase.create({});
        result.header = newHeader._id;
        result.showcases = [newShowcase._id];
    }
    await result.save();
});

module.exports = mongoose.model("Profile", ProfileSchema);