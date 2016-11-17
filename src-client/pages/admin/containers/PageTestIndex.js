import React, {PropTypes, Component} from 'react';

class PageTestIndex extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==test/index.js== constructor');
  }

  render() {
    return (
      <div className="page-test-index-content">
        <h2>hello test/index</h2>
      </div>
    )
  }
}

export default  PageTestIndex;
