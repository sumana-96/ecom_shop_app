
import { productActionTypes } from './productType';

export const INITIAL_STATE = {
  all: [],
  popular: [],
  message: null
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.POST_PRODUCT_SUCCESS:
      return { ...state, all: action.all || [], popular: action.popular || [] };
    case productActionTypes.POST_PRODUCT_FAILURE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default productReducer;