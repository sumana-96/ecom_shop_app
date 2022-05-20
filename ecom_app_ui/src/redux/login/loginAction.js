import { loginActionTypes } from './loginType';
import axios from 'axios';

export const loginUser = (data) => async (dispatch) => {
   await axios.post('http://localhost:4000/login', data)
    .then(response => response.json())
    .then(response => { 
      console.log(response)
        return dispatch({
          type: loginActionTypes.LOGIN_SUCCESS,
          message: response.data.message,
        });
    })
    .catch(error => {
        console.log(error.response)
        return dispatch({
          type: loginActionTypes.LOGIN_FAILURE
        });
        
    });
    
  };