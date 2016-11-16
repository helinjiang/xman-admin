import React from 'react';
import {Route, IndexRedirect} from 'react-router'

import App from './containers/App';
import PageDashboard from './containers/PageDashboard';
import PageHome from './containers/PageHome';

import PageUIDemoContainer from './containers/PageUIDemoContainer';
import PageUIDemoIndex from './containers/PageUIDemoIndex';
import PageUIDemoTest1 from './containers/PageUIDemoTest1';
import PageUIDemoTest2 from './containers/PageUIDemoTest2';

export default <Route path="/" component={App}>
  <IndexRedirect to="index"/>
  <Route path="index" component={PageHome}/>
  <Route path="dashboard" component={PageDashboard}/>
  <Route path="uidemo" component={PageUIDemoContainer}>
    <IndexRedirect to="index"/>
    <Route path="index" component={PageUIDemoIndex}/>
    <Route path="test1" component={PageUIDemoTest1}/>
    <Route path="test2" component={PageUIDemoTest2}/>
  </Route>
</Route>
