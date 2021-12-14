import './styles.scss';
const Header = ({
    className,
    user,
    header
}: {
    className: string,
    user: any,
    header: any
}) => {
    return (
        <header className={className}>
            <div className="header__left">
                <img src={user.spotifyProfile.images[0].url}></img>
            </div>
            <div className="header__right">
                <div className="header__titles">
                    <h1 className="header__displayName">{user.spotifyProfile.display_name.toUpperCase()}</h1>
                    <h2 className="header__subtitle">{header?.subtitle}</h2>
                </div>
                <h4 className="header__description">{header?.description}</h4>
            </div>
        </header>
    );
}
export default Header;