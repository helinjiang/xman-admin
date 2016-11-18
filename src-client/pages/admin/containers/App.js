import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import classnames from 'classnames';

import LayoutSidebar from '../components/layout-sidebar';
import LayoutHeader from '../components/layout-header';
import LayoutBreadcrumb from '../components/layout-breadcrumb';
import LayoutFooter from '../components/layout-footer';

import {collapseSidebar, unCollapseSidebar, loadMenu} from '../actions/sidebar'

class App extends Component {

  static propTypes = {
    menuData: PropTypes.object.isRequired,
    menuDataMap: PropTypes.object.isRequired,
    collapse: PropTypes.bool.isRequired,
    collapseSidebar: PropTypes.func.isRequired,
    unCollapseSidebar: PropTypes.func.isRequired,
    loadMenu: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // 加载菜单信息
    this.props.loadMenu();
  }

  render() {
    const {menuData, menuDataMap, collapse} = this.props;

    return (
      <div className={classnames({
        'ant-layout-aside': true,
        'ant-layout-aside-collapse': collapse
      })}>

        <LayoutSidebar
          menuData={menuData}
          menuDataMap={menuDataMap}
          collapse={collapse}
          collapseSidebar={this.props.collapseSidebar}
          unCollapseSidebar={this.props.unCollapseSidebar}/>

        <div className="ant-layout-main">

          <LayoutHeader/>

          <LayoutBreadcrumb/>

          <div className="ant-layout-container">
            <div className="ant-layout-content">
              {this.props.children}
            </div>
          </div>

          <LayoutFooter/>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  collapse: state.sidebar.collapse,
  menuData: state.sidebar.menuData,
  menuDataMap: state.sidebar.menuDataMap,
});

const mapDispatchToProps = {collapseSidebar, unCollapseSidebar, loadMenu};

export default connect(mapStateToProps, mapDispatchToProps)(App);
