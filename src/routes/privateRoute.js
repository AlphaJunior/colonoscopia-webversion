import React from "react";
import { Route, Redirect } from "react-router-dom";
import {  useAuth } from '../contexts/authContext';

function PrivateRoute({component: Component ,...rest }){

    const {currentUser} = useAuth();
    return (
            <Route name="home" 
                {...rest}
                render={(props) =>{
                    return currentUser? 
                    <Component {...props} />
                :
                <Redirect exact to="/login"/>
                    }
                }
            />
    )
}
export default PrivateRoute