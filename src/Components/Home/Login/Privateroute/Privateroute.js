import React from 'react';

import { Redirect, Route } from 'react-router';
import Useauth from '../../../Hooks/Useauth';

const Privateroute = ({ children, ...rest }) => {
    const {user,isloading} = Useauth()
    if(isloading){
        return "Loading...."
    }
    
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default Privateroute;