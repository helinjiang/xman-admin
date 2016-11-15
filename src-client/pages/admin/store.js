import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';

import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import * as reducers from './reducers'

// 获得 reducer
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

// 开发工具
export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
  </DockMonitor>
);


// 创建 store
export default createStore(
  reducer,
  DevTools.instrument()
);
