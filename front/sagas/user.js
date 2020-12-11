import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  // data를 받음 ex) {id:'abc@naver.com',password:'123456'}
  return axios.post("/api/login", data); // 받은 data를 토대로 서버에 요청을 보냄
}

function* logIn(action) {
  // 액션을 받음
  try {
    const result = yield call(logInAPI, action.data); // 요청이 성공이면 call로 logInAPI를 실행하고 결괏값을 변수 result에 저장
    // fork는 비동기 call은 동기 => async await 함수 비슷 결괏값 받으면 실행 ㅇㅇ
    // action에서 data를 꺼내서 logInAPI 함수에 인자로 보냄
    yield put({
      // 액션을 dispatch
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: e.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  // 로그아웃은 데이터 받을 필요 없음
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: e.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
  // 액션이 들어오면 logIn 제너레이터 함수를 실행, 요청이 들어오면 두번재 인자 함수에 액션을 넘김
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
