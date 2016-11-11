'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction() {
    //auto render template file index_index.html
    // return this.display();
    console.log('-uidemo indexAction-');
    return this.displayAdminPage();
  }

  test1Action() {
    //auto render template file index_index.html
    // return this.display();
    console.log('-uidemo test1Action-');
    return this.displayAdminPage();
  }

  test2Action() {
    //auto render template file index_index.html
    // return this.display();
    console.log('-uidemo test2Action-');
    return this.displayAdminPage();
  }
}