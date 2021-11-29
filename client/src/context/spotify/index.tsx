import { createContext } from 'react';

export type AuthContextType = {
    spotifyToken: string | null;
    spotifyUser: {id: string | null, name: string | null};
}

export const AuthContext = createContext<AuthContextType>({
    spotifyToken: null,
    spotifyUser: {id: null, name: null}
});