import React, {PropTypes, Component} from 'react';

class PageIndex extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==page-index.js== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">
        <h2>HELLO, index</h2>
      </div>
    );
  }
}

export default PageIndex;