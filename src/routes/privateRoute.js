import React from "react";
import { Route, Redirect } from "react-router-dom";
import {  useAuth } from '../contexts/authContext';

function PrivateRoute({component: Component ,...rest }){

    const {currentUser} = useAuth();
    return (
            <Route name="home" 
                {...rest}
                render={(props) =>{
                    console.log(currentUser)
                    return currentUser? 
                    <Component {...props} />
                :
                <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
                    }
                }
            />
    )
}
export default PrivateRoute