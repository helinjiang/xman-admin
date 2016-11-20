import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

import count from './count';
import sidebar from './sidebar';
import user from './user';

const rootReducer = combineReducers({
  count,
  sidebar,
  routing,
  user
});

export default rootReducer
