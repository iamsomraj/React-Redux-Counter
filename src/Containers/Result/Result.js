import React from 'react';
import ResultStyle from './Result.module.css';
import * as actionCreators from '../../store/actionCreators';

import { connect } from 'react-redux';

const Result = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <button
        disabled={props.counter === 0}
        className={ResultStyle.button}
        onClick={() => props.onShow(props.counter)}
      >
        Show Result
      </button>
      {props.rslts &&
        props.rslts.map((result) => (
          <div
            className={ResultStyle.result}
            key={result.id}
            onClick={() => props.onDel(result.id)}
          >
            {result.result}
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    rslts: state.res.results,
    counter: state.ctr.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShow: (result) => dispatch(actionCreators.storeAsync(result)),
    onDel: (id) => dispatch(actionCreators.delResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
