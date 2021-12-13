import { Link } from 'react-router-dom';
import { AccountButton }from 'components/spotify/AccountButton';
import { SpotifyShowcaseBrand } from 'assets';
import classnames from 'classnames';
import './styles.scss'

export const Header = ({
    className
}: {
    className:string
}) => {
    return(
        <header className={className}>
            <div className={classnames(className, 'header__left')}></div>
            <div className={classnames(className, 'header__middle')}>
                <Link to="/">
                    <img src={SpotifyShowcaseBrand}></img>
                </Link>
            </div>
            <div className={classnames(className, 'header__right')}>
                <AccountButton />
            </div>
        </header>
    );
}