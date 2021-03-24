import { all } from 'redux-saga/effects'
// import { watchLogin } from './user/Login'
// import { watchLogout } from './user/Logout'
// import { watchSignUp } from './user/SignUp'
import { watchAuth } from './auth/Auth'

export default function* rootSaga() {
  yield all([
    // watchLogin(),
    // watchLogout(),
    // watchSignUp(),
    watchAuth(),
  ])
}