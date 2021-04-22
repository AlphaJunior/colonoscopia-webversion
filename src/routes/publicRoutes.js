import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

export default function publicRoutes() {
    const loading = (
        <div className="pt-3 text-center">
          <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
      )

    const Login = React.lazy(() => import('../../src/views/pages/login/Login'));

    
    return (
        <React.Suspense fallback={loading}>
            <Route exact path="/" name="Login" render={props => <Login {...props}/>} />
        </React.Suspense>
    )
}
