'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction() {

  }

  /**
   * 添加或者修改用户
   * @return {} []
   */
  saveAction() {
    this.allowMethods = 'post';

    this.rules = {}
  }

  /**
   * login
   * @return {} []
   */
  loginAction() {
    this.allowMethods = 'get,post';

    // 如果当前是 get 请求类型，则不需要做参数校验
    if (this.isGet()) {
      return;
    }

    this.rules = {
      username: {
        required: true,
        minLength: 4
      },
      password: {
        required: true,
        length: [32, 32]
      },
      factor: {
        regexp: /^\d{6}$/
      }
    }
  }
}