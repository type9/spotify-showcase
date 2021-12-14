import { Link } from 'react-router-dom';
import 'styles.scss';

export const Playlist = ({className, playlist}: {className: string, playlist: any}) => {
    return(
        <Link className={className} to={playlist.external_urls.spotify}>
            <div className="Playlist__overlay">
                <h4 className="Playlist__description">{playlist.description}</h4>
                <h3 className="Playlist__name">{playlist.name}</h3>
            </div>
            <img className="Playlist__image" src={playlist.images[1].url}/>
        </Link>
    );
}