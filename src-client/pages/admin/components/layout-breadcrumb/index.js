import './index.css';

import React, {Component} from 'react';

import {Breadcrumb} from 'antd';

class Sidebar extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="ant-layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>应用列表</Breadcrumb.Item>
          <Breadcrumb.Item>某应用</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default Sidebar;