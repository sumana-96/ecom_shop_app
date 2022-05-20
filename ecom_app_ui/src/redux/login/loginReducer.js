
import { loginActionTypes } from './loginType';

export const INITIAL_STATE = {
  all: [],
  popular: [],
  message: null
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN_SUCCESS:
      return { ...state, all: action.all || [], popular: action.popular || [] };
    case loginActionTypes.LOGIN_FAILURE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default loginReducer;