const Profile = require('../models/profile');

module.exports = (app) => {
    //INDEX - get profile by ID
    app.get('/:spotifyId', (req, res) => {
        Profile.findOne({ 'spotifyId': req.params.spotifyId }, (err, profile) => {
            if (err) return handleError(err);
            res.send(profile);
        });
    });
}