import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const addValue = (val) => {
  return {
    type: actionTypes.ADD_VALUE,
    value: val,
  };
};

export const decValue = (val) => {
  return {
    type: actionTypes.DEC_VALUE,
    value: val,
  };
};

export const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    value: result,
  };
};

export const storeAsync = (result) => {
  console.log('Timer starts');
  return (dispatch) => {
    setTimeout(() => {
      console.log('Timer stops');
      dispatch(storeResult(result));
    }, 1000);
  };
};

export const delResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    value: id,
  };
};
