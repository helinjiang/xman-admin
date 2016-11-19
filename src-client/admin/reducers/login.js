import {LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL} from '../actions/login'

const initialState = {
  user: {}
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        user: action.data
      });
    case LOGIN_REQUEST_FAIL:
      return state;
    default:
      return state;
  }
}
