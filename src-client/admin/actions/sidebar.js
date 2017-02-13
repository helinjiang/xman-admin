export const SIDEBAR_COLLAPSE = 'SIDEBAR_COLLAPSE';
export const SIDEBAR_NO_COLLAPSE = 'SIDEBAR_NO_COLLAPSE';
export const LOAD_MENU_SUCCESS = 'LOAD_MENU_SUCCESS';

export function collapseSidebar() {
  return {
    type: SIDEBAR_COLLAPSE
  }
}

export function unCollapseSidebar() {
  return {
    type: SIDEBAR_NO_COLLAPSE
  }
}

export function loadMenu() {
  return {
    type: LOAD_MENU_SUCCESS,
    data: {
      id: 'root',
      hide: true,
      children: [
        {
          id: 'home',
          url: '/index',
          icon: 'home',
          title: 'Home'
        },
        {
          id: 'dashboard',
          url: '/dashboard',
          icon: 'desktop',
          title: 'DashBoard'
        },
        {
          id: 'test',
          url: '/test',
          icon: 'appstore',
          title: 'TEST专用',
          children: [
            {
              id: 'test-index',
              url: '/test/index',
              title: 'TEST INDEX'
            },
            {
              id: 'test-counter',
              url: '/test/counter',
              title: 'TEST COUNTER'
            },
            {
              id: 'test-ant_design',
              url: '/test/ant_design',
              title: 'TEST Ant.Design'
            },
          ]
        }
      ]
    }
  }
}
