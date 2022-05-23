import { loginActionTypes } from './loginType';
import axios from 'axios';

export const loginUser = (data) => async (dispatch) => {
   axios.post('http://localhost:4000/login', data)
    .then(response => { 
        return dispatch({
          type: loginActionTypes.LOGIN_SUCCESS,
          message: response.data.message,
        });
    })
    .catch(error => {
        console.log("error",error)
        return dispatch({
          type: loginActionTypes.LOGIN_FAILURE
        });
        
    });
    
  };