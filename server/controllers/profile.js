const Profile = require('../models/profile');
const clientAuth = require('../spotifyclient/appauth');

module.exports = (app) => {
    //Index
    app.get('/', (req, res) => {
        res.send('Welcome to SpotifyShowcase');
    })
    //Get profile by ID
    app.get('/u/:spotifyId', (req, res) => {
        Profile.findOne({ 'spotifyId': req.params.spotifyId })
        .then(profile => {
            res.send(profile);
        }).catch(err => console.log(err.message));
    });
}