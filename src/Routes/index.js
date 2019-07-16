// == Import : NPM
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// == Import : local
import LandingPage from 'src/pages/LandingPage';

import PrivateRoute from './PrivateRoute';

// == Composant
const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />

    {
    /*
      // == Private route check auth with bool param
      <PrivateRoute isAuth={isAuth} path="/home" component={Home} />

      // == Default route, redirects depending on authentication
      <Route render={() => (isAuth ? <Redirect to="/home" /> : <Redirect to="/signin" />)} />
    */
    }

  </Switch>
);

// == Export
export default Routes;
