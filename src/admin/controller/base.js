'use strict';

export default class extends think.controller.base {
  /**
   * ThinkJS 支持前置操作，方法名为 __before，该方法会在具体的 Action 调用之前自动调用。
   * 如果前置操作里阻止了后续代码继续执行，则不会调用具体的 Action，这样可以提前结束请求。
   *
   * 注意这里的处理方式，由于是单页面应用，用户即使未登录，也正常将页面进行渲染，
   * 只是将登录信息透传到html页面中，然后由前端页面js来控制展示哪些内容。
   * 如果登录信息为空，则展示登录框，否则将展示正常的内容。
   */
  async __before() {
    let http = this.http;

    // 如果某些 action 不用进行前置操作处理，则在此直接 return; 即可。
    // 例如登录操作
    if (http.controller === 'user' && http.action === 'login') {
      return;
    }

    // 从 session 中获得用户信息，登录鉴权
    let userInfo = await this.session('userInfo') || {};

    // userInfo = {
    //   id: 1,
    //   name: 'helinjiang',
    //   type: 1
    // };

    // 如果session中不存在用户信息，且当前是 ajax 请求，则直接返回未登录结果即可
    let isEmptyUser = think.isEmpty(userInfo);

    if (isEmptyUser && this.isAjax()) {
      return this.fail('NOT_LOGIN');
    }

    if (!isEmptyUser) {
      userInfo.isLogin = 1;
    }

    // 设置userInfo，且如果是非 ajax 请求，则将 userInfo 传递到模版中
    this.userInfo = userInfo;
    if (!this.isAjax()) {
      this.assign('userInfo', userInfo);
    }

    console.log('__before', userInfo);
  }

  /**
   * call magic method
   * @return {} []
   */
  async __call() {
    return await this.displayAdminPage();
  }

  // async __call() {
  //   console.log('--__call--');
  //   if (this.isAjax()) {
  //     return this.fail('ACTION_NOT_FOUND');
  //   }
  //
  //   let model = this.model('options');
  //   let options = await model.getOptions();
  //
  //   //不显示具体的密钥
  //   options.two_factor_auth = !!options.two_factor_auth;
  //   options.analyze_code = escape(options.analyze_code);
  //   options.comment.name = escape(options.comment.name);
  //
  //   try {
  //     options.navigation = JSON.parse(options.navigation);
  //   } catch (e) {
  //     options.navigation = [];
  //   }
  //
  //   delete options.push_sites; //不显示推送的配置，会有安全问题
  //
  //   this.assign('options', options);
  //
  //   console.log(options);
  //
  //   return this.display('index/index');
  // }

  async displayAdminPage() {
    console.log('--displayAdminPage--');
    if (this.isAjax()) {
      return this.fail('ACTION_NOT_FOUND');
    }

    this.assign('options', {});

    return this.display('index/index');
  }
}