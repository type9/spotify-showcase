const Profile = require('../models/profile/profile');
const clientAuth = require('../spotifyclient/appauth');
const Spotify = require('spotify-web-api-node');
const S = new Spotify();

module.exports = (app) => {
    //Index
    app.post('/login', (req, res) => {
        //checks validity of spotify acess token and creates a new user if needed.
        if(!req.body.spotifyAccessToken) return res.status(401).send('missing access token');
        S.setAccessToken(req.body.spotifyAccessToken);
        S.getMe()
        .then(result => {
            if(result.statusCode !== 200) return res.status(401).send('invalid access token');
            return result.body;
        })
        .then(spotifyProfile => {
            return Profile.findOneAndUpdate(
                {'spotifyId': spotifyProfile.id},
                {spotifyId: spotifyProfile.id, spotifyProfile},
                {upsert: true, new: true}
            ).exec();
        })
        .then(() => {
            return res.status(200);
        })
        .catch(err => {
            console.log('Error syncing profile', err)
            res.status(500).send('Error syncing profile')
        })
    })

    //Get profile by con
    app.get('/u/:spotifyId', (req, res) => {
        Profile.findOne({ 'spotifyId': req.params.spotifyId }).populate('header').populate('showcases').exec()
            .then(result => {
                return res.status(200).send(result);
            })
            .catch(err => {
                console.log('No data found for ID', err);
                res.status(404).send('No data found for ID');
            });
    });
}