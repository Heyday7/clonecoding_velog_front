export const CALL_LOGIN = 'CALL_LOGIN';
export const CALL_LOGIN_SUCCESS = 'CALL_LOGIN_SUCCESS'
export const CALL_LOGIN_FAIL = 'CALL_LOGIN_FAIL'

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