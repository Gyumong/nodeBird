import Axios from "axios";
import { all, call, put, takeLatest, fork, delay } from "redux-saga/effects";
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "../reducers/post";
function PostAPI(data) {
  return Axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    // const result = yield call(PostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      data: e.response.data,
    });
  }
}

function CommentAPI(data) {
  return Axios.post(`/api/post/${data.postId}/comment`, data);
}
function* addComment(action) {
  try {
    // const result = yield call(CommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: e.response.data,
    });
  }
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
