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
}