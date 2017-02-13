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
    collapse: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.user.isLogin) {
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
    } else {
      return (
        <div className="xman-login">
          <PageLogin/>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  collapse: state.sidebar.collapse,
  user: state.user
});

export default connect(mapStateToProps)(App);
