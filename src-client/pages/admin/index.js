import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import {Router, Route, IndexRedirect, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

import App from './components/App';
import Dashboard from './components/dashboard';
import Index from './components/index';

import UIDemo from './components/ui-demo/Container';
import UIDemoIndex from './components/ui-demo/index';
import UIDemoTest1 from './components/ui-demo/test1';
import UIDemoTest2 from './components/ui-demo/test2';

let history = useRouterHistory(createHistory)({
  basename: '/admin',
  queryKey: false
});

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
