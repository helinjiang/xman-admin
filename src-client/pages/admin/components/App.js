import React, {PropTypes, Component} from 'react';


import Sidebar from './sidebar';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==app.js== constructor');
  }

  render() {
    if (!SysConfig.userInfo.name) {
      return (
        <div className="fk">
          <h1>LOGIN PAGE</h1>
        </div>);
    }
    return (
      <div className="fk">
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}

export default App;