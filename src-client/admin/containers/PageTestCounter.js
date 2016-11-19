import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import {increase, decrease} from '../actions/count'

class PageTestCounter extends Component {
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
      <div className="page-test-counter-content">
        <h2>使用 Redux 实现计数器</h2>
        <p>参考：</p>
        <ul>
          <li>https://github.com/reactjs/redux/tree/master/examples/counter</li>
          <li>https://github.com/reactjs/react-router-redux/tree/master/examples/basic</li>
        </ul>

        <hr/>

        <div>
          Some state changes: {number}
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

export default connect(mapStateToProps, mapDispatchToProps)(PageTestCounter);
