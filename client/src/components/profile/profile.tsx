import styles from './profile.module.css';
import { ProfileContext } from './profile-context';
import { useEffect, useState } from 'react';

export default function Profile(spotifyId:string) {
    const profileUrl = `/u/${spotifyId}`
    const [profile, setProfile] = useState(undefined);
    const [header, setHeader] = useState(null);
    const [showcases, setShowcases] = useState(null);
    const [sidebar, setSidebar] = useState(null);

    useEffect(() => {
        fetch(profileUrl)
        .then(results => {return results.json()})
        .then(data => setProfile(data));
    }, [profile]);

    return(
        <section className={styles.profile}>
            <header className={styles.header}></header>
            <section className={styles.content}>
                <section className={styles.showcases}></section>
                <aside className={styles.sidebar}></aside>
            </section>
        </section>
    );
}