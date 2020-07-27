import * as actionTypes from '../actionTypes';
import { updateObject } from '../../Util/Util';

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          result: action.value,
        }),
      });
    case actionTypes.DELETE_RESULT: {
      return updateObject(state, {
        results: state.results.filter((result) => result.id !== action.value),
      });
    }
    default:
      return {
        ...state,
      };
  }
};

export default resultReducer;
