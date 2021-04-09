import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Showcase from '../containers/Showcase';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/query/:page" component={Showcase} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
