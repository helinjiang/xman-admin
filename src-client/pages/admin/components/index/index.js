import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import {increase, decrease} from '../../actions/count'

class PageIndex extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);

    this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
    this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
  }

  handleIncreaseClick() {
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
          Some state changes:
          {number}
          <br/><br/><br/>
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

const mapDispatchToProps = {increase, decrease};

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);
