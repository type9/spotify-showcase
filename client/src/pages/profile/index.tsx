import { useEffect } from "react";
import { useParams } from "react-router-dom";
export const Profile = () => {
    const { profileId } = useParams();
    
    useEffect(() => {
        //TODO: get server side user info
    })

    return(
        <div></div>
    );
}