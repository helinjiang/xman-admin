import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

import sidebar from './sidebar';
import user from './user';
import count from '../pages/test-counter/reducers/count';

const rootReducer = combineReducers({
  routing,
  user,
  sidebar,
  count,
});

export default rootReducer
