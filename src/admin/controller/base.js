'use strict';

export default class extends think.controller.base {
  /**
   * ThinkJS 支持前置操作，方法名为 __before，该方法会在具体的 Action 调用之前自动调用。
   * 如果前置操作里阻止了后续代码继续执行，则不会调用具体的 Action，这样可以提前结束请求。
   */
  async __before() {
    let http = this.http;
    console.log('----------',http.controller,http.action);

    // 如果某些 action 不用进行处理，则在此直接 return; 即可。
    if (http.controller === 'user' && http.action === 'login') {
      return;
    }

    // 从 session 中获得用户信息，登录鉴权
    let userInfo = await this.session('userInfo') || {};
    if (think.isEmpty(userInfo)) {
      if (this.isAjax()) {
        return this.fail('NOT_LOGIN');
      } else {
        // return this.redirect("/user/login");
        console.log('--------------', userInfo);
      }
    }

    // 将 userInfo 赋值到模版中可用
    this.userInfo = userInfo;
    if (!this.isAjax()) {
      this.assign('userInfo', {id: userInfo.id, name: userInfo.name, type: userInfo.type});
    }
    console.log('--__before end--', userInfo)
  }

  /**
   * call magic method
   * @return {} []
   */
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
    console.log('--__call--');
    if (this.isAjax()) {
      return this.fail('ACTION_NOT_FOUND');
    }

    this.assign('options', {});

    return this.display('index/index');
  }
}