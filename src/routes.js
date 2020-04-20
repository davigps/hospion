import React from 'react';
import PropTypes from 'prop-types';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Done from './pages/Done';
import Login from './pages/Login';
import SignupPj from './pages/SignupPj';
import LoginPj from './pages/LoginPj';
import LoginHosp from './pages/LoginHosp';
import Orders from './pages/Orders';
import Hospital from './pages/Hospital';
import Profile from './pages/Profile';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }),
};

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/login-pj" component={LoginPj} />
        <Route path="/signup-pj" component={SignupPj} />
        <Route path="/orders" component={Orders} />
        <Route path="/hospital" component={Hospital} />
        <Route path="/login-hospitals" component={LoginHosp} />
        <Route path="/about" component={About} />
        <Route path="/done" component={Done} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/*" component={() => <h1>Página não encontrada.</h1>} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
