import { useContext } from 'react';
import { AuthContext } from './AuthContext.js';


export const useAuthContext = () => {
return useContext(AuthContext);
};