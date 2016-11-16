import React, {PropTypes, Component} from 'react';

class PageUIDemoTest1 extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==test/counter== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">hello test/counter</div>
    )
  }
}

export default  PageUIDemoTest1;
