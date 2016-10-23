import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {Router, Route, Redirect, useRouterHistory} from 'react-router';

import {createHistory} from 'history';

import App from './component/App';
import Dashboard from './component/Dashboard';

import Page from './component/page';
import PageList from './component/page_list';

let history = useRouterHistory(createHistory)({
  basename: '/admin',
  queryKey: false
});

ReactDOM.render((
  <Router history={history}>
    <Redirect from="/" to="dashboard" />
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="page" component={Page}>
        <Redirect from="/" to="list" />
        <Route path="list" component={PageList} />
      </Route>
    </Route>
  </Router>
  ),
  document.getElementById('app')
);
