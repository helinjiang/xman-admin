import React, {PropTypes, Component} from 'react';

class PageTestIndex extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==test/ant.design== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">hello test/ant.design</div>
    )
  }
}

export default  PageTestIndex;
