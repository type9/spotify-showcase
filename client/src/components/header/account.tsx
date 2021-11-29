import {useContext, useState} from 'react';
import redirect from '../spotify/redirect';
import {AuthContext} from '../spotify/auth-context'
import styles from './Account.module.css';

function Login(){
    
    return(
        <button type="button" onClick={redirect}> Login </button>
    );
}

function MyProfile({name}:{name: string | null}){
    return(
        <div className={styles.profileButton}>{name}</div>
    );
}

function AccountButton(){
    const auth = useContext(AuthContext);
    console.log(auth);
    return auth.spotifyUser.name ? <MyProfile name={auth.spotifyUser.name} />: <Login />;
}

export default AccountButton;