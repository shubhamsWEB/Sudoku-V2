import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Board from '../Containers/Board';
import Signin from '../Containers/Signin';
import Dashboard from '../Containers/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/board/:level" exact component={Board} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
