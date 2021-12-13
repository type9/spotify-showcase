import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { getTokenWithRedirect } from 'services/spotify';
import { AuthContext } from 'context/spotify';

const Login = () => {
    return(
        <button className="text-button" type="button" onClick={getTokenWithRedirect}> Login </button>
    );
}

const MyProfile = ({name, id}:{name: string | null, id: string | null}) => {
    return(
        <Link to={`/${id}`}><button className="text-button" type="button">{name}</button></Link>
    );
}

export const AccountButton = () => {
    const auth = useContext(AuthContext);
    console.log(auth);
    return auth.spotifyUser.name ? <MyProfile name={auth.spotifyUser.name} id={auth.spotifyUser.id} />: <Login />;
}