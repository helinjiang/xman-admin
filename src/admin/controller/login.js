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

  /**
   * login
   */
  async loginAction() {
    let {userName, password} = this.post();

    // 通过用户名获取用户信息
    let userModel = this.model('user');
    let userInfo = await userModel.where({name: userName}).find();
    console.log('==', userInfo);

    // 校验是否存在这个用户信息
    if (think.isEmpty(userInfo)) {
      return this.fail('ACCOUNT_ERROR');
    }

    // 检测帐号是否被禁用
    if ((userInfo.status | 0) !== 1) {
      return this.fail('ACCOUNT_FORBIDDEN');
    }

    //校验密码
    if(!userModel.checkPassword(userInfo, password)){
      return this.fail('ACCOUNT_ERROR');
    }

    // 如果登录成功，则将登录信息存于 session 中
    //  await this.session('userInfo', userInfo);

    return this.success({name: userName});
  }

  /**
   * logout
   */
  async logoutAction() {
    await this.session('userInfo', '');
    return this.redirect('/');
  }
}