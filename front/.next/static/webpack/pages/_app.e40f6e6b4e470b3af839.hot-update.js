webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: init, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);
/** @format */




var init = {
  mainPosts: [],
  imagesPaths: [],
  hasMorePosts: true,
  // 가져오려는 시도를 하냐마냐는 상태
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommetLoading: false,
  addCommetDone: false,
  addCommetError: null
};
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function (v, i) {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.paragraph()
      }]
    };
  });
};
var LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
var LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
var LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsError = null;
        draft.loadPostsDone = false;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = action.data.concat(draft.mainPosts); // 기존데이터랑 더미데이터 10개 불러와서 합쳐줌

        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostError = null;
        draft.addPostDone = false;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data); // 앞에다 추가해야 게시글 맨 앞에옴

        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostError = null;
        draft.removePostDone = false;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentPostLoading = true;
        draft.addCommentPostError = null;
        draft.addCommentPostDone = false;
        break;

      case ADD_COMMENT_SUCCESS:
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        });
        post.Comments.unshift(action.data);
        draft.addCommetLoading = false;
        draft.addCommetDone = true;
        break;
      // const postIndex = state.mainPosts.findIndex(
      //   (v) => v.id === action.data.postId
      // );
      // const post = { ...state.mainPosts[postIndex] };
      // post.Comments = [dummyComment(action.data.content), ...post.Comments];
      // const mainPosts = [...state.mainPosts];
      // mainPosts[postIndex] = post;
      // return {
      //   ...state,
      //   mainPosts,
      //   addCommentLoading: false,
      //   addCommentDone: true,
      // };

      case ADD_COMMENT_FAILURE:
        draft.addCommetLoading = false;
        draft.addCommetError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0IiwibWFpblBvc3RzIiwiaW1hZ2VzUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZXRMb2FkaW5nIiwiYWRkQ29tbWV0RG9uZSIsImFkZENvbW1ldEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaSIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsImFkZENvbW1lbnRQb3N0TG9hZGluZyIsImFkZENvbW1lbnRQb3N0RXJyb3IiLCJhZGRDb21tZW50UG9zdERvbmUiLCJwb3N0IiwiZmluZCIsIlBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLFdBQVMsRUFBRSxFQURPO0FBRWxCQyxhQUFXLEVBQUUsRUFGSztBQUdsQkMsY0FBWSxFQUFFLElBSEk7QUFHRTtBQUNwQkMsa0JBQWdCLEVBQUUsS0FKQTtBQUtsQkMsZUFBYSxFQUFFLEtBTEc7QUFNbEJDLGdCQUFjLEVBQUUsSUFORTtBQU9sQkMsZ0JBQWMsRUFBRSxLQVBFO0FBUWxCQyxhQUFXLEVBQUUsS0FSSztBQVNsQkMsY0FBWSxFQUFFLElBVEk7QUFVbEJDLG1CQUFpQixFQUFFLEtBVkQ7QUFXbEJDLGdCQUFjLEVBQUUsS0FYRTtBQVlsQkMsaUJBQWUsRUFBRSxJQVpDO0FBYWxCQyxrQkFBZ0IsRUFBRSxLQWJBO0FBY2xCQyxlQUFhLEVBQUUsS0FkRztBQWVsQkMsZ0JBQWMsRUFBRTtBQWZFLENBQWI7QUFrQkEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFEO0FBQUEsU0FDL0JDLEtBQUssQ0FBQ0QsTUFBRCxDQUFMLENBQ0dFLElBREgsR0FFR0MsR0FGSCxDQUVPLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVc7QUFDZEMsUUFBRSxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFSLEVBRFU7QUFFZEMsVUFBSSxFQUFFO0FBQ0pILFVBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURBO0FBRUpFLGdCQUFRLEVBQUVDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0Ms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QUFHVCxLQUFLLENBQUN6RCxTQUFOLENBQWdCbUUsSUFBaEIsQ0FBcUIsVUFBQy9DLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDRSxFQUFGLEtBQVNpQyxNQUFNLENBQUNMLElBQVAsQ0FBWWtCLE1BQTVCO0FBQUEsU0FBckIsQ0FBYjtBQUNBRixZQUFJLENBQUM5QixRQUFMLENBQWN5QixPQUFkLENBQXNCTixNQUFNLENBQUNMLElBQTdCO0FBQ0FPLGFBQUssQ0FBQzdDLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0E2QyxhQUFLLENBQUM1QyxhQUFOLEdBQXNCLElBQXRCO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxXQUFLbUMsbUJBQUw7QUFDRVMsYUFBSyxDQUFDN0MsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQTZDLGFBQUssQ0FBQzNDLGNBQU4sR0FBdUJ5QyxNQUFNLENBQUNLLEtBQTlCO0FBQ0E7O0FBQ0Y7QUFDRTtBQXpFSjtBQTJFRCxHQTVFTSxDQURPO0FBQUEsQ0FBaEI7O0FBK0VlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU0MGY2ZTZiNGU0NzBiM2FmODM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xyXG5leHBvcnQgY29uc3QgaW5pdCA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlc1BhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsIC8vIOqwgOyguOyYpOugpOuKlCDsi5zrj4Trpbwg7ZWY64OQ66eI64OQ64qUIOyDge2DnFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1ldExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1ldERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1ldEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT5cclxuICBBcnJheShudW1iZXIpXHJcbiAgICAuZmlsbCgpXHJcbiAgICAubWFwKCh2LCBpKSA9PiAoe1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXQsIGFjdGlvbikgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7IC8vIOq4sOyhtOuNsOydtO2EsOuekSDrjZTrr7jrjbDsnbTthLAgMTDqsJwg67aI65+s7JmA7IScIO2VqeyzkOykjFxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7IC8vIOyVnuyXkOuLpCDstpTqsIDtlbTslbwg6rKM7Iuc6riAIOunqCDslZ7sl5DsmLRcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50UG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1ldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZXREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcclxuICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXHJcbiAgICAgIC8vICk7XHJcbiAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtYWluUG9zdHMsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1ldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==