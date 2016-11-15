import React, {PropTypes, Component} from 'react';

import Login from './page-login';
import Sidebar from './sidebar';
import Tip from 'common/component/tip';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==app.js== constructor');
  }

  render() {
    if (!SysConfig.userInfo.name) {
      return (
        <div className="fk">
          <Tip />
          <Login />
        </div>);
    }
    return (
      <div className="fk">
        <Sidebar />
        <Tip />
        {this.props.children}
      </div>
    );
  }
}

export default App;