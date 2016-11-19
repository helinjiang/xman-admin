import React from 'react';
import {Route, IndexRedirect} from 'react-router'

import App from './containers/app';

import PageLogin from './pages/login';

import PageDashboard from './pages/dashboard';
import PageHome from './pages/home';

import PageTestContainer from './pages/test/container';
import PageTestIndex from './pages/test';
import PageTestCounter from './pages/test-counter';
import PageTestAntDesign from './pages/test-ant_design';

export default <Route path="/" component={App}>
  <IndexRedirect to="index"/>
  <Route path="index" component={PageHome}/>
  <Route path="login" component={PageLogin}/>
  <Route path="dashboard" component={PageDashboard}/>
  <Route path="test" component={PageTestContainer}>
    <IndexRedirect to="index"/>
    <Route path="index" component={PageTestIndex}/>
    <Route path="counter" component={PageTestCounter}/>
    <Route path="ant_design" component={PageTestAntDesign}/>
  </Route>
</Route>