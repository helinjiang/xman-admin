import './index.less';

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import classnames from 'classnames';

import LayoutSidebar from '../../components/layout-sidebar';
import LayoutHeader from '../../components/layout-header';
import LayoutBreadcrumb from '../../components/layout-breadcrumb';
import LayoutFooter from '../../components/layout-footer';

import PageLogin from '../../pages/login';

class App extends Component {

  static propTypes = {
    collapse: PropTypes.bool.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    // 如果没有登录的话，则直接渲染登录界面出来
    if (!window.SysConfig.userInfo.name) {
      return (
        <div className="xman-login">
          <PageLogin/>
        </div>);
    }

    return (
      <div className={classnames({
        'xman-layout': true,
        'collapse': this.props.collapse
      })}>

        <LayoutSidebar/>

        <div className="layout-main">

          <LayoutHeader/>

          <LayoutBreadcrumb/>

          <div className="layout-container">
            <div className="layout-content">
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

export default connect(mapStateToProps)(App);
