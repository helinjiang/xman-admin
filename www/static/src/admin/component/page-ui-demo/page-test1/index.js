import React, {PropTypes, Component} from 'react';

class PageUIDemoTest1 extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==page-ui-demo-test1.js== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">hello ui-demo/test1</div>
    )
  }
}

export default  PageUIDemoTest1;
