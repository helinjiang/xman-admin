import './index.css';

import React, {PropTypes, Component} from 'react';

import {Link} from 'react-router';
import classnames from 'classnames';

import {Menu, Icon} from 'antd';

class Sidebar extends Component {

  static propTypes = {
    menuData: PropTypes.array.isRequired,
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

  getRenderMenuItem(menuObj) {
    if (menuObj.children) {
      return (
        <Menu.SubMenu key={menuObj.id} title={<span><Icon type={menuObj.icon}/>{menuObj.title}</span>}>
          {
            menuObj.children.map((item) => {
              return this.getRenderMenuItem(item)
            })
          }
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={menuObj.id}>
          <Icon type={menuObj.icon}/>
          <span className="nav-text">
            <Link to={menuObj.url}> {menuObj.title} </Link>
          </span>
        </Menu.Item>
      )
    }
  }

  render() {
    const {collapse, menuData} = this.props,
      isShowMenu = menuData && menuData.length;

    return (
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"></div>

        {
          isShowMenu ? (
            <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
              {
                menuData.map((item) => {
                  return this.getRenderMenuItem(item)
                })
              }
            </Menu>
          ) : null
        }

        <div className="ant-aside-action" onClick={this.handleCollapseClick}>
          {collapse ? <Icon type="right"/> : <Icon type="left"/>}
        </div>
      </aside>
    );
  }
}

export default Sidebar;