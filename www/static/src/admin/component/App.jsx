import React from 'react';
import Base from 'base';
import Login from './login';
import Sidebar from './sidebar';
import Tip from 'common/component/tip';


export default class App extends Base {
  state = {

  };

  render() {
    if(!SysConfig.userInfo.name){
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
