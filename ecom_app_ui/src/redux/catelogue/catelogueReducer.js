
import { catelogueActionTypes } from './catelogueType';

export const INITIAL_STATE = {
  all: [],
  popular: [],
  message: null
};

const catelogueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case catelogueActionTypes.FETCH_CATELOGUE_SUCCESS:
      return { ...state, all: action.all || [], popular: action.popular || [] };
    case catelogueActionTypes.FETCH_CATELOGUE_FAILURE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default catelogueReducer;