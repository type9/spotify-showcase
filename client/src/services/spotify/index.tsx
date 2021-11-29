require('dotenv').config();

//SPOTIFY API CONSTANTS
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID ? process.env.REACT_APP_SPOTIFY_CLIENT_ID : '';
const AUTHORIZE_URL = process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL ? process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL : '';
const REDIRECT_URL = process.env.REACT_APP_SPOTIFY_REDIRECT_URL + window.location.pathname;
const SCOPE = process.env.REACT_APP_SPOTIFY_AUTHORIZATION_SCOPE ? process.env.REACT_APP_SPOTIFY_AUTHORIZATION_SCOPE : '';

export const getTokenWithRedirect = () => {
    const generateRandomString = function(length: number) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    const STATE = generateRandomString(16);

    let url = AUTHORIZE_URL;
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(CLIENT_ID);
        url += '&scope=' + encodeURIComponent(SCOPE);
        url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URL);
        url += '&state=' + encodeURIComponent(STATE);
    
    window.location.href = url  
}