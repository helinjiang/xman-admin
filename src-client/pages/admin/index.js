import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import 'babel-polyfill';

import {createHistory} from 'history';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import store, {DevTools} from './store';

import {App, Home, Foo, Bar} from './components';

// 使用 history 组件来扩展，变更路由的相对根目录
// 如果不需要，则直接使用 react-router 中的 browserHistory 即可
let browserHistoryByCreate = useRouterHistory(createHistory)({
  basename: '/admin',
  queryKey: false
});

// 使用 react-router-redux 中的 syncHistoryWithStore 方法来连接 react-router 和 redux
const history = syncHistoryWithStore(browserHistoryByCreate, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)

// import App from './components/App';
// import Dashboard from './components/dashboard';
// import Index from './components/index';
//
// import UIDemo from './components/ui-demo/Container';
// import UIDemoIndex from './components/ui-demo/index';
// import UIDemoTest1 from './components/ui-demo/test1';
// import UIDemoTest2 from './components/ui-demo/test2';

// let history = useRouterHistory(createHistory)({
//   basename: '/admin',
//   queryKey: false
// });
//
// ReactDOM.render((
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <IndexRedirect to="/index" />
//         <Route path="index" component={Index}/>
//         <Route path="dashboard" component={Dashboard}/>
//         <Route path="uidemo" component={UIDemo}>
//           <IndexRedirect to="/index" />
//           <Route path="index" component={UIDemoIndex} />
//           <Route path="test1" component={UIDemoTest1}/>
//           <Route path="test2" component={UIDemoTest2}/>
//         </Route>
//       </Route>
//     </Router>
//   ),
//   document.getElementById('app')
// );
