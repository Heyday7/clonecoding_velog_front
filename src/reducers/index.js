import {combineReducers} from 'redux'
import {authReducer} from './auth/Auth'

// export const initialState = {
//   isLogin: false,
//   username: ''
// }

const reducer = combineReducers({
  authReducer,
})

export default reducer