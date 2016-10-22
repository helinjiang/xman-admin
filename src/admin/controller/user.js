'use strict';

import Base from './base.js';
import speakeasy from 'speakeasy';

export default class extends Base {
  /**
   * login
   * @return {} []
   */
  async loginAction(){
    //二步验证
    let model = this.model('options');
    let options = await model.getOptions();

    if(options.two_factor_auth){
      let two_factor_auth = this.post('two_factor_auth');
      let verified = speakeasy.totp.verify({
        secret: options.two_factor_auth,
        encoding: 'base32',
        token: two_factor_auth,
        window: 2
      });

      if(!verified){
        return this.fail('TWO_FACTOR_AUTH_ERROR');
      }
    }

    //校验帐号和密码
    let username = this.post('username');
    let userModel = this.model('user');
    let userInfo = await userModel.where({name: username}).find();

    if(think.isEmpty(userInfo)){
      return this.fail('ACCOUNT_ERROR');
    }

    //帐号是否被禁用，且某些帐号类型不允许登录
    if((userInfo.status | 0) !== 1 || userInfo.type === 3){
      return this.fail('ACCOUNT_FORBIDDEN');
    }

    //校验密码
    let password = this.post('password');

    if(!userModel.checkPassword(userInfo, password)){
      return this.fail('ACCOUNT_ERROR');
    }

    // 如果登录成功，则将登录信息存于 session 中
    await this.session('userInfo', userInfo);

    return this.success();
  }
  /**
   * logout
   * @return {}
   */
  async logoutAction(){
    // 退出登录，则清空 session
    await this.session('userInfo', '');

    // 强制跳转到首页
    return this.redirect('/');
  }
}
