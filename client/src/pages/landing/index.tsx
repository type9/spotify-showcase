import { useEffect, useState } from 'react';
import TextTransition, { presets } from "react-text-transition";
import { getTokenWithRedirect } from 'services/spotify';
import { SpotifyIcon } from 'assets';
import './styles.scss';

const JUMBOTRON_TEXTS = [
    "PLAYLISTS",
    "ARTISTS",
    "LISTENING STATS"
];

export const Landing = () => {
    const [displayIndex, setDisplayIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setDisplayIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return(
    <div className="Landing">
        <div className="Landing__jumbotron">
            <h1 className="">Show-off your Favorite</h1>
            <h1>
                <TextTransition 
                    text={ JUMBOTRON_TEXTS[displayIndex % JUMBOTRON_TEXTS.length] }
                    springConfig={ presets.gentle }
                    className="uiui-headline uiui-gradient-copy"
                />
            </h1>
            <h4>Customizable way to display your favorite Spotify playlists, listening stats, and more.</h4>
            <button className="uiui-button uiui-button--glow" onClick={getTokenWithRedirect} ><img src={SpotifyIcon} /> Login</button>
        </div>
    </div>
    );
}