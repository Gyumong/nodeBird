/** @format */

import Axios from "axios";
import {
  all,
  call,
  put,
  takeLatest,
  fork,
  delay,
  throttle,
} from "redux-saga/effects";
import shortid from "shortid";
import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  generateDummyPost,
} from "../reducers/post";

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function AddPostAPI(data) {
  return Axios.post("/api/post", data);
}

function* loadPost(action) {
  try {
    // const result = yield call(AddPostAPI, action.data);
    const id = shortid.generate();
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10), // 리듀서에서 만든 더미포스트 함수를 가져와서 10개를 요청 성공시 만들어준다.
    });
  } catch (e) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: e.response.data,
    });
  }
}

function* addPost(action) {
  try {
    // const result = yield call(AddPostAPI, action.data);
    const id = shortid.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      data: e.response.data,
    });
  }
}

function RemovePostAPI(data) {
  return Axios.delete("/api/post", data);
}

function* removePost(action) {
  try {
    // const result = yield call(RemovePostAPI, action.data);

    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: REMOVE_POST_FAILURE,
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
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchLoadPost() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchLoadPost),
  ]);
}
