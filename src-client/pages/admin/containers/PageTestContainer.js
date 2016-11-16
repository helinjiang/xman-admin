import React, {PropTypes, Component} from 'react';

class PageUIDemo extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==test container== constructor');
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default PageUIDemo;