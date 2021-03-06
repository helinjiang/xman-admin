'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * 对应的URL： admin/test/index，首页
   *
   * @return {Promise} []
   */
  indexAction(){
    return this.displayAdminPage();
  }

  /**
   * counter action
   * 对应的URL： admin/test/counter，测试经典的计数器
   *
   * @return {Promise} []
   */
  counterAction(){
    return this.displayAdminPage();
  }

  /**
   * antDesign action
   * 对应的URL： admin/test/ant_design，测试Ant.Design
   *
   * @return {Promise} []
   */
  antDesignAction(){
    return this.displayAdminPage();
  }
}