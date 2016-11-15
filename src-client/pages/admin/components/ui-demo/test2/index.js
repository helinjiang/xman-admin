import React, {PropTypes, Component} from 'react';

class PageUIDemoTest2 extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==page-ui-demo-test2.js== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">hello ui-demo/test2</div>
    )
  }
}

export default  PageUIDemoTest2;
