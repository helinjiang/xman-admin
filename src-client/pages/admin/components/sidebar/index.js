import './index.css';

import React, {Component} from 'react';

import {Link} from 'react-router';
import classnames from 'classnames';

import {Menu, Breadcrumb, Icon} from 'antd';

const SubMenu = Menu.SubMenu;

class Sidebar extends Component {

    constructor(props, context) {
        super(props, context);

        console.log('==sidebar.js== constructor');

        this.state = {
            collapse: true
        }

        this.onCollapseChange = this.onCollapseChange.bind(this);
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

    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    render() {
        const collapse = this.state.collapse;
        return (
            <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
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
                    <div className="ant-aside-action" onClick={this.onCollapseChange}>
                        {collapse ? <Icon type="right"/> : <Icon type="left"/>}
                    </div>
                </aside>
                <div className="ant-layout-main">
                    <div className="ant-layout-header"></div>
                    <div className="ant-layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                            <Breadcrumb.Item>某应用</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            <div style={{height: 220}}>
                                内容区域
                            </div>
                        </div>
                    </div>
                    <div className="ant-layout-footer">
                        XMAN-ADMIN 版权所有
                    </div>
                </div>
            </div>
        );
    }
}

Sidebar.contextTypes = {
    router: React.PropTypes.object
};

export default Sidebar;