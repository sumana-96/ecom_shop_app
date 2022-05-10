import { signupActionTypes } from './signupType';
import axios from 'axios';

export const createUser = (data) => async (dispatch) => {
    console.log("action_user",data)
    axios.post(`http://localhost:4000/signup`, data)
    .then(response => { 
      if (response.status === 201) {
        console.log(response)
        return dispatch({
          type: signupActionTypes.SIGNUP_POST_SUCCESS,
          message: response.data.message,
        });
    }})
    .catch(error => {
        console.log(error.response)
        return dispatch({
          type: signupActionTypes.SIGNUP_POST_FAILURE
        });
    });
    
  };
