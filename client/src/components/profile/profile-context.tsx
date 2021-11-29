import { createContext } from 'react';

export type ProfileContextType = {
    profile: any;
    setProfile: (data: any) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
    profile: null,
    setProfile: (data:any) => console.warn('No Profile Provider')
});