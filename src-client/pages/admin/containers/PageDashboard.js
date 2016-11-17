import React, {PropTypes, Component} from 'react';

class PageDashboard extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==PageDashboard.js== constructor');
  }

  render() {
    return (
      <div className="page-dashboard-content">
        <h2>HELLO, dashboard</h2>
      </div>
    );
  }
}

export default PageDashboard;