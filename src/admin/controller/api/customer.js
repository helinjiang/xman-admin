'use strict';

import Base from './base.js';

/**
 * rest controller
 * @type {Class}
 */
export default class extends Base {
  /**
   * get
   * @return {[type]} [description]
   */
  async getAction(self) {
    let result;

    // 如果传递了id，拉取一条记录，否则拉取列表
    if (this.id) {
      result = await this.modelInstance.where({id: this.id}).find();
    } else {
      result = await this.modelInstance.select();
    }

    console.log('-=-=-=', result);

    return this.success(result);
  }
}