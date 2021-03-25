import {
  CALL_LOGIN, CALL_LOGIN_FAIL, CALL_LOGIN_SUCCESS,
  CALL_LOGOUT, CALL_LOGOUT_FAIL, CALL_LOGOUT_SUCCESS,
  CALL_SIGNUP, CALL_SIGNUP_FAIL, CALL_SIGNUP_SUCCESS
} from '../../actions/auth/Auth'

export const initialState = {
  isLogin: false,
  username: ''
}

export const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case CALL_LOGIN:
      return {...state}
    case CALL_LOGIN_SUCCESS:
      return {
        isLogin: true,
        username: action.user.username
      }
    case CALL_LOGIN_FAIL:
      return {...state}
      
    case CALL_LOGOUT:
      return {...state}
    case CALL_LOGOUT_SUCCESS:
      return {
        isLogin:false,
        username:''
      }
    case CALL_LOGOUT_FAIL:
      return {...state}

    case CALL_SIGNUP:
      return {...state}
    case CALL_SIGNUP_SUCCESS:
      return {...state}
    case CALL_SIGNUP_FAIL:
      return {...state}

    default:
      return state
  }
}