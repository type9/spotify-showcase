const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templates = require('../showcasetemplates');

const ShowcaseSchema = new Schema({
    title: {type: String, required: false},
    description: {type: String, required: false},
    body: {type: Schema.Types.ObjectId, refPath: 'template'},
    variantId: {type: String, default: 0, required: true},
    template: {
        type: String,
        required: true,
        default: 'playlistwall',
        enum: [
            'playlistwall',
        ]
    }
});

//creates body and assigns id from template value
ShowcaseSchema.post('save', async function() {
    console.log(this);
    if(this.body) return;
    const newBody = await templates[this.template].create({});
    this.body = newBody._id;
    await this.save();
});

//removes the object referenced by body after deletion
ShowcaseSchema.post('remove', next => {
    templates[this.template].findByIdAndRemove(this.body);
    next();
})

module.exports = mongoose.model('Showcase', ShowcaseSchema);