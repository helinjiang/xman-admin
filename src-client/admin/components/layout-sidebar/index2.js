import React from 'react';

import {Link} from 'react-router';
import classnames from 'classnames';

class Sidebar extends React.Component {

  constructor(props, context) {
    super(props, context);

    console.log('==sidebar.js== constructor');

    this.state = {
      routes: [
        {url: '/index', icon: 'home', title: 'Home'},
        {url: '/dashboard', icon: 'home', title: 'DashBoard'},
        {
          url: '/test', icon: 'topic', title: 'TEST专用', children: [
          {url: '/test/index', title: 'TEST INDEX'},
          {url: '/test/counter', title: 'TEST COUNTER'},
          {url: '/test/ant_design', title: 'TEST Ant.Design'},
        ]
        }
      ]
    }
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

  render() {
    let routes = this.state.routes;
    let userType = SysConfig.userInfo.type | 0;
    routes = routes.filter(item => {
      if (!item.type) {
        return true;
      }
      if (userType <= item.type) {
        return true;
      }
    });
    return (
      <div className="fk-side ps-container" id="fk-side">
        <div className="mod">
          <div className="mod-logo">
            <h1><a href="/">{SysConfig.options.title}</a></h1>
          </div>
        </div>
        <ul className="mod-bar" style={{marginTop: 10}}>
          <input type="hidden" id="hide_values" value="0"/>
          {routes.map((route, i) =>
            <li key={i}>
              {route.children ? <a onClick={this.open.bind(this, route.children && route.children[0].url || route.url)}
                                   className={this.getClassName(route.icon, route.url)}><span>{route.title}</span></a>
                :
                <Link to={route.url}
                      onClick={this.open.bind(this, route.children && route.children[0].url || route.url)}
                      className={this.getClassName(route.icon, route.url)}>
                  <span>{route.title}</span>
                </Link>
              }
              {route.children ?
                <ul style={{height: 49 * (this.isActive(route.url) ? route.children.length : 0)}}>
                  {route.children.map((child, j) =>
                    <li key={j}>
                      <Link to={child.url} onClick={this.open.bind(this, child.url)}
                            className={this.getSubLinkClassName(child.url)}>
                        <span>{child.title}</span>
                      </Link>
                    </li>
                  )}
                </ul>
                : null}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

Sidebar.contextTypes = {
  router: React.PropTypes.object
};

export default Sidebar;