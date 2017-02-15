import './index.less'

import React, {PropTypes, Component} from 'react';

import {Link} from 'react-router'

import {Button} from 'antd';

class PageCustomerCreate extends Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="page-customer-content">
        <h2>HELLO, customer add</h2>
        <Button type="primary"><Link to="/customer/list">返回到列表</Link></Button>
      </div>
    );
  }
}

// export default PageCustomerCreate;

module.exports = PageCustomerCreate;