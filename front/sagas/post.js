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
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  generateDummyPost,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
} from "../reducers/post";

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function AddPostAPI(data) {
  return Axios.post("/post", { content: data });
}
function loadPostsAPI(data) {
  return Axios.get("/posts");
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostsAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data, // 리듀서에서 만든 더미포스트 함수를 가져와서 10개를 요청 성공시 만들어준다.
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: e.response.data,
    });
  }
}

function* addPost(action) {
  try {
    const result = yield call(AddPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      data: e.response.data,
    });
  }
}

function RemovePostAPI(data) {
  return Axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(RemovePostAPI, action.data);

    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
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
  return Axios.post(`/post/${data.postId}/comment`, data); // Post /post/1/comment
}
function* addComment(action) {
  try {
    const result = yield call(CommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: e.response.data,
    });
  }
}

function likePostAPI(data) {
  return Axios.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LIKE_POST_FAILURE,
      data: e.response.data,
    });
  }
}

function unlikePostAPI(data) {
  return Axios.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data, // 리듀서에서 만든 더미포스트 함수를 가져와서 10개를 요청 성공시 만들어준다.
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UNLIKE_POST_FAILURE,
      data: e.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return Axios.post(`/post/images`, data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data, // 리듀서에서 만든 더미포스트 함수를 가져와서 10개를 요청 성공시 만들어준다.
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
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
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default function* postSaga() {
  yield all([
    fork(watchUploadImages),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchLoadPost),
  ]);
}
