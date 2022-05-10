import { signupActionTypes } from './signupType';

export const INITIAL_STATE = {
  all: [],
  popular: [],
  message: null
};

const signupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case signupActionTypes.SIGNUP_POST_SUCCESS:
      return { ...state, all: action.all || [], popular: action.popular || [] };
    case signupActionTypes.SIGNUP_POST_FAILURE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default signupReducer;