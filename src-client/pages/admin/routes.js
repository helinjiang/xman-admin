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

/**
 * 设置 sidebar 的菜单配置
 *
 * 如果要做权限控制，则还可以增加一个 type 属性，配合用户的分组权限控制，只有在权限范围内的菜单才展示
 * 当然，这里也可以通过后台来控制，而不是直接写在前端
 *
 * @type {[*]}
 */
export const sidebarMenuConfig = [
  {id: 'home', url: '/index', icon: 'home', title: 'Home'},
  {id: 'dashboard', url: '/dashboard', icon: 'desktop', title: 'DashBoard'},
  {
    id: 'test', url: '/test', icon: 'appstore', title: 'TEST专用', children: [
    {id:'test-index', url: '/test/index', title: 'TEST INDEX'},
    {id:'test-counter', url: '/test/counter', title: 'TEST COUNTER'},
    {id:'test-ant_design', url: '/test/ant_design', title: 'TEST Ant.Design'},
  ]
  }
];