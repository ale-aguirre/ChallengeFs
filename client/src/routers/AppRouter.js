import React, { useContext } from 'react'
import { Switch,Route,BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DasboardRoutes } from './DasboardRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    return (
      <Router>
          <div>
              
              <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <PrivateRoute path="/" isAuthenticated={user.logged} component={DasboardRoutes} />
              </Switch>
          </div>
      </Router>
    )
}
