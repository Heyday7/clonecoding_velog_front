import {CALL_LOGIN, CALL_LOGIN_FAIL, CALL_LOGIN_SUCCESS} from '../../actions/User/login'

export const initialState = {
  isLogin: false,
  username: ''
}

export const loginReducer = (state=initialState, action) => {
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
    default:
      return {...state}
  }
}

