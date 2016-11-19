import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

import count from './count'
import sidebar from './sidebar'

const rootReducer = combineReducers({
  count,
  sidebar,
  routing
});

export default rootReducer
