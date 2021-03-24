import axios from 'axios';
import {put, takeEvery, call} from 'redux-saga/effects';
import {
  CALL_LOGIN, CALL_LOGIN_FAIL, CALL_LOGIN_SUCCESS,
  CALL_LOGOUT, CALL_LOGOUT_FAIL, CALL_LOGOUT_SUCCESS,
  CALL_SIGNUP, CALL_SIGNUP_FAIL, CALL_SIGNUP_SUCCESS
} from '../../actions/auth/Auth'

const tryLogin = async (user) => {
  return await axios.post('/login/', user, {withCredentials:true});
}

const tryLogout = async () => {
  return await axios.post('/logout/')
}

const trySignUp = async (user) => {
  return await axios.post(
    '/user/',
    user,
    { withCredentials: true }
  )
}

function* fetchCallLogin(action) {
  try {
    const response = yield call(tryLogin, action.user)
    yield put({
      type: CALL_LOGIN_SUCCESS,
      user: response.data
    });
  } catch (e) {
    yield put({
      type: CALL_LOGIN_FAIL
    });
  }
}

function* fetchCallLogout (action) {
  try {
    yield call(tryLogout)
    yield put(CALL_LOGOUT_SUCCESS)
  } catch (e) {
    yield put(CALL_LOGOUT_FAIL)
  }
}

function* fetchCallSignUp (action) {
  try {
    yield call(trySignUp, action.user)
    yield put({
      type:CALL_SIGNUP_SUCCESS
    })
  } catch (e) {
    yield put({
      type: CALL_SIGNUP_FAIL
    });
  }
}

export function* watchAuth () {
  yield takeEvery(CALL_LOGIN, fetchCallLogin);
  yield takeEvery(CALL_LOGOUT, fetchCallLogout);
  yield takeEvery(CALL_SIGNUP, fetchCallSignUp);
}