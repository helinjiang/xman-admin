import {CALL_API} from 'common/middleware/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAIL = 'LOGIN_REQUEST_FAIL';

const fetchLogin = (userName, password) => ({
  [CALL_API]: {
    types: [
      LOGIN_REQUEST,
      LOGIN_REQUEST_SUCCESS,
      LOGIN_REQUEST_FAIL
    ],
    url: `/login/login`,
    type: 'POST',
    data: {
      userName,
      password
    }
  }
});

export const loadLogin = (userName, password) => (dispatch, getState) => {
  return dispatch(fetchLogin(userName, password));
};