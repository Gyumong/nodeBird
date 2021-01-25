webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");



var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\nodebird\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @format */






var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      imagesPaths = _useSelector.imagesPaths,
      addPostDone = _useSelector.addPostDone;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // 포스트를 보내고 성공하면 input창을 비워준다.
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!text || !text.trim()) {
      return alert("게시글을 작성하세요");
    }

    var formData = new FormData();
    imagesPaths.forEach(function (p) {
      formData.append("image", i);
    });
    formData.append("content", text);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_REQUEST"],
      data: formData
    });
    console.log("업로드");
  }, [text, imagesPaths]);
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    console.log("images", e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append("image", f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["REMOVE_IMAGE"],
        data: index
      });
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC0DD\uAC01\uC744 \uAC16\uACE0 \uACC4\uC2E0\uAC00\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        style: {
          "float": "right"
        },
        htmlType: "submit",
        children: "\uC9F9\uC9F9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: imagesPaths.map(function (v, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            display: "inline-block"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: "http://localhost:3080/".concat(v),
            style: {
              width: "200px"
            },
            alt: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              onClick: onRemoveImage(i),
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
};

_s(PostForm, "pgEBCOg+TCCHarEOCyuajTekItU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VzUGF0aHMiLCJhZGRQb3N0RG9uZSIsInVzZUlucHV0IiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsInNldFRleHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsInRyaW0iLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicCIsImFwcGVuZCIsImkiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFyZ2luIiwibWFwIiwidiIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxxQkFDZ0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRDNCO0FBQUEsTUFDYkMsV0FEYSxnQkFDYkEsV0FEYTtBQUFBLE1BQ0FDLFdBREEsZ0JBQ0FBLFdBREE7O0FBQUEsa0JBRWlCQywrREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQTtBQUFBLE1BRWRDLElBRmM7QUFBQSxN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O0FBQUEsZUFERixlQVNFLHFFQUFDLDJDQUFEO0FBQVEsZUFBTyxFQUFFSCxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLHFFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsYUFBSyxFQUFFO0FBQUUsbUJBQU87QUFBVCxTQUE5QjtBQUFrRCxnQkFBUSxFQUFDLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUF5QkU7QUFBQSxnQkFDRzFCLFdBQVcsQ0FBQ3lDLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJeEIsQ0FBSixFQUFVO0FBQ3pCLDRCQUNFO0FBQWEsZUFBSyxFQUFFO0FBQUV5QixtQkFBTyxFQUFFO0FBQVgsV0FBcEI7QUFBQSxrQ0FDRTtBQUNFLGVBQUcsa0NBQTJCRCxDQUEzQixDQURMO0FBRUUsaUJBQUssRUFBRTtBQUFFRSxtQkFBSyxFQUFFO0FBQVQsYUFGVDtBQUdFLGVBQUcsRUFBRUY7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBQSxtQ0FDRSxxRUFBQywyQ0FBRDtBQUFRLHFCQUFPLEVBQUVMLGFBQWEsQ0FBQ25CLENBQUQsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUEsV0FBVXdCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVlELE9BYkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBbEdEOztHQUFNOUMsUTtVQUNpQ0MsdUQsRUFDQ0ssdUQsRUFDckJLLHVEOzs7S0FIYlgsUTtBQW9HU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGExMGFkODBiMjM1MzEwMGJlNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFJFTU9WRV9JTUFHRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2VzUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8g7Y+s7Iqk7Yq466W8IOuztOuCtOqzoCDshLHqs7XtlZjrqbQgaW5wdXTssL3snYQg67mE7JuM7KSA64ukLlxyXG4gICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqUXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlc1BhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaSk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgdGV4dCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCLsl4XroZzrk5xcIik7XHJcbiAgfSwgW3RleHQsIGltYWdlc1BhdGhzXSk7XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VzXCIsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDAgMjBweFwiIH19XHJcbiAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fVxyXG4gICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065akIOyDneqwgeydhCDqsJbqs6Ag6rOE7Iug6rCA7JqUP1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtpbWFnZXNQYXRocy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC8ke3Z9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGFsdD17dn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==