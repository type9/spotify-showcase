import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { AuthContext, AuthContextType } from 'context/spotify';
import Spotify from 'spotify-web-api-js';

const API = new Spotify();
export const AuthWrapper = ({children}:{children:any}) => {
    const location = useLocation();
    const params = new URLSearchParams(location.hash);
    const [spotifyToken, setSpotifyToken] = useState<AuthContextType['spotifyToken']>(null);
    const [spotifyUser, setSpotifyUser] = useState<AuthContextType['spotifyUser']>({id: null, name: null});
    
    const token = params.get('#access_token');

    useEffect(() => {
        if(!params.has('#access_token')) return;
        API.setAccessToken(params.get('#access_token'));
        API.getMe()
            .then((res) => {
                setSpotifyToken(API.getAccessToken());
                setSpotifyUser({
                    id: res.id ? res.id : null,
                    name: res.display_name ? res.display_name : null
                });
            });
    }, [token]);

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