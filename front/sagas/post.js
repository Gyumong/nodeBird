import Axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

function PostAPI(data) {
  return Axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    const result = yield call(PostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: e.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
