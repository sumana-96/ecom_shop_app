import { productActionTypes } from './productType';
import axios from 'axios';

export const createProduct = (data) => async (dispatch) => {
    axios.post(`http://localhost:4000/create_product`, data)
    .then(response => { 
      if (response.status === 201) {
        console.log(response)
        return dispatch({
          type: productActionTypes.POST_PRODUCT_SUCCESS,
          message: response.data.message,
        });
    }})
    .catch(error => {
        console.log(error.response)
        return dispatch({
          type: productActionTypes.POST_PRODUCT_FAILURE
        });
    });
    
  };