import {LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL} from '../actions/login'

const initialState = {
  isLogin: false
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_REQUEST_SUCCESS:
      if (action.data.errno) {
        return Object.assign({}, state, {
          isLogin: false
        });
      } else {
        return Object.assign({}, state, action.data, {
          isLogin: true
        });
      }
    case LOGIN_REQUEST_FAIL:
      return Object.assign({}, state, {
        isLogin: false
      });
    default:
      return state;
  }
}
