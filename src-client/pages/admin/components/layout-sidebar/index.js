import './index.css';

import React, {PropTypes, Component} from 'react';

import {Link} from 'react-router';
import classnames from 'classnames';

import {Menu, Icon} from 'antd';

class Sidebar extends Component {

  static propTypes = {
    collapse: PropTypes.bool.isRequired,
    collapseSidebar: PropTypes.func.isRequired,
    unCollapseSidebar: PropTypes.func.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.handleCollapseClick = this.handleCollapseClick.bind(this);
  }

  /**
   * 是否是高亮状态
   * @param  {[type]}  routeUrl [description]
   * @return {Boolean}          [description]
   */
  isActive(routeUrl) {
    return this.context.router.isActive(routeUrl);
  }

  getClassName(icon, routeUrl) {
    let active = this.isActive(routeUrl);
    return classnames({
      icon: true,
      [`icon-${icon}`]: true,
      active: active
    })
  }

  // getSubUlClassName(routeUrl){
  //   if(this.isActive(routeUrl)){
  //     return 'block';
  //   }
  //   return 'hide';
  // }
  getSubLinkClassName(routeUrl) {
    return classnames({
      active: this.isActive(routeUrl)
    })
  }

  open(routeUrl) {
    this.context.router.push(routeUrl);
  }

  handleCollapseClick() {
    if (this.props.collapse) {
      this.props.unCollapseSidebar();
    } else {
      this.props.collapseSidebar();
    }
  }

  render() {
    const {collapse} = this.props;

    return (
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"></div>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
          <Menu.Item key="user">
            <Icon type="user"/><span className="nav-text">导航一</span>
          </Menu.Item>
          <Menu.Item key="setting">
            <Icon type="setting"/><span className="nav-text">导航二</span>
          </Menu.Item>
          <Menu.Item key="laptop">
            <Icon type="laptop"/><span className="nav-text">导航三</span>
          </Menu.Item>
          <Menu.Item key="notification">
            <Icon type="notification"/><span className="nav-text">导航四</span>
          </Menu.Item>
          <Menu.Item key="folder">
            <Icon type="folder"/><span className="nav-text">导航五</span>
          </Menu.Item>
        </Menu>
        <div className="ant-aside-action" onClick={this.handleCollapseClick}>
          {collapse ? <Icon type="right"/> : <Icon type="left"/>}
        </div>
      </aside>
    );
  }
}

export default Sidebar;