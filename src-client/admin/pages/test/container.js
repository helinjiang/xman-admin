import React, {PropTypes, Component} from 'react';

class PageTestContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default PageTestContainer;