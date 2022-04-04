// import axios from 'axios'
import { catelogueActionTypes } from './catelogueType';
import axios from 'axios';


export const fetchCatelogues = () => async (dispatch) => {
  console.log('action api called')
  // const res = await API.get('/v1/categories');
  // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  // const res =  axios.get('http://localhost:5000/list_products');
  // console.log(res)
  // if (res.status === 200) {
  //   return dispatch({
  //     type: catelogueActionTypes.FETCH_CATELOGUE_SUCCESS,
  //     all: res.catelogues,
  //     popular: res.popularCatelogues,
  //   });
  // } else {
  //   return dispatch({
  //     type: catelogueActionTypes.FETCH_CATELOGUE_FAILURE,
  //     message: res.message,
  //   });
  //   console.log('err====', res.message);
  // }
  axios.get('http://localhost:5000/list_products', 
    )
  .then(response => { 
    // console.log(response)
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


