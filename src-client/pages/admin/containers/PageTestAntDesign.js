import React, {PropTypes, Component} from 'react';

import {Button} from 'antd';

class PageTestIndex extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==test/ant.design== constructor');
  }

  render() {
    return (
      <div className="page-test-ant_design-content">
        <h2>hello test/ant.design</h2>
        <Button>Hello world!</Button>
      </div>
    )
  }
}

export default  PageTestIndex;
