export const CALL_LOGIN = 'CALL_LOGIN';
export const CALL_LOGIN_SUCCESS = 'CALL_LOGIN_SUCCESS'
export const CALL_LOGIN_FAIL = 'CALL_LOGIN_FAIL'
export const CALL_LOGOUT = 'CALL_LOGOUT';
export const CALL_LOGOUT_SUCCESS = 'CALL_LOGOUT_SUCCESS';
export const CALL_LOGOUT_FAIL = 'CALL_LOGOUT_FAIL';
export const CALL_SIGNUP = 'CALL_SIGNUP';
export const CALL_SIGNUP_SUCCESS = 'CALL_SIGNUP_SUCCESS';
export const CALL_SIGNUP_FAIL = 'CALL_SIGNUP_FAIL';

export const callLogin = (user) => {
  return {
    type: CALL_LOGIN, user
  }
}

export const callLoginSuccess = (user) => {
  return {
    type: CALL_LOGIN_SUCCESS, user
  }
}

export const callLoginFail = () => {
  return {
    type: CALL_LOGIN_FAIL
  }
}

export const callLogout = () => {
  return {
    type: CALL_LOGOUT
  }
}

export const callLogoutSuccess = () => {
  return {
    type: CALL_LOGOUT_SUCCESS
  }
}

export const callLogoutFail = () => {
  return {
    type: CALL_LOGOUT_FAIL
  }
}

export const callSignUp = (user) => { 
  return {
    type: CALL_SIGNUP, user
  }
}

export const callSignUpSuccess = () => {
  return {
    type: CALL_SIGNUP_SUCCESS
  }
}

export const callSignUpFail = () => {
  return {
    type: CALL_SIGNUP_FAIL
  }
}