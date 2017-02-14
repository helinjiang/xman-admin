import './index.less'

import React, {PropTypes, Component} from 'react';

class PageCustomer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="page-customer-content">
        <h2>HELLO, customer</h2>
      </div>
    );
  }
}

export default PageCustomer;