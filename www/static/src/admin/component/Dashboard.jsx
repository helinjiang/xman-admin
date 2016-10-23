import React from 'react';
import Base from 'base';
import {Link} from 'react-router';
import moment from 'moment';

export default class extends Base {
  state = {
    platform: '',
    nodeVersion: '',
    v8Version: '',
    mysqlVersion: '',
    thinkjsVersion: '',
    firekylinVersion: '',
    posts: [],
    count: {
      posts: 0,
      comments: 0,
      cates: 0
    }
  };

  componentWillMount() {

  }

  render() {
    return (
      <div className="fk-content-wrap">
        <h2>HELLO, dashboard</h2>
      </div>
    );
  }
}
