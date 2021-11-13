import React, { useState } from 'react';

import { Redirect, Route, useHistory, useLocation } from 'react-router';
import Useauth from '../../../Hooks/Useauth';


const Adminroute = ({ children, ...rest }) => {
               const history = useHistory()
               const location = useLocation()
               const redirect_uri = location.state?.from ||'/home'
                const [loading,setLoading]=useState(true)
           const {user,admin} = Useauth()
  
       if(loading){
        return setLoading(false)
          
       }
       
      
   
   
    return (
        <Route
            {...rest}
            render={({ location }) => user.email &&admin ? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
            ></Redirect>
          
            }
        >
              


        </Route>
       
    );
};

export default Adminroute ;