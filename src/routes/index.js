import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/authContext';
import PrivateRoute from './privateRoute';
import '../scss/style.scss';

export default function Routes() {

    const loading = (
        <div className="pt-3 text-center">
          <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
      )

// Containers
const Login = React.lazy(() => import('../../src/views/pages/login/Login'));
const TheLayout = React.lazy(() => import('../containers/TheLayout'));
const CoreUIIcons = React.lazy(() => import('../views/icons/coreui-icons/CoreUIIcons'));

    return (
        <BrowserRouter>
            <React.Suspense fallback={loading}>
                <AuthProvider>
                        <Switch>
                            <PrivateRoute path="/home" component={TheLayout}/>
                            <Route exact path="/" name="Login" render={props => <Login {...props}/>} />
                        </Switch>
                </AuthProvider>
            </React.Suspense>
        </BrowserRouter>          
    ) 
}
