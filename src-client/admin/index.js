import './index.less'

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import {createHistory} from 'history';
import {useRouterHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import Root from './containers/Root'
import configureStore from './store/configureStore'

// ===================================================================
// 1. 创建 store
// ===================================================================
const store = configureStore(window.__initialState);

// ===================================================================
// 2. 创建 history
// ===================================================================

// 使用 history 组件来扩展，变更路由的相对根目录
// 如果不需要，则直接使用 react-router 中的 browserHistory 即可
const browserHistoryByCreate = useRouterHistory(createHistory)({
  basename: '/admin',
  queryKey: false
});

// 使用 react-router-redux 中的 syncHistoryWithStore 方法来连接 react-router 和 redux
const history = syncHistoryWithStore(browserHistoryByCreate, store);

// ===================================================================
// 3. 创建 routes
// ===================================================================

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./containers/app'),
    childRoutes: [
      require('./pages/dashboard'),
      require('./pages/home')
    ]
  }]
};

// ===================================================================
// 3. ReactDOM 渲染
// ===================================================================
ReactDOM.render(
  <Root store={store} history={history} routes={rootRoute}/>,
  document.getElementById('app')
);
