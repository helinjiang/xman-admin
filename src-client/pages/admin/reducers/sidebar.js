import {SIDEBAR_COLLAPSE, SIDEBAR_NO_COLLAPSE} from '../actions/sidebar'

const initialState = {
  collapse: false
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_COLLAPSE:
      return {
        collapse: true
      };
    case SIDEBAR_NO_COLLAPSE:
      return {
        collapse: false
      };
    default:
      return state;
  }
}
