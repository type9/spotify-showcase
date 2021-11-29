const request = require('request');
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': `Basic ${client_id}:${client_secret}`
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

const getToken = request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      return body.access_token;
    }
});

const useToken = (token) => {
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      return body;
    });
}

module.export = {getToken, useToken};