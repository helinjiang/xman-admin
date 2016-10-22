'use strict';

export default class extends think.controller.base {
    /**
     * ThinkJS 支持前置操作，方法名为 __before，该方法会在具体的 Action 调用之前自动调用。
     * 如果前置操作里阻止了后续代码继续执行，则不会调用具体的 Action，这样可以提前结束请求。
     */
    async __before() {
        let http = this.http;

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
            }
        }

        // 将 userInfo 赋值到模版中可用
        this.userInfo = userInfo;
        if (!this.isAjax()) {
            this.assign('userInfo', {id: userInfo.id, name: userInfo.name, type: userInfo.type});
        }
    }
}