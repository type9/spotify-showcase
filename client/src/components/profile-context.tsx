import userEvent from '@testing-library/user-event';
import { createContext } from 'react';

export type ProfileContextType = {
    data: any;
    setUser: (data: any) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
    data: null,
    setUser: (data:any) => console.warn('No Profile Provider')
});