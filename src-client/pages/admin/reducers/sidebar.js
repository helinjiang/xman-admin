import {SIDEBAR_COLLAPSE, SIDEBAR_NO_COLLAPSE, LOAD_MENU_SUCCESS} from '../actions/sidebar'

const initialState = {
  collapse: false,
  menuData: {},
  menuArr: []
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_COLLAPSE:
      return Object.assign({}, state, {
        collapse: true
      });
    case SIDEBAR_NO_COLLAPSE:
      return Object.assign({}, state, {
        collapse: false
      });
    case LOAD_MENU_SUCCESS:
      return Object.assign({}, state, {
        menuData: action.data,
        menuArr: changToArray(action.data)
      });
    default:
      return state;
  }
}

function changToArray(data) {
  const _getMenu = (curItem, arr = []) => {
    if (curItem.children) {
      curItem.children.forEach((childItem) => {
        childItem.parent = curItem;
        _getMenu(childItem, arr);
      });
    } else if (!curItem.hide) {
      arr.push(curItem);
    }
  };

  return _getMenu(data);
}