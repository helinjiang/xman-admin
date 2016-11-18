import './index.css';

import React, {PropTypes, Component} from 'react';

import {Link} from 'react-router';
import classnames from 'classnames';

import {Menu, Icon} from 'antd';

class LayoutSidebar extends Component {

  static propTypes = {
    menuData: PropTypes.object.isRequired,
    menuDataMap: PropTypes.object.isRequired,
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
    console.log('=isActive=', routeUrl);
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

  getDefaultSelectedKeys() {
    let menuDataMap = this.props.menuDataMap,
      arr = [];

    Object.keys(menuDataMap).forEach((id) => {
      let curMenu = menuDataMap[id];
      if (curMenu && this.isActive(curMenu.url)) {
        arr.push(id);
      }
    });

    return arr;
  }

  getDefaultOpenKeys(selectedKeys) {
    let menuDataMap = this.props.menuDataMap,
      arr = [];

    const _getKeys = (id) => {
      let curItem = menuDataMap[id];

      if (curItem && curItem.parent && curItem.parent.id !== 'root') {
        arr.push(curItem.parent.id);

        if (curItem.parent.parent) {
          _getKeys(curItem.parent.id);
        }
      }
    };

    selectedKeys.forEach((id) => {
      _getKeys(id);
    });

    return arr;
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
    } else if (!menuObj.hide) {
      return (
        <Menu.Item key={menuObj.id}>
          <Icon type={menuObj.icon}/>
          <span className="nav-text">
            <Link to={menuObj.url}> {menuObj.title}</Link>
          </span>
        </Menu.Item>
      )
    }
  }

  render() {
    const {collapse, menuData} = this.props,
      isShowMenu = menuData && Object.keys(menuData).length,
      defaultSelectedKeys = this.getDefaultSelectedKeys(),
      defaultOpenKeys = this.getDefaultOpenKeys(defaultSelectedKeys);

    return (
      <aside className="ant-layout-sider">

        <div className="ant-layout-logo"></div>

        {
          isShowMenu ? (
            <Menu mode="inline" theme="dark"
                  defaultSelectedKeys={defaultSelectedKeys}
                  defaultOpenKeys={defaultOpenKeys}>
              {
                menuData.children.map((item) => {
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

export default LayoutSidebar;