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
    console.log(userName, password);

    //校验帐号和密码
    let userModel = this.model('admin');
    let userInfo = await userModel.where({name: userName}).find();
    console.log('==', userInfo);

    if(think.isEmpty(userInfo)){
      return this.fail('ACCOUNT_ERROR');
    }

    // 如果登录成功，则将登录信息存于 session 中
    // await this.session('userInfo', {name: userName});

    return this.success({name: userName, password: password,userInfo:userInfo});
  }

  /**
   * logout
   */
  async logoutAction() {
    await this.session('userInfo', '');
    return this.redirect('/');
  }
}