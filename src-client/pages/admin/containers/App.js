import React, {PropTypes, Component} from 'react';

import Sidebar from '../components/sidebar';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==app.js== constructor');
  }

  render() {
    return (
      <div className="xman-container">
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}

export default App;