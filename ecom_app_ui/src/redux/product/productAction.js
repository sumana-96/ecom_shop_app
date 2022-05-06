import { productActionTypes } from './productType';
import axios from 'axios';

export const createProduct = (data) => async (dispatch) => {
console.log('data===', data)
    axios.post('http://localhost:4000/create_product', data
      )
    .then(response => { 
      if (response.status === 200) {
          return dispatch({
            type: productActionTypes.POST_PRODUCT_SUCCESS,
            // all: response.data,
            // popular: response.popularProducts,
          });
    }})
    .catch(error => {
        console.log(error.response)
        return dispatch({
          type: productActionTypes.POST_PRODUCT_FAILURE
        });
    });
    
  };