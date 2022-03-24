import { combineReducers } from 'redux'
import catelogueReducer from './catelogue/catelogueReducer'

const rootReducer = combineReducers({
    catelogueReducer: catelogueReducer,

})

export default rootReducer