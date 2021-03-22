import { all } from 'redux-saga/effects'
import { watchLogin } from './User/login'

export default function* rootSaga() {
  yield all([
    watchLogin(),
  ])
}