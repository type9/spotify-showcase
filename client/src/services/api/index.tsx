require('dotenv').config();
const axios = require('axios').default;

const API_URL = process.env.REACT_APP_API_URL;

const END_POINTS = {
  login: '/login',
  user: '/u'
};

export const syncUserWithApi = (payload:any) => 
  axios.post(`${API_URL}${END_POINTS['login']}`, {
    spotifyAccessToken: payload.spotifyAccessToken
  })
  .then((response:any) => {
    console.log(response);
  })
  .catch((error:any) => {
    console.log(error);
  });

export const getUser = (payload:any) => 
  axios.get(`${API_URL}${END_POINTS['user']}/${payload.spotifyId}`)
  .catch((error:any) => {
    console.log(error);
  });
