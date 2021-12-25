import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import parse from 'html-react-parser';
import './styles.scss';

var S = new SpotifyWebApi();

export const Playlist = ({className, playlistId}: {className: string, playlistId: string}) => {
    const [playlist, setPlaylist] = useState<any>(null);

    useEffect(() => {
        S.getPlaylist(playlistId)
        .then(playlist => {
            setPlaylist(playlist);
        })
    }, [playlistId])

    if(!playlist) return <div></div>;
    return(
        <a className={className} target='_blank' href={playlist.external_urls.spotify}>
            <div className="Playlist__overlay">
                <h4 className="Playlist__description">{parse(playlist.description)}</h4>
            </div>
            <div className="Playlist__name__wrapper" >
                <h3 className="Playlist__name">{parse(playlist.name)}</h3>
            </div>
            <img className="Playlist__image" src={playlist.images[0]?.url}/>
        </a>
    );
}