import Account from './account';
import styles from './Header.module.css';
function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.brand} href="/">
                    <img src="/SpotifyShowcase.svg"></img>
                </a>
                <Account />
            </nav>
        </header>
        
    );
}

export default Header;