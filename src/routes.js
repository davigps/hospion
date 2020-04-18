import React from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
