import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import {increase, decrease} from '../../actions/count'

class PageIndex extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
    this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
  }

  handleIncreaseClick() {
    console.log('--handleIncreaseClick--');
    this.props.increase(1);
  }

  handleDecreaseClick() {
    this.props.decrease(1);
  }

  render() {
    let {number} = this.props;

    return (
      <div className="fk-content-wrap">
        <h2>HELLO, index</h2>
        <div>
          Some state changes1:
          {number}
          <button onClick={this.handleIncreaseClick}>Increase</button>
          <button onClick={this.handleDecreaseClick}>Decrease</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.count.number
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase,
//     decrease
//   }
// };

export default connect(mapStateToProps, { increase, decrease })(PageIndex);
