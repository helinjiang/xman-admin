import './index.css';

import React, {PropTypes, Component} from 'react';

import {Link} from 'react-router';
import classnames from 'classnames';

import {Menu, Icon} from 'antd';

class LayoutSidebar extends Component {

  static propTypes = {
    menuData: PropTypes.object.isRequired,
    menuArr: PropTypes.array.isRequired,
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

  getDefaultSelectedKeys2(menuData) {
    let routeMap = {},
      arr = [];

    const _getMenu = (menuObj) => {
      if (menuObj.children) {
        menuObj.children.forEach((item) => {
          item.parent = menuObj;
          _getMenu(item);
        });
      } else {
        routeMap[menuObj.url] = menuObj;
      }
    };

    menuData.forEach((item) => {
      _getMenu(item);
    });

    Object.keys(routeMap).forEach((key) => {
      let cur = routeMap[key];
      if (this.isActive(cur.url)) {
        arr.push(cur.id);
      }
    });

    console.log('---------------2', arr);
    return arr;
  }

  getSelectedKeys() {
    let menuArr = this.props.menuArr,
      arr = [];

    menuArr.forEach((curMenu) => {
      if (this.isActive(curMenu.url)) {
        arr.push(curMenu.id);
      }
    });

    console.log('---------------', arr);
    return arr;
  }

  getDefaultOpenKeys() {
    return [];
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
    } else if(!menuObj.hide) {
      return (
        <Menu.Item key={menuObj.id}>
          <Icon type={menuObj.icon}/>
          <span className="nav-text">
            <Link to={menuObj.url}> {menuObj.title} {this.isActive(menuObj.url)}</Link>
          </span>
        </Menu.Item>
      )
    }
  }

  render() {
    const {collapse, menuData} = this.props,
      isShowMenu = menuData && Object.keys(menuData).length,
      selectedKeys = this.getSelectedKeys(),
      defaultOpenKeys = this.getDefaultOpenKeys();
console.log('selectedKeys', selectedKeys);
    return (
      <aside className="ant-layout-sider">

        <div className="ant-layout-logo"></div>

        {
          isShowMenu ? (
            <Menu mode="inline" theme="dark"
                  selectedKeys={selectedKeys}
                  defaultOpenKeys={defaultOpenKeys}>
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

export default LayoutSidebar;