import React, {useContext} from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { AuthProvider, Auth } from '../contexts/authContext';
import PublicRoutes from './publicRoutes';
import PrivateRoutes from './privateRoutes';



export default function Routes() {

    const user = useContext(Auth); 

    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    {user===null ? <PrivateRoutes/> : <PublicRoutes/>}    
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}
