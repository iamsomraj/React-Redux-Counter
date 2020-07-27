import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

import counterStyle from './Counter.module.css';

const Counter = (props) => {
  return (
    <div>
      <div className={counterStyle.header}>Counter: {props.ctr}</div>
      <div style={{ textAlign: 'center' }}>
        <button className={counterStyle.button} onClick={props.onInc}>
          Increment
        </button>
        <button className={counterStyle.button} onClick={props.onDec}>
          Decrement
        </button>
        <button className={counterStyle.button} onClick={() => props.onAdd(10)}>
          Add Value 10
        </button>
        <button
          className={counterStyle.button}
          onClick={() => props.onDecrease(5)}
        >
          Decrease Value 5
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: () => dispatch(actionCreators.increment()),
    onDec: () => dispatch(actionCreators.decrement()),
    onAdd: (value) => dispatch(actionCreators.addValue(value)),
    onDecrease: (value) => dispatch(actionCreators.decValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
