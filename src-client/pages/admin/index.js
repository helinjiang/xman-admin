import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import {Router, Route, IndexRedirect, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

import App from './components/App';
import Dashboard from './components/page-dashboard';
import Index from './components/page-index';

import UIDemo from './components/page-ui-demo';
import UIDemoIndex from './components/page-ui-demo/page-index';
import UIDemoTest1 from './components/page-ui-demo/page-test1';
import UIDemoTest2 from './components/page-ui-demo/page-test2';

let history = useRouterHistory(createHistory)({
  basename: '/admin',
  queryKey: false
});
console.log('nnnnnnnnnnnnnnnnnnnnn')
ReactDOM.render((
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/index" />
        <Route path="index" component={Index}/>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="uidemo" component={UIDemo}>
          <IndexRedirect to="/index" />
          <Route path="index" component={UIDemoIndex} />
          <Route path="test1" component={UIDemoTest1}/>
          <Route path="test2" component={UIDemoTest2}/>
        </Route>
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
