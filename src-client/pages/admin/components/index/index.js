import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {increase, decrease} from '../../actions/count'

class PageIndex extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('==page-index.js== constructor');
  }

  render() {
    let {number, increase, decrease} = this.props;

    return (
      <div className="fk-content-wrap">
        <h2>HELLO, index</h2>
        <div>
          Some state changes:
          {number}
          <button onClick={() => increase(1)}>Increase</button>
          <button onClick={() => decrease(1)}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({number: state.count.number}),
  {increase, decrease}
)(PageIndex);
