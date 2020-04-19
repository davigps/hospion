import React from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignupPj from './pages/SignupPj';
import LoginPj from './pages/LoginPj';

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/login-pj" component={LoginPj} />
        <Route path="/signup-pj" component={SignupPj} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
