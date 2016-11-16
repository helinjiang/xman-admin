import React, {PropTypes, Component} from 'react';

class PageUIDemoIndex extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==test/index.js== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">hello test/index</div>
    )
  }
}

export default  PageUIDemoIndex;
