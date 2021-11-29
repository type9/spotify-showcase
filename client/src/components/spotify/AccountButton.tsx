import { useContext } from 'react';
import { getTokenWithRedirect } from 'services';
import { AuthContext } from 'context/spotify';

const Login = () => {
    return(
        <button className="text-button" type="button" onClick={getTokenWithRedirect}> Login </button>
    );
}

const MyProfile = ({name}:{name: string | null}) => {
    return(
        <button className="text-button" type="button">{name}</button>
    );
}

export const AccountButton = () => {
    const auth = useContext(AuthContext);
    console.log(auth);
    return auth.spotifyUser.name ? <MyProfile name={auth.spotifyUser.name} />: <Login />;
}