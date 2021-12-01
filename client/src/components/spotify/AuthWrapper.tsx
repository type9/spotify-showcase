import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext, AuthContextType } from 'context/spotify';
import Spotify from 'spotify-web-api-js';

const API = new Spotify();
export const AuthWrapper = ({children}:{children:any}) => {
    const location = useLocation();
    const params = new URLSearchParams(location.hash);
    const localToken = localStorage.getItem('spotifyAccessToken');
    const hashToken = params.get('#access_token');
    const spotifyToken = localStorage.getItem('spotifyAccessToken') ? localStorage.getItem('spotifyAccessToken') : "";
    const [spotifyUser, setSpotifyUser] = useState<AuthContextType['spotifyUser']>({id: null, name: null});

    //these hooks check the validity of tokens and set them in the global state of the app
    useEffect(() => {
        if(hashToken){
            API.setAccessToken(hashToken);
            API.getMe()
                .then(res => {
                    if(!res.id) { localStorage.removeItem('spotifyAccessToken'); return; }
                    localStorage.setItem('spotifyAccessToken', hashToken);
                    setSpotifyUser({id: res.id, name: res.display_name ? res.display_name : "NAME_MISSING"});
                    location.hash = "";
                });
        }
    }, [hashToken]);

    useEffect(() => {
        if(localToken){
            API.setAccessToken(localToken);
            API.getMe()
                .then(res => {
                    if(!res.id) { localStorage.removeItem('spotifyAccessToken'); return; }
                    localStorage.setItem('spotifyAccessToken', localToken);
                    setSpotifyUser({id: res.id, name: res.display_name ? res.display_name : "NAME_MISSING"});
                })
        }
    }, [localToken]);

    const auth: AuthContextType = {
        spotifyToken: spotifyToken,
        spotifyUser: spotifyUser
    }

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}