import * as actionTypes from '../actionTypes';
import { updateObject } from '../../Util/Util';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD_VALUE:
      return updateObject(state, { counter: state.counter + action.value });
    case actionTypes.DEC_VALUE:
      return updateObject(state, { counter: state.counter - action.value });
    default:
      return {
        ...state,
      };
  }
};

export default counterReducer;
