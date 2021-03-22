import {combineReducers} from 'redux'
import {loginReducer} from './User/login'

const reducer = combineReducers({
  loginReducer,
})

export default reducer