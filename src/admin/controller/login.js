'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction() {
    return this.displayAdminPage();
  }

  async loginAction() {
    let {userName, password} = this.post();
    console.log(userName, password);

    // 如果登录成功，则将登录信息存于 session 中
    await this.session('userInfo', {name: userName});

    return this.success({name: userName, password: password});
  }
}