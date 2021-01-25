webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");



var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\nodebird\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @format */




var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showImageZoom = _useState[0],
      setShowImageZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowImageZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowImageZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: images[0].src,
        alt: images[0].src,
        style: {
          width: "50%",
          display: "inline-block"
        },
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), showImageZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 27
      }, _this)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "http://localhost:3080/".concat(images[0].src),
        alt: "http://localhost:3080/".concat(images[0].src),
        style: {
          width: "50%",
          display: "inline-block"
        },
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "http://localhost:3080/".concat(images[1].src),
        alt: "http://localhost:3080/".concat(images[1].src),
        style: {
          width: "50%",
          display: "inline-block"
        },
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), showImageZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 27
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "http://localhost:3080/".concat(images[0].src),
      alt: "http://localhost:3080/".concat(images[0].src),
      style: {
        width: "50%",
        display: "inline-block"
      },
      onClick: onZoom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "inline-block",
        width: "50%",
        textAlign: "center",
        verticalAlign: "middle"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), images.length - 1, " \uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), showImageZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }, _this)]
  }, void 0, true);
};

_s(PostImages, "jGJAmWSrkCKEauXyly55t7iAgro=");

_c = PostImages;
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZVpvb20iLCJzZXRTaG93SW1hZ2Vab29tIiwib25ab29tIiwidXNlQ2FsbGJhY2siLCJvbkNsb3NlIiwibGVuZ3RoIiwic3JjIiwid2lkdGgiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQzFCQyxhQUQwQjtBQUFBLE1BQ1hDLGdCQURXOztBQUVqQyxNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMvQkYsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNELEdBRnlCLEVBRXZCLEVBRnVCLENBQTFCO0FBSUEsTUFBTUcsT0FBTyxHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDaENGLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjs7QUFHQSxNQUFJSCxNQUFNLENBQUNPLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsd0JBQ0U7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBRVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQURqQjtBQUVFLFdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUZqQjtBQUdFLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUUsS0FBVDtBQUFnQkMsaUJBQU8sRUFBRTtBQUF6QixTQUhUO0FBSUUsZUFBTyxFQUFFTjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQU9HRixhQUFhLGlCQUFJLHFFQUFDLG1EQUFEO0FBQVksY0FBTSxFQUFFRixNQUFwQjtBQUE0QixlQUFPLEVBQUVNO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQcEI7QUFBQSxvQkFERjtBQVdEOztBQUNELE1BQUlOLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qix3QkFDRTtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxrQ0FBMkJQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBckMsQ0FETDtBQUVFLFdBQUcsa0NBQTJCUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQXJDLENBRkw7QUFHRSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLGlCQUFPLEVBQUU7QUFBekIsU0FIVDtBQUlFLGVBQU8sRUFBRU47QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRTtBQUNFLFdBQUcsa0NBQTJCSixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQXJDLENBREw7QUFFRSxXQUFHLGtDQUEyQlIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUFyQyxDQUZMO0FBR0UsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxLQUFUO0FBQWdCQyxpQkFBTyxFQUFFO0FBQXpCLFNBSFQ7QUFJRSxlQUFPLEVBQUVOO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLEVBYUdGLGFBQWEsaUJBQUkscUVBQUMsbURBQUQ7QUFBWSxjQUFNLEVBQUVGLE1BQXBCO0FBQTRCLGVBQU8sRUFBRU07QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJwQjtBQUFBLG9CQURGO0FBaUJEOztBQUNELHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLGtDQUEyQk4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUFyQyxDQURMO0FBRUUsU0FBRyxrQ0FBMkJSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBckMsQ0FGTDtBQUdFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsZUFBTyxFQUFFO0FBQXpCLE9BSFQ7QUFJRSxhQUFPLEVBQUVOO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0U7QUFDRSxXQUFLLEVBQUU7QUFDTE0sZUFBTyxFQUFFLGNBREo7QUFFTEQsYUFBSyxFQUFFLEtBRkY7QUFHTEUsaUJBQVMsRUFBRSxRQUhOO0FBSUxDLHFCQUFhLEVBQUU7QUFKVixPQURUO0FBQUEsOEJBUUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLEVBVUdaLE1BQU0sQ0FBQ08sTUFBUCxHQUFnQixDQVZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQW1CR0wsYUFBYSxpQkFBSSxxRUFBQyxtREFBRDtBQUFZLFlBQU0sRUFBRUYsTUFBcEI7QUFBNEIsYUFBTyxFQUFFTTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJwQjtBQUFBLGtCQURGO0FBdUJELENBaEVEOztHQUFNUCxVOztLQUFBQSxVO0FBa0VTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmViYjdiOTg5NWE0ZWI5NTRjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gXCIuL0ltYWdlc1pvb21cIjtcclxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dJbWFnZVpvb20sIHNldFNob3dJbWFnZVpvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dJbWFnZVpvb20odHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0ltYWdlWm9vbShmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd0ltYWdlWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDgwLyR7aW1hZ2VzWzBdLnNyY31gfVxyXG4gICAgICAgICAgYWx0PXtgaHR0cDovL2xvY2FsaG9zdDozMDgwLyR7aW1hZ2VzWzBdLnNyY31gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC8ke2ltYWdlc1sxXS5zcmN9YH1cclxuICAgICAgICAgIGFsdD17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC8ke2ltYWdlc1sxXS5zcmN9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd0ltYWdlWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwODAvJHtpbWFnZXNbMF0uc3JjfWB9XHJcbiAgICAgICAgYWx0PXtgaHR0cDovL2xvY2FsaG9zdDozMDgwLyR7aW1hZ2VzWzBdLnNyY31gfVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9IOqwnOydmCDsgqzsp4Qg642U67O06riwXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0ltYWdlWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==