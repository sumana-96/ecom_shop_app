import { combineReducers } from 'redux'
import catelogueReducer from './catelogue/catelogueReducer'
import productReducer from './product/productReducer'
import signupReducer from './signup/signupReducer'

const rootReducer = combineReducers({
    catelogueReducer: catelogueReducer,
    productReducer: productReducer,
    signupReducer: signupReducer,
})

export default rootReducer