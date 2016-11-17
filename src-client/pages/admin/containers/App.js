import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import LayoutSidebar from '../components/layout-sidebar';
import LayoutHeader from '../components/layout-header';
import LayoutBreadcrumb from '../components/layout-breadcrumb';
import LayoutFooter from '../components/layout-footer';

import {collapseSidebar, unCollapseSidebar} from '../actions/sidebar'
import {sidebarMenuConfig} from '../routes'

class App extends Component {

  static propTypes = {
    collapse: PropTypes.bool.isRequired,
    collapseSidebar: PropTypes.func.isRequired,
    unCollapseSidebar: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {collapse} = this.props;

    return (
      <div className={"ant-layout-aside " + (collapse ? "ant-layout-aside-collapse" : "")}>

        <LayoutSidebar
          menuData={sidebarMenuConfig}
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
  collapse: state.sidebar.collapse
});

const mapDispatchToProps = {collapseSidebar, unCollapseSidebar};

export default connect(mapStateToProps, mapDispatchToProps)(App);
