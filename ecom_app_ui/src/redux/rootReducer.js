import { combineReducers } from 'redux'
import catelogueReducer from './catelogue/catelogueReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
    catelogueReducer: catelogueReducer,
    productReducer: productReducer,
})

export default rootReducer