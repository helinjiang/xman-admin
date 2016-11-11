import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {Router, Route, Redirect, useRouterHistory} from 'react-router';

import {createHistory} from 'history';

import App from './component/App';
import Dashboard from './component/page-dashboard';
import Index from './component/page-index';

import UIDemo from './component/page-ui-demo';
import UIDemoMain from './component/ui-demo-main';

let history = useRouterHistory(createHistory)({
  basename: '/admin',
  queryKey: false
});

ReactDOM.render((
    <Router history={history}>
      <Redirect from="/" to="index"/>
      <Route path="/" component={App}>
        <Route path="index" component={Index}/>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="uidemo" component={UIDemo}>
          <Redirect from="/" to="main" />
          <Route path="main" component={UIDemoMain} />
        </Route>
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
