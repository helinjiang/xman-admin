import React from 'react';
import Base from 'base';

export default class extends Base {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
