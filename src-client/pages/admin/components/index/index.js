import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {increase, decrease} from '../../actions/count'

class PageIndex extends Component {
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

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => ({
  increase: bindActionCreators(increase, dispatch),
  decrease: bindActionCreators(decrease, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);

// 或者直接传递 actionCreator
// export default connect(mapStateToProps, {increase, decrease})(PageIndex);


// let actions = {
//   addItem: (text) => {
//     type: types.ADD_ITEM,
//       text
//   }
// }
//
// bindActionCreators(actions, dispatch); // @return {addItem: (text) => dispatch({ type: types.ADD_ITEM, text })}

// bindActionCreators(actionCreators, dispatch)
// return {actionKey: (...args) => dispatch(actionCreator(...args))}

// function _getPageSize(data) {
//   return {
//     type: COMMON_PAGE_SIZE,
//     data: data
//   };
// }
//
// export function loadPageSize(forbidHorizontal) {
//   return (dispatch, getState) => {
//     let data = getPageSize(forbidHorizontal);
//
//     dispatch(_getPageSize(data));
//   };
// }