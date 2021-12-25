import { cloneElement } from 'react';
import { Playlist } from 'components/display';
import './styles.scss';

const Showcase = ({
    className,
    showcase,
}: {
    className: string,
    showcase: any
}) => {
    return (
        <section className={className}>
            {showcase.body.playlists.map((playlistId: string) => cloneElement(
                <Playlist
                    className={`Playlist`}
                    key={`${playlistId}`}
                    playlistId={playlistId}
                />
            ))}
        </section>
    );
}
export default Showcase;