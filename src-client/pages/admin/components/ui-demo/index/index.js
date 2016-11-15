import React, {PropTypes, Component} from 'react';

class PageUIDemoIndex extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==page-ui-demo-index.js== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">hello ui-demo/index</div>
    )
  }
}

export default  PageUIDemoIndex;
