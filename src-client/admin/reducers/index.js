import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

import count from './count';
import sidebar from './sidebar';
import login from './login';

const rootReducer = combineReducers({
  count,
  sidebar,
  routing,
  login
});

export default rootReducer
