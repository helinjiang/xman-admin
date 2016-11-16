import React, {PropTypes, Component} from 'react';

class PageDashboard extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==PageDashboard.js== constructor');
  }

  render() {
    return (
      <div className="fk-content-wrap">
        <h2>HELLO, dashboard new</h2>
      </div>
    );
  }
}

export default PageDashboard;