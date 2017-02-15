import React, {PropTypes, Component} from 'react';

module.exports = class extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}