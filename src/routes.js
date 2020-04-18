import React from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
