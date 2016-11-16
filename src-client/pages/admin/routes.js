import React from 'react';
import {Route, IndexRedirect} from 'react-router'

import App from './containers/App';
import PageDashboard from './containers/PageDashboard';
import PageHome from './containers/PageHome';

import PageTestContainer from './containers/PageTestContainer';
import PageTestIndex from './containers/PageTestIndex';
import PageTestCounter from './containers/PageTestCounter';
import PageTestAntDesign from './containers/PageTestAntDesign';

export default <Route path="/" component={App}>
  <IndexRedirect to="index"/>
  <Route path="index" component={PageHome}/>
  <Route path="dashboard" component={PageDashboard}/>
  <Route path="test" component={PageTestContainer}>
    <IndexRedirect to="index"/>
    <Route path="index" component={PageTestIndex}/>
    <Route path="counter" component={PageTestCounter}/>
    <Route path="ant_design" component={PageTestAntDesign}/>
  </Route>
</Route>
