import React, {Component} from 'react';

class PageHome extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="page-home-content">
        <h1>HELLO, home</h1>
        <p>这里是首页</p>

        <h2>列表</h2>
        <ul>
          <li><a href="./test/counter">计数器示例</a>，展示简单的 React + redux + Ant.Design 的用法。</li>
        </ul>
      </div>
    );
  }
}

export default PageHome;
