import './index.css';

import React, {Component} from 'react';

class Sidebar extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="ant-layout-footer">
        XMAN-ADMIN 版权所有
      </div>
    );
  }
}

export default Sidebar;