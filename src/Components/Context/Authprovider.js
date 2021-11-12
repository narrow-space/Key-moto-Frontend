import React, { createContext } from 'react';
import Usefirebase from '../Hooks/Usefirebase';

export const Authcontext=createContext()
const Authprovider = ({children}) => {
    const allcontext = Usefirebase()
    return (
        <Authcontext.Provider value={allcontext}>
            {
                children
            }
        </Authcontext.Provider>
    );
};

export default Authprovider;