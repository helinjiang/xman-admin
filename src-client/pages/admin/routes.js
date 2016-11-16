import React from 'react';
import {Route, IndexRedirect} from 'react-router'

import App from './components/App';
import Dashboard from './components/dashboard';
import Index from './components/index';

import UIDemo from './components/ui-demo/Container';
import UIDemoIndex from './components/ui-demo/index';
import UIDemoTest1 from './components/ui-demo/test1';
import UIDemoTest2 from './components/ui-demo/test2';

export default <Route path="/" component={App}>
  <IndexRedirect to="/index"/>
  <Route path="index" component={Index}/>
  <Route path="dashboard" component={Dashboard}/>
  <Route path="uidemo" component={UIDemo}>
    <IndexRedirect to="/index"/>
    <Route path="index" component={UIDemoIndex}/>
    <Route path="test1" component={UIDemoTest1}/>
    <Route path="test2" component={UIDemoTest2}/>
  </Route>
</Route>

//         <Route path="/" component={App}>
//           <IndexRoute component={Home}/>
//           <Route path="foo" component={Foo}/>
//           <Route path="bar" component={Bar}/>
//         </Route>