import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuth ? <Component {...props} /> : <Redirect to="/signin" />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.string.isRequired,
};

export default PrivateRoute;
