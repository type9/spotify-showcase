import { useEffect, useState, Suspense, createElement } from "react";
import { useParams } from "react-router-dom";
import { headerIndex } from 'components/profile/headers';
import { showcaseIndex } from 'components/profile/showcases';
import { getUser } from 'services/api';
import { defaultProfile } from './constants';
import './styles.scss';

export const Profile = () => {
    const { profileId } = useParams();
    const [user, setUser] = useState<any>(null);
    const [header, setHeader] = useState(defaultProfile.header)
    
    const renderHeader = () => {
        const Header = headerIndex[user.header.variantId];
        return (
            <Header className={`Profile__header`} user={user} header={user.header}/>
        )
    }
    
    const renderShowcases = () => {
        return user.showcases.map((showcase: any) => {
            const Showcase = showcaseIndex[showcase.variantId];
            return createElement(Showcase, 
                {
                    className: `Profile__showcase showcaseId__${showcase._id}`,
                    showcase,
                    key: `Showcase__${showcase._id}`
                }
            );
        });
    }

    useEffect(() => {
        getUser({ spotifyId: profileId })
        .then((result:any) => {
            console.log(result.data)
            setUser(result.data);
        })
    }, [profileId])

    if(!user) return <div>User has not been initialized</div>;

    return(
        <article className="Profile">
            <Suspense fallback={<div>Loading....</div>}>
                {renderHeader()}
            </Suspense>
            <div className='Showcases'>
                <Suspense fallback={<div>Loading....</div>}>
                    {renderShowcases()}
                </Suspense>
            </div>
        </article>
    );
}