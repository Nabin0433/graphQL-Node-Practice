"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GetBooks = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`{\n  books{\n    name\n  }\n}`;\nconst index = ()=>{\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(GetBooks);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/nabin/Desktop/graphQL-fullstack/client/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error : \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nabin/Desktop/graphQL-fullstack/client/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data?.books?.map((itam)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: itam.name\n                }, void 0, false, {\n                    fileName: \"/Users/nabin/Desktop/graphQL-fullstack/client/pages/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nabin/Desktop/graphQL-fullstack/client/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/nabin/Desktop/graphQL-fullstack/client/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStDO0FBQ3RCO0FBR3pCLE1BQU1HLFdBQVdILCtDQUFHLENBQUM7Ozs7Q0FJcEIsQ0FBQztBQUVGLE1BQU1JLFFBQVEsSUFBTTtJQUNsQixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR04sd0RBQVFBLENBQUNFO0lBRzFDLElBQUlFLFNBQVMscUJBQU8sOERBQUNHO2tCQUFFOzs7Ozs7SUFDdkIsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0U7O1lBQUU7WUFBU0YsTUFBTUcsT0FBTzs7Ozs7OztJQUUzQyxxQkFDRSw4REFBQ0M7a0JBQ0VILE1BQU1JLE9BQU9DLElBQUksQ0FBQ0MscUJBQ2pCLDhEQUFDSDswQkFDQyw0RUFBQ0k7OEJBQUlELEtBQUtFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7QUFFQSxpRUFBZVgsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuY29uc3QgR2V0Qm9va3MgPSBncWxge1xuICBib29rc3tcbiAgICBuYW1lXG4gIH1cbn1gO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR2V0Qm9va3MpO1xuXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhPy5ib29rcz8ubWFwKChpdGFtOiBhbnkpID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e2l0YW0ubmFtZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiUmVhY3QiLCJHZXRCb29rcyIsImluZGV4IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInAiLCJtZXNzYWdlIiwiZGl2IiwiYm9va3MiLCJtYXAiLCJpdGFtIiwiaDEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();