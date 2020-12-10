webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button/button-group */ "./node_modules/antd/lib/button/button-group.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/avatar/avatar */ "./node_modules/antd/lib/avatar/avatar.js");
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\nodebird\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); // 옵셔널 체이닝연산자 보호연산자를 단축한거임

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PostImages, {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {}, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              type: "danger",
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 21
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        title: post.User.nickname,
        description: post.content,
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "FJdoDJNyUlJ5WKWdRipc5DguCUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsNkJBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUF0QixtREFBVyxlQUFlSixFQUExQjtBQUFBLEdBQUQsQ0FBdEIsQ0FENkIsQ0FFN0I7O0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBRUQsSUFBSSxDQUFDTSxNQUFMLENBQVksQ0FBWixrQkFBa0IscUVBQUMsVUFBRDtBQUFZLGNBQU0sRUFBRU4sSUFBSSxDQUFDTTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRDNCO0FBRUUsYUFBTyxFQUFFLGNBQ1AscUVBQUMsaUVBQUQsTUFBcUIsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURPLGVBRVAscUVBQUMsK0RBQUQsTUFBbUIsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZPLGVBR1AscUVBQUMsaUVBQUQsTUFBcUIsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhPLGVBSVAscUVBQUMsNENBQUQ7QUFFRSxlQUFPLGVBQ0wscUVBQUMsbUVBQUQ7QUFBQSxvQkFDR0wsRUFBRSxJQUFJRCxJQUFJLENBQUNPLElBQUwsQ0FBVU4sRUFBVixLQUFpQkEsRUFBdkIsZ0JBQ0M7QUFBQSx1QkFDRyxHQURILGVBRUUscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLHFFQUFDLE1BQUQ7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQSwwQkFERCxnQkFPQyxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBLCtCQWdCRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJGLFNBQ00sTUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSk8sQ0FGWDtBQUFBLDZCQTBCRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxhQUFLLEVBQUVELElBQUksQ0FBQ08sSUFBTCxDQUFVQyxRQURuQjtBQUVFLG1CQUFXLEVBQUVSLElBQUksQ0FBQ1MsT0FGcEI7QUFHRSxjQUFNLGVBQUUscUVBQUMsNkRBQUQ7QUFBQSxvQkFBU1QsSUFBSSxDQUFDTyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBMUNEOztHQUFNVCxRO1VBQ09HLHVEOzs7S0FEUEgsUTtBQTRDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmY2Zjc5M2I3Y2FiMzFlMzUxODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBFbGxpcHNpc091dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiYW50ZC9saWIvYnV0dG9uL2J1dHRvbi1ncm91cFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJhbnRkL2xpYi9hdmF0YXIvYXZhdGFyXCI7XHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICAvLyDsmLXshZTrhJAg7LK07J2064ud7Jew7IKw7J6QIOuztO2YuOyXsOyCsOyekOulvCDri6jstpXtlZzqsbDsnoRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiAvPixcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIC8+LFxyXG4gICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgey8qIDxDb21tZW50Rm9ybSAvPlxyXG4gICAgICA8Q29tbWVudHMgLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=