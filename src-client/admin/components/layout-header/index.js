import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux'

class LayoutHeader extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="layout-header">
        <h2>欢迎 {this.props.user.name}</h2>
        <a href="/admin/user/logout">退出</a>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(LayoutHeader);