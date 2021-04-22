import React, { Component } from 'react';
import './scss/style.scss';
import Routes from './routes/index.js';

// Containers
//const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
//const Login = React.lazy(() => import('./views/pages/login/Login'));
//const Register = React.lazy(() => import('./views/pages/register/Register'));
//const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
//const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <React.Fragment>
          <Routes/>
      </React.Fragment>
       
    
      
       /*
        
        <React.Fragment>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </React.Fragment>
      */

    ); 
      
    
    
  }
}

export default App;
