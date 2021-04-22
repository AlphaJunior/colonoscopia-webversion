import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

export default function publicRoutes() {

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"/>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('../containers/TheLayout'));

    return (

        <BrowserRouter>
         <React.Suspense fallback={loading}>
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
          </React.Suspense>
        </BrowserRouter>
    )
}
