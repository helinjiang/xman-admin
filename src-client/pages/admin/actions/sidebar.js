export const SIDEBAR_COLLAPSE = 'SIDEBAR_COLLAPSE';
export const SIDEBAR_NO_COLLAPSE = 'SIDEBAR_NO_COLLAPSE';

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
