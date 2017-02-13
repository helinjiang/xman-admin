import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import {increase, decrease} from './actions/count'

import {Row, Col, Button, Card} from 'antd';

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

        <Row>
          <Col md={6}>
            <Button onClick={this.handleIncreaseClick}  type="primary">Increase</Button>
            <Button onClick={this.handleDecreaseClick}>Decrease</Button>
          </Col>
          <Col md={6}>
            <Card title="Result" style={{width: 300}}>
              <p>Some state changes: {number}</p>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <p>参考：</p>
            <ul>
              <li>https://github.com/reactjs/redux/tree/master/examples/counter</li>
              <li>https://github.com/reactjs/react-router-redux/tree/master/examples/basic</li>
            </ul>
          </Col>
        </Row>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.count.number
});

const mapDispatchToProps = {increase, decrease};

export default connect(mapStateToProps, mapDispatchToProps)(PageTestCounter);
