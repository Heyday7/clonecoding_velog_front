import axios from 'axios';
import {CALL_LOGIN, CALL_LOGIN_FAIL, CALL_LOGIN_SUCCESS} from '../../actions/User/login';
import {put, takeEvery, call} from 'redux-saga/effects';


const tryLogin = async (user) => {
  return await axios.post('/login/', user, {withCredentials:true});
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

export function* watchLogin() {
  yield takeEvery(CALL_LOGIN, fetchCallLogin);
}