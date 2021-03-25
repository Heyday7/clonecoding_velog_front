import { all } from 'redux-saga/effects'
import { watchAuth } from './auth/Auth'

export default function* rootSaga() {
  yield all([
    watchAuth(),
  ])
}