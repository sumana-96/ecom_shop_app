import { catelogueActionTypes } from './catelogueType';
import axios from 'axios';


export const fetchCatelogues = () => async (dispatch) => {
  axios.get('http://localhost:4000/list_products', 
    )
  .then(response => { 
    if (response.status === 200) {
        return dispatch({
          type: catelogueActionTypes.FETCH_CATELOGUE_SUCCESS,
          all: response.data,
          popular: response.popularCatelogues,
        });
  }})
  .catch(error => {
      console.log(error.response)
      return dispatch({
        type: catelogueActionTypes.FETCH_CATELOGUE_FAILURE
      });
  });
  
};


